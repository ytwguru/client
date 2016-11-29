import React, { PropTypes } from 'react'
import Helmet from 'react-helmet';

const App = ({ children }) =>
  <div>
    <Helmet
      htmlAttributes={
        { lang: 'en' }
      }
      link={[
        { rel: 'stylesheet', href: '/vendor.min.css' },
        { rel: 'stylesheet', href: '/main.min.css' },
        { rel: 'shortcut icon', href: 'http://cdn.ytadvisors.com/favicons/favicon.ico' }
      ]}
      meta={[
        { name: 'description', content: 'A demonstration of creating a static site with webpack, es6 and react.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' }
      ]}
      titleTemplate='A modern approach to static sites - %s'
    />
    {children}
  </div>;

App.propTypes = {
  children: PropTypes.node
};

export default App
