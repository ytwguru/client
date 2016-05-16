# how-to-create-a-static-site-using-todays-javascript
How to create a static site using today's Javascript

Build a full-scale static javascript application using a modern javascript toolchain. The goal for this is to demonstrate a modern workflow with minimal tooling and the abiity to retain things like page-specific meta data for search engines and social media bots.

#### 1. Start your project
We're going to use [npm](https://www.npmjs.com) to manage dependencies. You'll need [Node.js and npm](https://docs.npmjs.com/getting-started/installing-node) to continue.

Open up your terminal, navigate to your project folder and type `npm init` at the prompt. Here is where you'll define basic information about your project (Name, description, author, ...).

#### 2. Install dependencies

While we're here, lets go ahead and install everything we are going to need today. In your terminal, type the following:
```
npm i -D webpack
```

#### 3. Babel
```json
  "babel": {
    "presets": [
      "react",
      "es2015",
      "stage-0"
    ],
    "plugins": [
      "jsx-control-statements",
      "transform-decorators-legacy"
    ]
  }
```

#### 3. Webpack!

We're using `webpack` and `webpack-dev-server` to serve-up our application at `localhost:8080` and later export everything into a format that will work statically (either on a service like Amazcon S3 or locally).

Create a new file called `webpack.config.js` & copy and paste the following into your new webpack configuation file.

```javascript
// webpack.config.js
const routes = ['/', '/about/']
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    main: path.resolve('./src/index.js')
  },
  output: {
    filename: 'package.js',
    path: path.resolve('./dist'),
    libraryTarget: 'umd'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: path.resolve('./src'),
        loader: 'standard'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve('./src'),
        loaders: ['babel']
      }
    ]
  },
  resolve: {
    root: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ],
    modulesDirectories: [
      'src',
      'src/components',
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx', '.json']
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', routes),
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        DEVELOPMENT: JSON.stringify(process.env.DEVELOPMENT),
        DEVTOOLS: JSON.stringify(process.env.DEVTOOLS),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}
```

#### 4. Start coding 🏁
- create src folder
- create src/index.js

```javascript
// src/index.js
import { default as React } from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { default as withScroll } from 'scroll-behavior'
import { default as createStore } from './redux/create'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { default as routes } from './routes'

let history = withScroll(browserHistory)
const store = createStore(history)
history = syncHistoryWithStore(history, store)
render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('content')
)
```

In a normal single page application, this logic would be fine because we would only need to run this in the browser. Remember, we need webpack to render our application as a static site for seo purposes. In order to accomplish that, `static-site-generator-webpack-plugin` requires us to export a default function inside of our `index.js` file. Here's what our index.js file looks like as a result.

```javascript
// src/index.js
import { default as React } from 'react'
import { render } from 'react-dom'
import { Router, RouterContext, match, browserHistory } from 'react-router'
import { default as withScroll } from 'scroll-behavior'
import { default as createStore } from './redux/create'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { default as routes } from './routes'
import { createMemoryHistory } from 'history'
import { renderToString } from 'react-dom/server'
import { Html } from './components'
import { default as canUseDOM } from 'can-use-dom'

if (canUseDOM) {
  let history = withScroll(browserHistory)
  const store = createStore(history)
  history = syncHistoryWithStore(history, store)
  render(
    <Provider store={store}>
      <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('content')
  )
}

export default ({ assets, path }, callback) => {
  const history = createMemoryHistory()
  const store = createStore(history)
  const location = history.createLocation(path)

  match({ routes, location }, (error, redirectLocation, props) => {
    if (error) {
      throw new Error(error)
    }

    const html = renderToString(
      <Html
        assets={assets}
        component={
          <Provider store={store}>
            <RouterContext {...props}/>
          </Provider>
        }
      />
    )
    callback(null, html)
  })
}
```

Pay special attention to the package `can-use-dom`. This is a neat little package whose job is simply to detect if we're in the browser or running on a computer (using Node.js or something). The reason we need this is because we're referencing the `document` object and Node doesn't know about `document`. `document` and `window` are browser things and we need to treat them that way. Welcome to isomorphic javascript. 🤓

Awesome, so in order to fire up our app we still need a couple things.

- create src/components folder
- create src/components/Html.js

```javascript
// src/components/Html.js
import { default as React, PropTypes } from 'react'
import { renderToString } from 'react-dom/server'
import { default as Helmet } from 'react-helmet'

const Html = ({ assets, component }) => {
  const content = component ? renderToString(component) : ''
  const head = Helmet.rewind()
  return (
    <html {...head.htmlAttributes.toComponent()}>
      <head>
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
      </head>
      <body>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          id='content'
        />
        <script
          charSet='UTF-8'
          src={`/${assets.main}`}
        />
      </body>
    </html>
  )
}

Html.propTypes = {
  assets: PropTypes.object.isRequired,
  component: PropTypes.node.isRequired
}

export default Html
```

- create src/components/App.js

```javascript
// src/components/App.js
import { default as React, Component, PropTypes } from 'react'
import { default as Helmet } from 'react-helmet'

const App = ({ children }) =>
  <div>
    <Helmet
      htmlAttributes={[
        { lang: 'en' }
      ]}
      link={[
        { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/normalize/4.0.0/normalize.min.css' },
        { rel: 'stylesheet', href: '/style.css' },
        { rel: 'shortcut icon', href: '/favicon.png' },
        { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Oswald:400,700,300' }
      ]}
      meta={[
        { name: 'description', content: 'Software application and web developer located in Ann Arbor, Michigan and available for remote hire. Services include product design, development & deployment.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' }
      ]}
      script={[
        { src: '//code.jquery.com/jquery-2.1.4.min.js' },
        { src: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.7.0/lodash.min.js' }
      ]}
      titleTemplate='How to create a static site with webpack and es6 - %s'
    />
    {children}
  </div>

App.propTypes = {
  children: PropTypes.node
}

export default App
```

- create src/redux folder
- create src/redux/create.js

```javascript
// src/redux/modules/create.js
import { createStore as _createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { default as reducer } from './modules/reducer'
import { DevTools } from '../components'
import { persistState } from 'redux-devtools'
import { default as createLogger } from 'redux-logger'

export default function createStore (browserHistory) {
  const middleware = [
    routerMiddleware(browserHistory)
  ]

  if (process.env.DEVTOOLS) {
    middleware.push(createLogger())
  }

  let finalCreateStore
  if (typeof window !== 'undefined' && process.env.DEVELOPMENT && process.env.DEVTOOLS) {
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore)
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore)
  }

  const store = finalCreateStore(reducer)

  if (process.env.DEVELOPMENT && module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer'))
    })
  }

  return store
}
```

- create src/redux/modules folder
- create src/redux/modules/reducer.js

```
// src/redux/modules/reducer.js
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  routing: routerReducer
})
```

- create src/components/DevTools.js
```javascript
import { default as React } from 'react'
import { createDevTools } from 'redux-devtools'
import { default as LogMonitor } from 'redux-devtools-log-monitor'
import { default as DockMonitor } from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor
    changePositionKey='ctrl-w'
    defaultIsVisible={false}
    toggleVisibilityKey='ctrl-h'
  >
    <LogMonitor/>
  </DockMonitor>
)
```

- create src/components/Home.js

```javascript
// src/components/Home.js
import { default as React } from 'react'

const Home = () =>
  <div>
    Home
  </div>

export default Home
```

- create src/components/About.js

```javascript
// src/components/About.js
import { default as React } from 'react'

const About = () =>
  <div>
    About
  </div>

export default About
```

- create src/components/index.js

we want to be able to reference all of our project's components from the src/components folder like this:
```javascript
import { default as Home } from 'components'
```

we just need an index file in src/components to handle that.

```javascript
export { default as About } from './About'
export { default as App } from './App'
export { default as Home } from './Home'
export { default as Html } from './Html'
```
