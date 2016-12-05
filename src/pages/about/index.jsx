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
        title ="About Us"
      />
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "about"}}>
        </Header>
        <MidBreaker data={{id : "paralaxSlice9"   }}>
        </MidBreaker>
      </div>
      <Quote data={{ color: "color4" }}>
      </Quote>
      <Footer>
      </Footer>
    </div>
  }
});