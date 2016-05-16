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
      <Router history={history} routes={routes} />
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
            <RouterContext {...props} />
          </Provider>
        }
      />
    )
    callback(null, `<!doctype html>${html}`)
  })
}
