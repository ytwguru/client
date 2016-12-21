import React from "react";
import "./styles.less";
import Helmet from "react-helmet";

import Header from "../../../components/Header";
import MidBreaker from "../../../components/MidBreaker";
import Preloader from "../../../components/Preloader";
import Footer from "../../../components/Footer";
import Quote from "../../../components/Quote";


export default React.createClass({
  render : function() {
    return <div>
      <Helmet
        title ="Careers"
      />
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "careers"}}>
        </Header>
        <MidBreaker data={{id : "paralaxSlice9", text: "Sales Representative", header : true   }}>
        </MidBreaker>
        <div className = "jobHeader container">
          <div className = "jobSummary">
            <h2>Job Summary</h2>
            <p>
              We’re looking for a results-driven sales representative to actively seek out and engage customer prospects.
              The ideal candidate can quickly absorb and retain product knowledge.
            </p>
          </div>
          <div className = "jobResponsibilities">
            <h2>Responsibilities and Duties</h2>
            <ul>
              <li>Present, promote and sell products/services using solid arguments to existing and prospective customers</li>
              <li>Reach potential customers through cold calling</li>
              <li>Expedite the resolution of customer problems and complaints to maximize satisfaction</li>
              <li>Achieve agreed upon sales targets and outcomes within schedule</li>
              <li>Monitor competition by gathering current marketplace information on pricing, products, new products etc.</li>
              <li>Analyze the territory/market’s potential, track sales and status reports</li>
              <li>Recommend changes in products, service, and policy by evaluating results and competitive developments.</li>
              <li>Keep abreast of best practices and promotional trends</li>
              <li>Continuously improve through feedback </li>
            </ul>
          </div>
          <div className = "jobQualifications">
            <h2>Qualifications and Skills</h2>
            <ul>
              <li>Bachelor’s degree preferred</li>
              <li>2+ years’ direct or inside sales experience</li>
              <li>4+ years’ retail experience a plus</li>
              <li>Ability to translate complicated technical jargon for the average consumer</li>
              <li>Willingness to work from alternate locations when need</li>
            </ul>
          </div>
          <p>
            <b>How to apply</b>: email resume to <a href="mailto:jobs@ytadvisors.com">jobs@ytadvisors.com</a>
          </p>
        </div>
      </div>
      <Quote data={{ color: "color4" }}>
      </Quote>
      <Footer>
      </Footer>
    </div>
  }
});