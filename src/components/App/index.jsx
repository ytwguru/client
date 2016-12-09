import React from 'react';
import Helmet from 'react-helmet';

import "./global.less";
import "./icons.less";
import "./colors.less";
import "./styles.less"
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
        { rel : 'stylesheet', href :"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"},
        { rel : 'stylesheet', href :"http://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"},
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
        script={ process.env.DEPLOY === "true" ? [
        { "type": "text/javascript", "innerHTML": `
        (function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,
        0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
    for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"http://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);
mixpanel.init("${process.env.MIXPANEL_TRACKER}");
        `
        },
        { "type": "text/javascript", "innerHTML": `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','http://www.google-analytics.com/analytics.js','ga');
        ga('create', '${process.env.GA_TRACKER}', 'auto');
        ga('send', 'pageview');
        `
        }
      ] : [] }
        defaultTitle = 'Consulting and software development solutions for small, medium and large businesses'
        titleTemplate='%s | YTAdvisors.com'
      />
      {this.props.children}
    </div>
  }
}

export default App;