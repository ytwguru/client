import React from "react";
import "./styles.less";
import Helmet from "react-helmet";

import Header from "../../../components/Header";
import Preloader from "../../../components/Preloader";
import Footer from "../../../components/Footer";
import Quote from "../../../components/Quote";
import Offer from "../../../components/Offer";


class Website extends React.Component{

  constructor(props){
    super(props);
  }

  getPlanDetails() {
    return {
      title : "Website Pricing",
      params : this.props.location.query,
      product : "Website",
      plan: [
        {
          type: "Basic",
          price: "1,500",
          duration: "",
          featureList: [
            "1 Landing Page",
            "Lifetime of free hosting",
            "Unlimited Bandwidth",
            "500M of storage",
            "Email support"
          ]
        },
        {
          type: "Silver",
          price: "5,000",
          duration: "",
          featureList: [
            "15 pages",
            "Lifetime of free hosting",
            "Unlimited Bandwidth",
            "2G of Storage",
            "Email support",
            "Modern site re-design"
          ]
        },
        {
          type: "Gold",
          price: "15,000",
          duration: "",
          selected: true,
          featureList: [
            "50 pages",
            "Lifetime of free hosting",
            "Unlimited Bandwidth",
            "10G of Storage",
            "Email + Phone support",
            "Modern site re-design",
            "3 mo. SEO",
            "3 mo. Social media marketing"
          ]
        },
        {
          type: "Platinum",
          price: "",
          duration: "Request a quote",
          featureList: [
            "Unlimited pages",
            "Lifetime of free hosting",
            "Unlimited Bandwidth",
            "50G storage",
            "Email + Phone support",
            "Modern site re-design",
            "6 mo. SEO",
            "6 mo. Social media marketing",
            "User Login and Registration",
            "E-commerce"
          ]
        }
      ]
    };
  }

  render() {
    return <div>
      <Helmet
        title ="Website Pricing"
        meta={[
        { name: 'description', content: 'Pricing Plans for website development' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { property: 'og:image', content: 'https://cdn.ytadvisors.com/images/services/website.png' },
        { property: 'og:title', content: "Website Pricing" },
        { property: 'og:description', content: "Pricing Plans for website development" },
        { property: 'og:site_name', content: "ytadvisors" },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:url', content: `${process.env.SITE_URL}/pricing/website/` },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:type', content: "article" },
        { name: 'author', content: "Yomi Toba" },
        { name: 'twitter:title', content: "Website Pricing" },
        { name: 'twitter:description', content: "Pricing Plans for website development" },
        { name: 'twitter:image', content: 'https://cdn.ytadvisors.com/images/services/website.png' },
        { name: 'twitter:site', content: '@ytadvisors' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@ytadvisors' }
        ]}
        script={ process.env.DEPLOY === "true" ? [
        { "type": "text/javascript", "innerHTML": `
        (function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,
        0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
    for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);
mixpanel.init("${process.env.MIXPANEL_TRACKER}");
        `
        },
        { "type": "text/javascript", "innerHTML": `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', '${process.env.GA_TRACKER}', 'auto');
        ga('send', 'pageview');
        `
        },
        {"type" : "text/javascript", "src" : "https://checkout.stripe.com/checkout.js"}
      ] : [ {"type" : "text/javascript", "src" : "https://checkout.stripe.com/checkout.js"} ] }
      />
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "pricing"}}>
        </Header>
        <section className = "pricing">
          <div className = "pricingHeader topPadded color4">
            <div className = "container">
              <img src = "https://cdn.ytadvisors.com/images/services/website.png" className="img-responsive" />
            </div>
          </div>
        </section>
        <Offer data={this.getPlanDetails()}>
        </Offer>
        <Quote data={{ color: "color4" }}>
        </Quote>
        <Footer>
        </Footer>
      </div>
    </div>
  }
}

export default Website;