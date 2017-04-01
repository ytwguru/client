import React from "react";
import "./styles.less";

import Header from "../../../components/Header";
import Posts from "../../../components/Posts";
import MidBreaker from "../../../components/MidBreaker";
import Preloader from "../../../components/Preloader";
import Footer from "../../../components/Footer";
import Quote from "../../../components/Quote";
import Helmet from "react-helmet";

class HostingSupport extends React.Component{
  constructor(props){
    super(props);
  }

  getServiceData(){
    return {
      page : "hosting-support",
      params : this.props.location.query,
      content: `
      <p>
      We setup production environments, oversee server security, perform daily backups and monitor performance.
      </p><br/>
      <h3>Hosting</h3>
      <p>
      Our team have expertise in working with a variety of Cloud platforms (Amazon Web Services, Azure, Rackspace, and more),
       migrating local infrastructure to the Cloud, Cloud infrastructure design, etc.  We perform security audits, maintain
        and manage servers, setup backup storage, update OS and software dependencies, and monitor performance and resource availability. 
      </p><br/>
      <h3>Deployment</h3>
      <p>
      For launching stable production applications, we setup pre-release / staging environments, implement continuous
       integration, monitor production servers, and automate scalability.
      </p><br/>
      <h3>Support services</h3>
      <p>
      We offer 1st, 2nd, and 3rd level support services for application developed by YT Advisors or any third party vendor. 
       Our team will help you with troubles of any complexity level - from providing workarounds and hot fixes to security
        audits and application enhancements. 
      </p><br/>
      <p>
        <b>L1 support</b>: user guidance, standard issue fixes, monitor system, data analysis, etc. <br />
        <b>L2 support</b>: server administration, IT environment support (issue detection and fixing).  Monitoring systems setup<br />
        <b>L3 support</b>: Source code issue resolution, application code optimization, new functionality etc.
      </p>
      `
    };
  }
  render(){
    return <div>
      <Helmet
        title ="Hosting and support"
        meta={[
        { name: 'description', content: 'We setup production environments, oversee server security, perform daily backups' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { property: 'og:image', content: 'https://cdn.ytadvisors.com/images/services/hosting.png' },
        { property: 'og:title', content: "Hosting and support" },
        { property: 'og:description', content: "We design and develop web, mobile and desktop applications" },
        { property: 'og:image:width', content: "730" },
        { property: 'og:image:height', content: "490" },
        { property: 'og:site_name', content: "ytadvisors" },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:url', content: `${process.env.SITE_URL}/services/hosting-support/` },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:type', content: "article" },
        { name: 'author', content: "Yomi Toba" },
        { name: 'twitter:title', content: "Hosting and support" },
        { name: 'twitter:description', content: "We setup production environments, oversee server security, perform daily backups" },
        { name: 'twitter:site', content: '@ytadvisors' },
        { name: 'twitter:image', content: 'https://cdn.ytadvisors.com/images/services/hosting.png' },
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

export default HostingSupport;