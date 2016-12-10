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
      mainImage : "https://cdn.ytadvisors.com/images/blog/shutup.jpg",
      page : "blog",
      month : "Dec",
      day : "08",
      content : `
        <div class = "shut-up-do-it">
          <br/><blockquote>Most startups fail</blockquote><br/>
          <p>
          We've been told this so many times as entrepreneurs we've practically memorized the failure statistic (90 percent). 
           Chances our little startup will fall in the gutter are so high, that entrepreneurs willing to go forward with their
            business are either:
          </p>
          <ol class = "categoryList">
            <li>Clinically insane - the crazy people, the blindly dumb or naive.</li>
            <li>Truly lucky (don't play poker with these guys)</li>
            <li>Certifiable geniuses.</li>
          </ol><br/>
          <p>
          A few weeks ago, I was given the opportunity to lecture to a group of these entrepreneurs at <a href ="https://cetstl.com/programs/square-one/"><b>Square One</b></a>
          (a startup bootcamp at <a href="https://cetstl.com/"><b>CET</b></a>) about <i>Creating an MVP</i>. 
            Twenty minutes into my Powerpoint presentation I was fielding practical questions and an hour later a lady, quiet throughout
             the majority of the lecture, looked me straight in the eyes and asked,
          </p>
          <blockquote>What do you do if you don't want someone to steal your idea?</blockquote><br/>
          <p>I took a moment to pause; I'd heard this trick question before.  Despite encouraging people with big ideas to share them, we often realize
           that most young entrepreneurs fear people stealing their ideas. "Share your idea" I told her. "The more advice you get, the better you'll refine it".  
          </p>
          <p>
          In retrospect, here's what I should have politely explained:
          </p>
          <h3>Shut up & Do it!</h3>
          <p><i>Ten steps to get your idea off the ground.</i></p>
          <p class="letterContainer">
          <span class="number">1.</span>
          <span class="largeLetter color4">S</span>
          <span class="smallerLetters">tart small</span>
          </p>
          <p>
          When most founders have a big idea the first thing they do is try to put their big idea in a big product. 
           While it seems like a smart way to start, it completely ignores customer feedback. 
            You end up building a product you envision, but no one wants.  Instead, start small and test your hypothesis about your customer.
          </p>
          <p class="letterContainer">
            <span class="number">2.</span>
            <span class="largeLetter color4">H</span>
            <span class="smallerLetters">ave a clear vision</span>
          </p>
          <p>
          Define your mission very early and very clearly.  Company culture, product direction, new team members, and the future of
           your company depends on it.  If you find yourself in a team without a clear vision you'll be jumping from one idea to another.
          </p>
          <p>Tactics without strategy is the noise before defeat - <i>Sun Tzu</i></p>
          <p class="letterContainer">
            <span class="number">3.</span>
            <span class="largeLetter color4">U</span>
            <span class="smallerLetters">nderstand your customer</span>
          </p>
          <p>
          Step outside and talk to your customer.  Who are they?  What do they think? See? Feel? Do?  Ask them what problems they have. 
           Find out if your solution is appealing to them.  What are the alternatives the customer uses today?  
          </p>
          <p>
          Understanding your customer is one of the keys to the success of your business.
          </p>
          <p class="letterContainer">
            <span class="number">4.</span>
            <span class="largeLetter color4">T</span>
            <span class="smallerLetters">rust your instincts</span>
          </p>
          <p>
          The natural traits of a great entrepreneur cannot be taught.  They are able to take calculated risks, identify market trends,
           and provide creative solutions.  When others see problems an entrepreneur sees opportunities.  It is important to
            amass knowledge of your market and customer and use your instincts to act on what you gather.
          </p>
          <p class="letterContainer">
            <span class="number">5.</span>
            <span class="largeLetter color4">U</span>
            <span class="smallerLetters">se all available resources</span>
          </p>
          <p>
          It takes a village to run a company.  Start by building yours.  Get your family and friends involved.  Start leveraging
           your network, contact your business associates, talk to other entrepreneurs.  Reach out to your chamber of commerce,
            research local mentorship programs.  There are people willing to help.
          </p>
          <p class="letterContainer">
            <span class="number">6.</span>
            <span class="largeLetter color4">P</span>
            <span class="smallerLetters">in point your value proposition</span>
          </p>
          <p>
          Why will a customer use your solution?  Decide what things you will do to cause a customer to pick you over
           a competitor or an alternative.  What is compelling about your proposition and which customer needs are you satisfying?
          </p>
          <p class="letterContainer">
            <span class="number">7.</span>
            <span class="largeLetter color4">D</span>
            <span class="smallerLetters">evelop your product</span>
          </p>
          <p>
          "Do it" is an active mentality and it begins by developing.  After you have an understanding of your customer, 
          gathered available resources, and pin pointed your value proposition, build your Minimum Viable Product (MVP).  
          </p>
          <p class="letterContainer">
            <span class="number">8.</span>
            <span class="largeLetter color4">O</span>
            <span class="smallerLetters">perate efficiently</span>
          </p>
          <p>
          When you are operating your company it is extremely important to be cost and resource efficient. 
           Most companies fail from a lack of customers, so make sure all development, sales, and marketing efforts
            work together to grow your customer base and build customer relationships.
          </p>
          <p class="letterContainer">
            <span class="number">9.</span>
            <span class="largeLetter color4">I</span>
            <span class="smallerLetters">nvest your time and money</span>
          </p>
          <p>
          Expect others to follow your example.  Invest your time into your company if you expect your employees to do the same. 
           More importantly, invest in your employees and build strong relationships.  If you consider a comparison to an army,
            you can either have an army of mercenaries or patriots.  A passionate employee has a powerful incentive to stand by your side. 
          </p>
          <p class="letterContainer">
            <span class="number">10.</span>
            <span class="largeLetter color4">T</span>
            <span class="smallerLetters">ake measurable actions</span>
          </p>
          <p>
          A core component of the Lean Startup methodology is the build-measure-learn feedback loop.  One of your early goals
           as a company is to quickly build a minimum viable product, measure it's effectiveness and learn from the experiment. 
            As your company matures, your goal is to get to a product market fit efficiently.   This is done by actively
             measuring the successfulness of the business decisions you make.
          </p>
      </div>
      `
    };
  },
  render : function(){
    return <div>
      <Helmet
        title ="Shut up and Do it"
        meta={[
        { name: 'description', content: 'Ten steps to get your idea off the ground.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { property: 'og:image', content: 'https://cdn.ytadvisors.com/images/blog/shutup.jpg' },
        { property: 'og:title', content: "Shut up & Do it!" },
        { property: 'og:description', content: "Ten steps to get your idea off the ground." },
        { property: 'og:image:width', content: "650" },
        { property: 'og:image:height', content: "497" },
        { property: 'og:site_name', content: "ytadvisors" },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:url', content: `${process.env.SITE_URL}/blog/shut-up-do-it/` },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:type', content: "article" },
        { name: 'author', content: "Yomi Toba" },
        { name: 'twitter:title', content: "Shut up & Do it!" },
        { name: 'twitter:description', content: "Ten steps to get your idea off the ground." },
        { name: 'twitter:site', content: '@ytadvisors' },
        { name: 'twitter:image', content: 'https://cdn.ytadvisors.com/images/blog/shutup.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@ytadvisors' }
        ]}
      />
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "blog"}}>
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
