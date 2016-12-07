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
      mainImage : "http://cdn.ytadvisors.com/temp/shutup.jpg",
      page : "blog",
      content : `
        <div class = "shut_up_do_it">
          <br/><blockquote>Most startups fail</blockquote><br/>
          <p>
          We've been told this so many times as entrepreneurs, we've practically memorized the failure statistic (90 percent). 
           Chances our little startup will fall in the gutter are so high, entrepreneurs that willingly go forward with their
            business knowing this fact are either:
          </p>
          <ol class = "categoryList">
            <li>Clinically insane - the crazy people, the blindly dumb or naive.</li>
            <li>Truly lucky (don't play poker with these guys)</li>
            <li>Certifiable geniuses.</li>
          </ol><br/>
          <p>
          A few weeks ago, I was given the opportunity to lecture to a group of these entrepreneurs at <a href ="http://cetstl.com/programs/square-one/"><b>Square One</b></a>
          (a startup bootcamp at <a href="http://cetstl.com/"><b>CET</b></a>).  The main topic of my conversation with the class was <i>Creating an MVP</i>. 
            Twenty minutes into my Powerpoint presentation I was fielding practical questions and an hour later a lady quiet throughout
             the majority of the lecture looked me straight in the eyes and asked,
          </p>
          <blockquote>What do you do if you don't want someone to steal your idea.</blockquote><br/>
          <p>I took a moment to pause; I'd heard this trick question before.  We encourage the people with big ideas to share them,
           but this comes with risks.  "Share you idea" I said. "The more people you tell, the more you'll refine it".  
          </p>
          <p>
          In retrospect, here's what I should have politely explained:
          </p>
          <h3>Shut up & Do it!</h3>
          <p><i>Ten steps for your early stage company</i></p>
      </div>
      `
    };
  },
  render : function(){
    return <div>
      <Helmet
        title ="Shut up and Do it"
        meta={[
        { name: 'description', content: 'We design and develop software tailored to your specific demands in a way that ultimately meets all your business goals, expectations, and requirements.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' }
        ]}
      />
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "services"}}>
        </Header>
        <MidBreaker data={{id : "paralaxSlice9", text: "Shut up & Do it!", header: true }}>
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
