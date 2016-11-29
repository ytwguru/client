import React from 'react';
import Helmet from 'react-helmet';

import "./global.less";
import "./icons.less";
import "./colors.less";
import "./custom-icons/custom-icons.css";
import "./custom-icons/custom-icons-ie7.css";

class App extends React.Component{

  render() {
    return <div>
      <Helmet
        htmlAttributes={
        { lang: 'en' }
      }
        link={[
        { rel: 'stylesheet', href: '/vendor.min.css' },
        { rel: 'stylesheet', href: '/main.min.css' },
        { rel: 'shortcut icon', href: 'http://cdn.ytadvisors.com/favicons/favicon.ico' },
        { rel: 'apple-touch-icon', sizes : "57x57", href : "http://cdn.ytadvisors.com/favicons/apple-icon-57x57.png"},
        { rel: 'apple-touch-icon', sizes : "60x60", href : "http://cdn.ytadvisors.com/favicons/apple-icon-60x60.png"},
        { rel: 'apple-touch-icon', sizes : "72x72", href : "http://cdn.ytadvisors.com/favicons/apple-icon-72x72.png"},
        { rel: 'apple-touch-icon', sizes : "76x76", href : "http://cdn.ytadvisors.com/favicons/apple-icon-76x76.png"},
        { rel: 'apple-touch-icon', sizes : "114x114", href : "http://cdn.ytadvisors.com/favicons/apple-icon-114x114.png"},
        { rel: 'apple-touch-icon', sizes : "120x120", href : "http://cdn.ytadvisors.com/favicons/apple-icon-120x120.png"},
        { rel: 'apple-touch-icon', sizes : "144x144", href : "http://cdn.ytadvisors.com/favicons/apple-icon-144x144.png"},
        { rel: 'apple-touch-icon', sizes : "152x152", href : "http://cdn.ytadvisors.com/favicons/apple-icon-152x152.png"},
        { rel: 'apple-touch-icon', sizes : "180x180", href : "http://cdn.ytadvisors.com/favicons/apple-icon-180x180.png"},
        { rel: 'icon', type:"image/png", sizes : "192x192", href : "http://cdn.ytadvisors.com/favicons/android-icon-192x192.png"},
        { rel: 'icon', type:"image/png", sizes : "32x32", href : "http://cdn.ytadvisors.com/favicons/favicon-32x32.png"},
        { rel: 'icon', type:"image/png", sizes : "180x180", href : "http://cdn.ytadvisors.com/favicons/favicon-96x96.png"},
        { rel: 'icon', type:"image/png", sizes : "96x96", href : "http://cdn.ytadvisors.com/favicons/favicon-16x16.png"},
        { rel: 'manifest', href : "http://cdn.ytadvisors.com/favicons/manifest.json"}
      ]}
        meta={[
        { name: 'description', content: 'Custom web, mobile, digital, and desktop software development and consulting services' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' }
      ]}
        titleTemplate='A modern approach to static sites - %s'
      />
      {this.props.children}
    </div>
  }
}

export default App;