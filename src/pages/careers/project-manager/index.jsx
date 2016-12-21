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
        <MidBreaker data={{id : "paralaxSlice9", text: "Project Manager", header : true   }}>
        </MidBreaker>
        <div className = "jobHeader container">
          <div className = "jobSummary">
            <h2>Job Summary</h2>
            <p>
              Oversee the planning, implementation, and tracking of a specific short-term projects
            </p>
          </div>
          <div className = "jobResponsibilities">
            <h2>Responsibilities and Duties</h2>
            <p><i>Plan the project</i></p>
            <ul>
              <li>Define the scope of the project in collaboration with senior management</li>
              <li>Create a detailed work plan which identifies and sequences the activities needed to complete the project</li>
              <li>Determine the resources (time, money, equipment, etc) required to complete the project</li>
              <li>Develop a schedule for project completion that effectively allocates the resources to the activities</li>
              <li>Review the project schedule with senior management and all other staff that will be affected by the project activities; revise the schedule as required</li>
              <li>Determine the objectives and measures upon which the project will be evaluated at its completion</li>
            </ul>
            <p><i>Staff the project</i></p>
            <ul>
              <li>Recruit, interview and select staff with appropriate skills for the project activities</li>
              <li>Ensure that all project personnel receive an appropriate orientation to the organization and the project</li>
              <li>Contract qualified consultants to work on the project as appropriate</li>
            </ul>
            <p><i>Implement the project</i></p>
            <ul>
              <li>Execute the project according to the project plan</li>
              <li>Develop forms and records to document project activities</li>
              <li>Monitor the progress of the project and make adjustments as necessary to ensure the successful completion of the project</li>
              <li>Establish a communication schedule to update stakeholders</li>
              <li>Review the quality of the work completed with the project team on a regular basis </li>
            </ul>
          </div>
          <div className = "jobQualifications">
            <h2>Qualifications and Skills</h2>
            <ul>
              <li>Bachelor’s degree preferred</li>
              <li>2+ years’ project management</li>
              <li>Ability to translate complicated technical jargon</li>
              <li>Willingness to work from alternate locations when need</li>
              <li>Word processing</li>
              <li>Database management</li>
              <li>Spreadsheets</li>
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