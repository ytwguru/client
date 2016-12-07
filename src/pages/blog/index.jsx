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
      mainImage : "http://cdn.ytadvisors.com/images/services/custom_development.png",
      page : "custom_application_development",
      content : `
        <p>
        We design and develop software tailored to your specific demands in a way
         that ultimately meets all your business goals, expectations, and requirements.
        </p>
        <h3>
        Latest in web and mobile technologies
        </h3>
        <p>
        Our applications are built using the latest in web and mobile technologies
         solving your toughest problems and fitting seamlessly into your current processes
         and systems, to produce measurable results for your business.
        </p>
        <h3>
        Personalized Solutions
        </h3>
        <p>
        We provide solutions that satisfy customers' needs more precisely than any off-the-shelf product. 
         We have ample experience providing personalized solutions in Media, Entertainment, Education and Talent sourcing.
        </p>
        <h3>
        Technologies
        </h3>
        <p>
        <b>Backend</b>: .NET, Java, PHP, Node.js </br>
        <b>Mobile</b>: iOS, Andriod, Windows Phone </br>
        <b>Frontend</b>: HTML5, CSS3, ReactJS, AngularJS </br>
        <b>Databases</b>: Miscrosoft SQL Server, MySQL, Oracle, PostgreSQL, MongoDB </br>
        </p>
      `
    };
  },
  render : function(){
    return <div>
      <Helmet
        title ="Custom application development"
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
        <MidBreaker data={{id : "paralaxSlice9", text: "Custom Application Development", header: true }}>
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
