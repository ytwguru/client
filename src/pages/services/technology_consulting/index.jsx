import React from "react";
import "./styles.less";

import Header from "../../../components/Header";
import Posts from "../../../components/Posts";
import MidBreaker from "../../../components/MidBreaker";
import Preloader from "../../../components/Preloader";
import Footer from "../../../components/Footer";
import Quote from "../../../components/Quote";

export default React.createClass({
  getServiceData : function(){
    return {
      mainImage : "http://cdn.ytadvisors.com/images/services/security.png",
      page : "technology_consulting",
      content : `
      <p>We help teams understand trends, and security risks, and create road maps to reach development goals.</p>
      <h3>Practical and enduring results</h3>
      <p>We serve clients at every level of their organization, in whatever capacity we can be most useful,
        whether as a trusted advisor to top management or as a coach for front line employees. 
        Our focus is always to deliver practical and enduring results that equip our clients with the tools to grow and lead.
      </p>
      <h3>Specialists work directly with our clients</h3>
      <p>Partnerships with clients lead to recommendations they can put immediately into practice. 
        Our implementation specialist work directly with our clients to help develop workforce skills,
        improve operational experience, and apply new working methods.
      </p>
      <h3>Lean Startup and Design Thinking</h3>
      <p>When working with top management, we incorporate modern conventions using Lean Startup and Design
       Thinking methods by analyzing markets, interviewing customers, looking at the competition and helping
        define roadmaps to set a course for your success.
      </p>
      `
    };
  },
  render : function(){
    return <div>
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "services"}}>
        </Header>
        <MidBreaker data={{id : "paralaxSlice9", text: "Technology Consulting", header: true }}>
        </MidBreaker>
        <Posts  data={this.getServiceData()}>
        </Posts>
      </div>
      <Quote data={{ color: "color4" }}>
      </Quote>
      <Footer>
      </Footer>
    </div>
  }
});
