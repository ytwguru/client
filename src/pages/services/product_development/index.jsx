import React from "react";
import "./styles.less";

import Header from "../../../components/Header";
import Posts from "../../../components/Posts";
import MidBreaker from "../../../components/MidBreaker";
import Preloader from "../../../components/Preloader";
import Footer from "../../../components/Footer";
import Quote from "../../../components/Quote";
import Helmet from "react-helmet";

export default React.createClass({
  getServiceData : function(){
    return {
      mainImage : "http://cdn.ytadvisors.com/images/services/product_dev.png",
      page : "product_development",
      content : `
      <p>
      We design and develop web, mobile and desktop applications following a value-driven, iterative process.
      </p>
      <h3>Full Cycle Product Development</h3>
      <p>
      We are a full-cycle software product development service provider supporting you at any stage of your product evolution. 
       We bring your product vision to life, whether it's a new product, new features, or re-platforming legacy products.  
      </p>
      <h3>Project Rescue</h3>
      <p>
      If you have a partially completed product and you need it completed under tight deadlines we can be a great solution. 
       While documentation might be incomplete or unavailable, we will analyze what you have, assess the remain requirements to reach
        a finished product, and provide you with a plan and budget.
      </p>
      <h3>Team Expansion</h3>
      <p>
      If you have an existing established team with well defined processes, but need to extend your development capability,
       we can be a resource for you.   We will analyze your processes and adjust our team to plug into your system. 
        We will dedicated a team to your project and scale on demand.
      </p>
      `
    };
  },
  render : function(){
    return <div>
      <Helmet
        title ="Product development services"
        meta={[
        { name: 'description', content: 'We design and develop web, mobile and desktop applications following a value-driven, iterative process.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' }
        ]}
      />
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "services"}}>
        </Header>
        <MidBreaker data={{id : "paralaxSlice9", text: "Product Development", header: true }}>
        </MidBreaker>
        <Posts data={this.getServiceData()}>
        </Posts>
      </div>
      <Quote data={{ color: "color4" }}>
      </Quote>
      <Footer>
      </Footer>
    </div>
  }
});
