import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { default as reducer } from './modules/reducer';
import DevTools from '../components/DevTools';
import { persistState } from 'redux-devtools';
import { default as createLogger } from 'redux-logger';

export default (browserHistory) => {
  const middleware = [
    routerMiddleware(browserHistory)
  ];

  if (process.env.DEVTOOLS) {
    middleware.push(createLogger())
  }

  let finalCreateStore;
  if (typeof window !== 'undefined' && process.env.DEVELOPMENT && process.env.DEVTOOLS) {
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore)
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore)
  }

  const store = finalCreateStore(reducer);

  if (process.env.DEVELOPMENT && module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer'))
    })
  }

  return store
}
