import React from "react";
import "./styles.less";

import Header from "../../../components/Header";
import Preloader from "../../../components/Preloader";
import Footer from "../../../components/Footer";
import CheckoutButton from "../../../components/CheckoutButton"
import Helmet from "react-helmet";

class DigitalDonation extends React.Component{

  constructor(props){
    super(props);
  }

  getPlan(){
    let params = this.props.location.query;
    let ref = params.ref ? params.ref : "";
    return {
      title : "Digital Donation",
      product : "Digital Donation",
      ref : ref,
      type: "Bundle",
      price: "1,500",
      duration: ""
    }
  }

  render(){
    return <div>
      <Helmet
        title ="Digital Donation Bundle"
        meta={[
        { name: 'description', content: 'Software bundle for small to mid-sized churches and nonprofits' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { property: 'og:image', content: 'https://cdn.ytadvisors.com/images/services/website.png' },
        { property: 'og:title', content: "Digital Donation Bundle" },
        { property: 'og:description', content: "Software bundle for small to mid-sized churches and nonprofits" },
        { property: 'og:image:width', content: "650" },
        { property: 'og:image:height', content: "497" },
        { property: 'og:site_name', content: "ytadvisors" },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:url', content: `${process.env.SITE_URL}/coupons/digital-donation-bundle/` },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:type', content: "article" },
        { name: 'author', content: "Yomi Toba" },
        { name: 'twitter:title', content: "Digital Donation Bundle" },
        { name: 'twitter:description', content: "Software bundle for small to mid-sized churches and nonprofits" },
        { name: 'twitter:site', content: '@ytadvisors' },
        { name: 'twitter:image', content: 'https://cdn.ytadvisors.com/images/services/website.png' },
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
        <Header data={{page : "coupons"}}>
        </Header>
        <div className="couponContainer">
          <div className = "couponHeader topPadded color4">
            <h1>Donation Bundle</h1>
            <div className = "container">
              <img src = "https://cdn.ytadvisors.com/images/services/website.png" className="img-responsive" />
            </div>
          </div>
          <section className = "color0">
            <div className = "container couponDetails">
              <div className = "row">
                <div className = "col-md-12 dealTitle">
                  <h3>YT Advisors is offering a New Years deal for eligible Churches and Nonprofits.</h3>
                  <h1>For $1500</h1>
                </div>
              </div>
            </div>
          </section>
          <section className = "color0">
            <div className = "container">
              <div className = "row">
                <div className = "col-md-6 vcenter">
                  <div className="couponHeader">
                    <img src = "https://cdn.ytadvisors.com/images/services/webpages.png" className="img-responsive" />
                  </div>
                </div>
                <div className = "col-md-6 vcenter">
                  <div className = "couponDetails">
                    <h2>1. New Website</h2>
                    <p>
                      <h4>Responsive websites double giving on mobile devices</h4>
                    </p>
                    <ul>
                      <li>15 web pages</li>
                      <li>Lifetime of free hosting</li>
                      <li>Email Support</li>
                      <li>Modern site re-design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className = "color4">
            <div className = "container">
              <div className = "row">
                <div className = "col-md-6 vcenter">
                  <div className = "couponDetails">
                    <h2>2. Online Donation Button</h2>
                    <p>
                      <h4>Custom-branded donate pages raise 6X more money.</h4>
                    </p>
                    <ul>
                      <li>Donate with your card, PayPal, or Bank transfer</li>
                      <li>Allow donors to select monthly recurring donations</li>
                      <li>100% Secure Donations</li>
                    </ul>
                  </div>
                </div>
                <div className = "col-md-6 vcenter">
                  <div className="couponHeader">
                    <img src = "https://cdn.ytadvisors.com/images/services/donate.png" className="img-responsive donateImg" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className = "color0">
            <div className = "container">
              <div className = "row">
                <div className = "col-md-6 vcenter">
                  <div className="couponHeader">
                    <img src = "https://cdn.ytadvisors.com/images/services/text-to-give.png" className="img-responsive textToGiveImg" />
                  </div>
                </div>
                <div className = "col-md-6 vcenter">
                  <div className = "couponDetails">
                    <h2>3. Text to give</h2>
                    <p>
                      <h4>Monthly donors give 42% more than one-time donors</h4>
                    </p>
                    <ul>
                      <li>Setup in 2 minutes</li>
                      <li>Text any amount to give</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className = "color3">
            <div className = "container">
              <div className = "row">
                <div className = "col-md-6 vcenter">
                  <div className = "couponDetails">
                    <h2>4. Three months social media marketing</h2>
                    <p>
                      <h4>55% of those who engage with nonprofits via social media have been inspired to take further action.</h4>
                    </p>
                    <ul>
                      <li>Increase your Twitter and Facebook followers</li>
                      <li>Schedule your social media posts</li>
                    </ul>
                  </div>
                </div>
                <div className = "col-md-6 vcenter">
                  <div className="couponHeader">
                    <img src = "https://cdn.ytadvisors.com/images/services/socialmediaimg.png" className="img-responsive socialMediaImg" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className = "color3">
            <div className = "container">
              <div className = "row">
                <div className="col-md-12 signupContainer">
                  <div className="pull-right">
                    <CheckoutButton data={this.getPlan()}>Sign up</CheckoutButton>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer>
      </Footer>
    </div>
  }
}

export default DigitalDonation;
