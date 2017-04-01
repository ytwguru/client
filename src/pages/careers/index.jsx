import React from "react";
import "./styles.less";
import Helmet from "react-helmet";

import Header from "../../components/Header";
import MidBreaker from "../../components/MidBreaker";
import Preloader from "../../components/Preloader";
import Footer from "../../components/Footer";
import Quote from "../../components/Quote";


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
        <div className = "careerHeader container">
          <h1>Join our team</h1>
          <p>
            We're looking for energetic and enthusiastic people who push themselves and inspire those around them.
            We provide opportunities for talented people who thrive in a fast-paced environment.
          </p>
          <h3>Open positions</h3>
          <p>
            <ul>
              <li><a href = "/careers/project-manager/">Project Manager</a></li>
              <li><a href = "/careers/software-developer/">Software developer</a></li>
              <li><a href = "/careers/sales-representative/">Sales Representative</a></li>
            </ul>
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