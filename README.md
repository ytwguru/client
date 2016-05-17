# how-to-create-a-static-site-using-todays-javascript
How to create a static site using today's Javascript

Build a full-scale static javascript application using a modern javascript toolchain. The goal for this is to demonstrate a modern workflow with minimal tooling and the abiity to retain things like page-specific meta data for search engines and social media bots.

#### 1. Start your project
We're going to use [npm](https://www.npmjs.com) to manage dependencies. Run the following commands in your terminal to verify you have these two installed. If not, a decent tutorial on how to install both lives [here](https://docs.npmjs.com/getting-started/installing-node).

```
node -v
npm -v
```

Assuming you have node and npm installed, enter the following into your command prompt.

```
npm init
```

This is where you'll define basic information about your project (Name, description, author, so on).

#### 2. Install dependencies

Lets install everything we are going to need. Copy and paste the following into your terminal window.
```
npm i -D babel-core babel-loader babel-plugin-transform-decorators-legacy babel-preset-es2015 babel-preset-react babel-preset-stage-0 better-npm-run can-use-dom clean-webpack-plugin history jsx-control-statements react react-dom react-helmet react-router react-router-redux redux redux-devtools redux-devtools-dock-monitor redux-devtools-log-monitor redux-logger scroll-behavior standard standard-loader static-site-generator-webpack-plugin webpack webpack-dev-server
```

☕️ This may take a minute or two. Feel free to grab a coffee. ☕️

#### 3. Project Scripts
Open up `package.json` and place the following json anywhere.
```json
"betterScripts": {
  "start-dev": {
    "command": "webpack-dev-server --progress --hot --colors --history-api-fallback --display-error-details",
    "env": {
      "DEVELOPMENT": true,
      "DEVTOOLS": true
    }
  },
  "build": {
    "command": "webpack -p",
    "env": {
      "DEVELOPMENT": false,
      "DEVTOOLS": false,
      "NODE_ENV": "production"
    }
  }
}
```

next, find the `"scripts"` key in `package.json`, and replace it with the following:
```json
"scripts": {
  "start": "better-npm-run start-dev",
  "lint": "standard",
  "build": "better-npm-run build",
  "deploy": "npm run build; aws s3 sync ./dist s3://static-site-demo --exclude '.DS_Store' --profile home"
}
```

#### 4. Babel
Since we're using [Babel](https://babeljs.io/) and react along with it's [JSX syntax](https://facebook.github.io/react/docs/jsx-in-depth.html) we need to configure babel as such. Once again,place this json blob in `package.json` anywhere you'd like 
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

#### 5. Webpack

We're using `webpack` and `webpack-dev-server` to serve our application on `localhost:8080` and later export it into a static format. Create a new file called `webpack.config.js` & copy and paste the following.

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

#### 6. Start coding 🏁
- create `src` folder
- create `src/index.js` file

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

In a normal single page application, this logic would be fine because we would only need to run this in the browser. Remember, we need webpack to render our application as a static site for seo purposes. In order to accomplish that, `static-site-generator-webpack-plugin` requires us to export a default function inside of our `index.js` file. Here's what our final index.js file looks like.

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

Take a look at the package called `can-use-dom`. This thing's job is to detect if it's in the browser or running on a computer (using Node.js or something). We need to know because Node doesn't know about `document`. `document` and `window` are browser-only global objects and will break when assumed global when ran anywhere else. Welcome to isomorphic javascript. 🤓

- create `src/routes.js`

```javascript
// src/routes.js
import { default as React } from 'react'
import * as views from 'components'
import { IndexRoute, Route } from 'react-router'

export default (
  <Route path='/' component={views.App}>
    <IndexRoute component={views.Home} />
    <Route path='about' component={views.About} />
    <Route path='*' component={views.Error404} />
  </Route>
)
```

- create `src/components` folder
- create `src/components/Html.js`

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

- create `src/components/App.js`

```javascript
// src/components/App.js
import { default as React, PropTypes } from 'react'
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
        { rel: 'shortcut icon', href: '/favicon.png' }
      ]}
      meta={[
        { name: 'description', content: 'A demonstration of creating a static site with webpack, es6 and react.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' }
      ]}
      script={[
        { src: '//code.jquery.com/jquery-2.1.4.min.js' }
      ]}
      titleTemplate='A modern approach to static sites - %s'
    />
    {children}
  </div>

App.propTypes = {
  children: PropTypes.node
}

export default App
```

- create `src/redux` folder
- create `src/redux/create.js`

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

- create `src/redux/modules` folder
- create `src/redux/modules/reducer.js`

```javascript
// src/redux/modules/reducer.js
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  routing: routerReducer
})
```

- create `src/components/DevTools.js`

```javascript
// src/components/DevTools.js
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

- create `src/components/Home.js`

```javascript
// src/components/Home.js
import { default as React } from 'react'

const Home = () =>
  <div>
    Home
  </div>

export default Home
```

- create `src/components/About.js`

```javascript
// src/components/About.js
import { default as React } from 'react'

const About = () =>
  <div>
    About
  </div>

export default About
```

- create `src/components/index.js`

we want to be able to reference all of our project's components from the src/components folder like this: `javascript import { default as Home } from 'components'` we will use an index file in src/components to handle that.

```javascript
// src/components/index.js
export { default as About } from './About'
export { default as App } from './App'
export { default as Home } from './Home'
export { default as Html } from './Html'
```

#### 7. `npm start`

The application should be running now. Visit [127.0.0.1:8080](http://127.0.0.1:8080) to verify.

#### 8. `npm run build`

Type `control + c` to stop the application and run the command `npm run build`. Once the build process is complete, you can head over to the `dist` folder located in the root folder to verify that a static export of application has been successfully built.
