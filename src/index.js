import React from 'react';
import withScroll from 'scroll-behavior';
import routes from './routes';
import Html  from './components/Html';
import canUseDOM from 'can-use-dom';
import createStore from './redux/create';
import { render } from 'react-dom';
import { Router, RouterContext, match, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { renderToString } from 'react-dom/server';


if (canUseDOM) {
  let history = withScroll(browserHistory);
  const store = createStore(history);
  history = syncHistoryWithStore(history, store);
  render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('content')
  )
}

export default ({ assets, path }, callback) => {
  const history = createMemoryHistory();
  const store = createStore(history);
  const location = history.createLocation(path);

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
    );
    callback(null, `<!doctype html>${html}`)
  })
}
