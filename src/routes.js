import React from 'react';
import App from './components/App';
import { IndexRoute, Route } from 'react-router';
import routes from "./routes.json";

export default (
  <Route path='/' component={App} >
      {
        routes.map((route) => {
          let module = require(route.page).default;
          if(route.index){
            return <IndexRoute component={module} key = {route.key}/>
          }
          else{
            return < Route path={route.path} component={module} key = {route.key}/>;
          }
        })
      }
  </Route>
);

