import React from "react";
import "./styles.less";

import Header from "../../../components/Header";
import Posts from "../../../components/Posts";
import MidBreaker from "../../../components/MidBreaker";
import Preloader from "../../../components/Preloader";
import Footer from "../../../components/Footer";
import Quote from "../../../components/Quote";
import Helmet from "react-helmet";

class ProductDevelopment extends React.Component{
  constructor(props){
    super(props);
  }

  getServiceData(){
    return {
      page : "product-development",
      params : this.props.location.query,
      content : `
      <p>
      We design and develop web, mobile and desktop applications following a value-driven, iterative process.
      </p><br/>
      <h3>Full Cycle Product Development</h3>
      <p>
      We are a full-cycle software product development service provider supporting you at any stage of your product evolution. 
       We bring your product vision to life, whether it's a new product, new features, or re-platforming legacy products.  
      </p><br/>
      <h3>Project Rescue</h3>
      <p>
      If you have a partially completed product and you need it completed under tight deadlines we can be a great solution. 
       While documentation might be incomplete or unavailable, we will analyze what you have, assess the remain requirements to reach
        a finished product, and provide you with a plan and budget.
      </p><br/>
      <h3>Team Expansion</h3>
      <p>
      If you have an existing established team with well defined processes, but need to extend your development capability,
       we can be a resource for you.   We will analyze your processes and adjust our team to plug into your system. 
        We will dedicated a team to your project and scale on demand.
      </p>
      `
    };
  }
  
  render(){
    return <div>
      <Helmet
        title ="Product development services"
        meta={[
        { name: 'description', content: 'We design and develop web, mobile and desktop applications' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { property: 'og:image', content: 'https://cdn.ytadvisors.com/images/services/integration.png' },
        { property: 'og:title', content: "Product development services" },
        { property: 'og:description', content: "We design and develop web, mobile and desktop applications" },
        { property: 'og:image:width', content: "730" },
        { property: 'og:image:height', content: "490" },
        { property: 'og:site_name', content: "ytadvisors" },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:url', content: `${process.env.SITE_URL}/services/product-development/` },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:type', content: "article" },
        { name: 'author', content: "Yomi Toba" },
        { name: 'twitter:title', content: "Product development services" },
        { name: 'twitter:description', content: "We design and develop web, mobile and desktop applications" },
        { name: 'twitter:site', content: '@ytadvisors' },
        { name: 'twitter:image', content: 'https://cdn.ytadvisors.com/images/services/integration.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@ytadvisors' }
        ]}
      />
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "services"}}>
        </Header>
        <Posts data={this.getServiceData()}>
        </Posts>
      </div>
      <Quote data={{ color: "color4" }}>
      </Quote>
      <Footer>
      </Footer>
    </div>
  }
}

export default ProductDevelopment
