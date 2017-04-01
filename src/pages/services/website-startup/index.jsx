import React from "react";
import "./styles.less";

import Header from "../../../components/Header";
import Posts from "../../../components/Posts";
import MidBreaker from "../../../components/MidBreaker";
import Preloader from "../../../components/Preloader";
import Footer from "../../../components/Footer";
import Quote from "../../../components/Quote";
import Helmet from "react-helmet";

class WebsiteStartup extends React.Component{
  getServiceData(){
    return {
      page : "website-startup",
      params : this.props.location.query,
      content: `
      <p> 
      We develop responsive sites that provide the best user experience across devices, combining great design, form and function so
       users can find the information they need quickly.  We leverage usability testing tools and techniques to understand how users interact
       with your product to maximize user engagement and satisfaction.
      </p><br/>
      <h3>Best experience for your site visitors</h3>
      <p> 
      We leverage usability testing tools and techniques to understand how users interact with your product to maximize user
       engagement and satisfaction.  Our goal is always to provide the best experience for your site visitors no matter what
        device they use to visit your website.  We have experienced and highly creative graphic designers who provide you with
         the latest design trends for your pages while maintaining your brand identity.  
      </p><br/>
      <h3>Best practices in web design</h3>
      <p> 
      We create the fastest experiences for your visitors.  Using best practices in web design and engineering, we create fast
       loading pages, shorter buying processes and high conversion e-commerce checkout pages. Your customers can seamlessly
        flow through your website and provide immediate monetary value for your company.
      </p><br/>
      <h3>Working with Startups</h3>
      <p> We quickly deploy an MVP for your new business with hand-crafted solutions that merge smart design, leading-edge
       technology and your unique business goals.
      </p><br/>
      <p>
       <div>
       For pricing click <a href = "/pricing/website/">here</a>
       </div>
      </p>`
    };
  }

  render(){
    return <div>
      <Helmet
        title ="Website design and working with startups"
        meta={[
        { name: 'description', content: 'We develop responsive sites that provide the best user experience across devices' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { property: 'og:image', content: 'https://cdn.ytadvisors.com/images/services/website_design.png' },
        { property: 'og:title', content: "Website design and working with startups" },
        { property: 'og:description', content: "We develop responsive sites that provide the best user experience across devices" },
        { property: 'og:image:width', content: "540" },
        { property: 'og:image:height', content: "300" },
        { property: 'og:site_name', content: "ytadvisors" },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:url', content: `${process.env.SITE_URL}/services/website-startup/` },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:type', content: "article" },
        { name: 'author', content: "Yomi Toba" },
        { name: 'twitter:title', content: "Website design and working with startups" },
        { name: 'twitter:description', content: "We develop responsive sites that provide the best user experience across devices" },
        { name: 'twitter:site', content: '@ytadvisors' },
        { name: 'twitter:image', content: 'https://cdn.ytadvisors.com/images/services/website_design.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@ytadvisors' }
        ]}
      />
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "services"}}>
        </Header>
        <Posts  data={this.getServiceData()}>
        </Posts>
      </div>
      <Quote data={{ color: "color4" }}>
      </Quote>
      <Footer>
      </Footer>
    </div>
  }
}

export default WebsiteStartup;