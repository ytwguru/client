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
      mainImage : "http://cdn.ytadvisors.com/images/services/website_design.png",
      page : "website_startup"
    };
  },
  render : function(){
    return <div>
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "services"}}>
        </Header>
        <MidBreaker data={{id : "paralaxSlice9", text: "Websites Design", header: true }}>
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
