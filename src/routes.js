import { default as React } from 'react'
import * as views from './components'
import About from "./pages/about";
import Error from "./pages/error";
import Home from "./pages/home"
import { IndexRoute, Route } from 'react-router'

export default (
  <Route path='/' component={views.App}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='*' component={Error} />
  </Route>
)
