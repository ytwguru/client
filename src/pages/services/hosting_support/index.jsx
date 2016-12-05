import React from "react";
import "./styles.less";

import Header from "../../../components/Header";
import Posts from "../../../components/Posts";
import MidBreaker from "../../../components/MidBreaker";
import Preloader from "../../../components/Preloader";
import Footer from "../../../components/Footer";
import Quote from "../../../components/Quote";

export default React.createClass({
  getServiceData : function(){
    return {
      mainImage : "http://cdn.ytadvisors.com/images/services/hosting.png",
      page : "hosting_support",
      content: `
      <p>
      We setup production environments, oversee server security, perform daily backups and monitor performance.
      </p>
      <h3>Hosting</h3>
      <p>
      Our team have expertise in working with a variety of Cloud platforms (Amazon Web Services, Azure, Rackspace, and more),
       migrating local infrastructure to the Cloud, Cloud infrastructure design, etc.  We perform security audits, maintain
        and manage servers, setup backup storage, update OS and software dependencies, and monitor performance and resource availability. 
      </p>
      <h3>Deployment</h3>
      <p>
      For launching stable production applications, we setup pre-release / staging environments, implement continuous
       integration, monitor production servers, and automate scalability.
      </p>
      <h3>Support services</h3>
      <p>
      We offer 1st, 2nd, and 3rd level support services for application developed by YT Advisors or any third party vendor. 
       Our team will help you with troubles of any complexity level - from providing workarounds and hot fixes to security
        audits and application enhancements. 
      </p>
      <p>
        <b>L1 support</b>: user guidance, standard issue fixes, monitor system, data analysis, etc. <br />
        <b>L2 support</b>: server administration, IT environment support (issue detection and fixing).  Monitoring systems setup<br />
        <b>L3 support</b>: Source code issue resolution, application code optimization, new functionality etc.
      </p>
      `
    };
  },
  render : function(){
    return <div>
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "services"}}>
        </Header>
        <MidBreaker data={{id : "paralaxSlice9", text: "Hosting & Support", header: true }}>
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
