import { default as React, PropTypes } from 'react'
import { default as Helmet } from 'react-helmet'

const App = ({ children }) =>
  <div>
    <Helmet
      htmlAttributes={
        { lang: 'en' }
      }
      link={[
        { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/normalize/4.0.0/normalize.min.css' },
        { rel: 'stylesheet', href: '/style.min.css' },
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
  </div>;

App.propTypes = {
  children: PropTypes.node
};

export default App
