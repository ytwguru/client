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
        <MidBreaker data={{id : "paralaxSlice19", text: "Software Developer", header : true   }}>
        </MidBreaker>
        <div className = "jobHeader container">
          <div className = "jobSummary">
            <h2>Job Summary</h2>
            <p>
              Full-stack advanced javascript developer to join a fast paced, fast growing startup based in Saint Louis
            </p>
          </div>
          <div className = "jobResponsibilities">
            <h2>Responsibilities and Duties</h2>
            <ul>
              <li>Write well designed, testable, efficient code</li>
              <li>Create site layout/user interface by using standard HTML/CSS practices</li>
              <li>Integrate data from various back-end services and databases</li>
              <li>Gather and refine specifications and requirements based on technical needs</li>
              <li>Create and maintain software documentation</li>
              <li>Stay plugged into emerging technologies/industry trends and apply them into operations and activities</li>
              <li>Cooperate with web designers to match visual design intent</li>
            </ul>
          </div>
          <div className = "jobQualifications">
            <h2>Qualifications and Skills</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6)</li>
              <li>Node.js</li>
              <li>ReactJS / AngularJS</li>
            </ul>
            <h2>Bonuses (these things are a plus)</h2>
            <ul>
              <li>You've published NPM modules</li>
              <li>You contribute to open source software (like on Github)</li>
              <li>Have given presentations on technologies</li>
              <li>You're familiar with the Agile Scrum process</li>
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