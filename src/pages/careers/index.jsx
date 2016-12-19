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
        <MidBreaker data={{id : "paralaxSlice16", text: "Careers", header : true   }}>
        </MidBreaker>
      </div>
      <div className = "careerHeader container">
        <h3>Join our team</h3>
        <p>
          We're looking for energetic and enthusiastic people who push themselves and inspire those around them.
           We provide opportunities for talented people who thrive in a fast-paced environment.
        </p>
      </div>
      <Quote data={{ color: "color4" }}>
      </Quote>
      <Footer>
      </Footer>
    </div>
  }
});