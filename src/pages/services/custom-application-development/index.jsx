import React from "react";
import "./styles.less";

import Header from "../../../components/Header";
import Posts from "../../../components/Posts";
import MidBreaker from "../../../components/MidBreaker";
import Preloader from "../../../components/Preloader";
import Footer from "../../../components/Footer";
import Quote from "../../../components/Quote";
import Helmet from "react-helmet";

class CustomApplicationDevelopment extends React.Component{
  getServiceData(){
    return {
      page : "custom-application-development",
      params : this.props.location.query,
      content : `
        <p>
        We design and develop software tailored to your specific demands in a way
         that ultimately meets all your business goals, expectations, and requirements.
        </p><br/>
        <h3>
        Latest in web and mobile technologies
        </h3>
        <p>
        Our applications are built using the latest in web and mobile technologies
         solving your toughest problems and fitting seamlessly into your current processes
         and systems, to produce measurable results for your business.
        </p><br/>
        <h3>
        Personalized Solutions
        </h3>
        <p>
        We provide solutions that satisfy customers' needs more precisely than any off-the-shelf product. 
         We have ample experience providing personalized solutions in Media, Entertainment, Education and Talent sourcing.
        </p><br/>
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
  }

  render(){
    return <div>
      <Helmet
        title ="Custom application development"
        meta={[
        { name: 'description', content: 'We design and develop software tailored to your specific demands' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { property: 'og:image', content: 'https://cdn.ytadvisors.com/images/services/integration.png' },
        { property: 'og:title', content: "Custom application development" },
        { property: 'og:description', content: "We design and develop software tailored to your specific demands" },
        { property: 'og:image:width', content: "700" },
        { property: 'og:image:height', content: "397" },
        { property: 'og:site_name', content: "ytadvisors" },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:url', content: `${process.env.SITE_URL}/services/custom-application-development/` },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:type', content: "article" },
        { name: 'author', content: "Yomi Toba" },
        { name: 'twitter:title', content: "Custom application development" },
        { name: 'twitter:description', content: "We design and develop software tailored to your specific demands" },
        { name: 'twitter:site', content: '@ytadvisors' },
        { name: 'twitter:image', content: 'https://cdn.ytadvisors.com/images/services/integration.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@ytadvisors' }
        ]}
      />
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "services"}}>
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
}

export default CustomApplicationDevelopment