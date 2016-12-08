import React from "react";
import "./styles.less";

import Header from "../../components/Header";
import Posts from "../../components/Posts";
import MidBreaker from "../../components/MidBreaker";
import Preloader from "../../components/Preloader";
import Footer from "../../components/Footer";
import Quote from "../../components/Quote";
import Helmet from "react-helmet";

export default React.createClass({
  getServiceData : function(){
    return {
      mainImage : "http://cdn.ytadvisors.com/images/blog/shutup.jpg",
      page : "blog",
      month : "Dec",
      day : "08",
      title : "Shut up & Do it!",
      content : `
        <div class = "shut_up_do_it">
          <p>
          "Most startups fail". We've been told this so many times as entrepreneurs we've practically memorized the failure statistic (90 percent). 
           Chances our little startup will fall in the gutter are so high, that entrepreneurs willing to go forward with their
            business are either:
          </p>
          <p>
            <a href ="/blog/shut_up_do_it/" class = "btn">Read More</a>
          </p>
      </div>
      `
    };
  },
  render : function(){
    return <div>
      <Helmet
        title ="Blog"
        meta={[
        { name: 'description', content: 'YT Advisors blog' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' }
        ]}
      />
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "blog"}}>
        </Header>
        <MidBreaker data={{id : "paralaxSlice9"}}>
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
