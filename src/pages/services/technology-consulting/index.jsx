import React from "react";
import "./styles.less";

import Header from "../../../components/Header";
import Posts from "../../../components/Posts";
import MidBreaker from "../../../components/MidBreaker";
import Preloader from "../../../components/Preloader";
import Footer from "../../../components/Footer";
import Quote from "../../../components/Quote";
import Helmet from "react-helmet";

class TechnologyConsulting extends React.Component{

  constructor(props){
    super(props);
  }

  getServiceData(){
    return {
      page : "technology-consulting",
      params : this.props.location.query,
      content : `
      <p>We help teams understand trends, and security risks, and create road maps to reach development goals.</p>
      <h3>Practical and enduring results</h3>
      <p>We serve clients at every level of their organization, in whatever capacity we can be most useful,
        whether as a trusted advisor to top management or as a coach for front line employees. 
        Our focus is always to deliver practical and enduring results that equip our clients with the tools to grow and lead.
      </p>
      <h3>Specialists work directly with our clients</h3>
      <p>Partnerships with clients lead to recommendations they can put immediately into practice. 
        Our implementation specialist work directly with our clients to help develop workforce skills,
        improve operational experience, and apply new working methods.
      </p>
      <h3>Internal and external security infrastructure</h3>
      <p>We offer a complete line of audit services covering a range of both system analysis and review.  Our system review highlights
       the strengths and weaknesses of a company's internal and external security infrastructure.  While our detailed analysis allow
        us to document physical security, network security and computer systems security.
      </p>
      `
    };
  }

  render(){
    return <div>
      <Helmet
        title ="Technology consulting services"
        meta={[
        { name: 'description', content: 'We help teams understand trends, and security risks, and create road maps' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { property: 'og:image', content: 'https://cdn.ytadvisors.com/images/services/security.png' },
        { property: 'og:title', content: "Technology consulting services" },
        { property: 'og:description', content: "We help teams understand trends, and security risks, and create road maps" },
        { property: 'og:image:width', content: "500" },
        { property: 'og:image:height', content: "247" },
        { property: 'og:site_name', content: "ytadvisors" },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:url', content: `${process.env.SITE_URL}/services/technology-consulting/` },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:type', content: "article" },
        { name: 'author', content: "Yomi Toba" },
        { name: 'twitter:title', content: "Technology consulting services" },
        { name: 'twitter:description', content: "We help teams understand trends, and security risks, and create road maps" },
        { name: 'twitter:site', content: '@ytadvisors' },
        { name: 'twitter:image', content: 'https://cdn.ytadvisors.com/images/services/security.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@ytadvisors' }
        ]}
      />
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "services"}}>
        </Header>
        <MidBreaker data={{id : "paralaxSlice19", text: "Technology Consulting", header: true }}>
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

export default TechnologyConsulting
