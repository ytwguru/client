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
      mainImage : "http://cdn.ytadvisors.com/images/services/integration.png",
      page : "system_integration",
      content: `
      <p>We create software integration solutions allowing companies to integrate with third party platforms.</p>
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
        <MidBreaker data={{id : "paralaxSlice9", text: "System Integration", header: true }}>
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