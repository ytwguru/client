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
      mainImage : "https://cdn.ytadvisors.com/images/blog/shutup.jpg",
      page : "blog",
      month : "Dec",
      day : "08",
      title : "Shut up & Do it!",
      content : `
        <div class = "shut-up-do-it">
          <p>
          "Most startups fail". We've been told this so many times as entrepreneurs we've practically memorized the failure statistic (90 percent). 
           Chances our little startup will fall in the gutter are so high, that entrepreneurs willing to go forward with their
            business are either:
          </p>
          <p>
            <a href ="/blog/shut-up-do-it/" class = "btn">Read More</a>
          </p>
      </div>
      `
    };
  },
  render : function(){
    return <div>
      <Helmet
        title ="Blog about software, business and technology"
        meta={[
        { name: 'description', content: 'Technology and Business' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { property: 'og:image', content: 'https://cdn.ytadvisors.com/images/blog/shutup.jpg' },
        { property: 'og:title', content: "Blog about software, business and technology" },
        { property: 'og:description', content: "Technology and Business" },
        { property: 'og:image:width', content: "650" },
        { property: 'og:image:height', content: "497" },
        { property: 'og:site_name', content: "ytadvisors" },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:url', content: `${process.env.SITE_URL}/blog/shut-up-do-it/` },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:type', content: "article" },
        { name: 'author', content: "Yomi Toba" },
        { name: 'twitter:title', content: "Blog about software, business and technology" },
        { name: 'twitter:description', content: "Technology and Business" },
        { name: 'twitter:site', content: '@ytadvisors' },
        { name: 'twitter:image', content: 'https://cdn.ytadvisors.com/images/blog/shutup.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@ytadvisors' }
        ]}
      />
      <Preloader >
      </Preloader>
      <div id="globalWrapper" >
        <Header data={{page : "blog"}}>
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
});
