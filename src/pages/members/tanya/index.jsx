import React from "react";
import "./styles.less";

import Header from "../../../components/Header";
import Member from "../../../components/Member";
import MidBreaker from "../../../components/MidBreaker";
import Preloader from "../../../components/Preloader";


export default React.createClass({
  getMemberData : function(){
    return {
      name : "Tanya Toba",
      title : "Co-Founder / COO",
      profilePicture : "http://cdn.ytadvisors.com/images/team/tanya.png",
      links : [
        { facebook : "http://www.facebook.com/tanya.hamilton.9"},
        { linkedin : "http://www.linkedin.com/in/tanyajhamilton" }
      ]
    };
  },
  render : function() {
    return <div>
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "members"}}>
        </Header>
        <MidBreaker data={{id : "paralaxSlice9"   }}>
        </MidBreaker>
        <Member data={this.getMemberData()}>
        </Member>
      </div>
    </div>
  }
});