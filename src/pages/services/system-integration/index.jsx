import React from "react";
import "./styles.less";

import Header from "../../../components/Header";
import Posts from "../../../components/Posts";
import MidBreaker from "../../../components/MidBreaker";
import Preloader from "../../../components/Preloader";
import Footer from "../../../components/Footer";
import Quote from "../../../components/Quote";
import Helmet from "react-helmet";

class SystemIntegration extends React.Component {
  constructor(props){
    super(props)
  }

  getServiceData(){
    return {
      mainImage : "https://cdn.ytadvisors.com/images/services/integration.png",
      page : "system-integration",
      params : this.props.location.query,
      content: `
      <p>We create software integration solutions allowing companies to integrate with third party platforms.</p>
      <h3>Manage the complexity</h3>
      <p>We create solutions that allow clients to integrate with complex systems within their organization walls and with
       external partners, suppliers, and clients.  Our system integration specialist will help you manage the complexity
        inherent with technology changes, from requirements planning to architecture, testing, deployment and beyond. 
        </p>
      <h3>Services to help with integration</h3>
      <p>We offer a complete range of industry leading services to help with integration. 
       These include systems development solutions, platform integration, program management,
        and function and testing services.  </p>
      `
    };
  }

  render(){
    return <div>
      <Helmet
        title ="System integration services"
        meta={[
        { name: 'description', content: 'We create software integration solutions allowing companies to integrate' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { property: 'og:image', content: 'https://cdn.ytadvisors.com/images/services/integration.png' },
        { property: 'og:title', content: "System integration services" },
        { property: 'og:description', content: "We create software integration solutions allowing companies to integrate" },
        { property: 'og:image:width', content: "500" },
        { property: 'og:image:height', content: "435" },
        { property: 'og:site_name', content: "ytadvisors" },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:url', content: `${process.env.SITE_URL}/services/system-integration/` },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:type', content: "article" },
        { name: 'author', content: "Yomi Toba" },
        { name: 'twitter:title', content: "System integration services" },
        { name: 'twitter:description', content: "We create software integration solutions allowing companies to integrate" },
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
        <MidBreaker data={{id : "paralaxSlice9", text: "System Integration", header: true }}>
        </MidBreaker>
        <Posts  data={this.getServiceData()}>
        </Posts>
      </div>
      <Quote data={{ color: "color4" }}>
      </Quote>
      <Footer>
      </Footer>
    </div>
  }
}

export default SystemIntegration