import React from "react";
import "./styles.less";

import Header from "../../../components/Header";
import Member from "../../../components/Member";
import MidBreaker from "../../../components/MidBreaker";
import Preloader from "../../../components/Preloader";
import Footer from "../../../components/Footer";
import Quote from "../../../components/Quote";
import Helmet from "react-helmet";


class Yomi extends React.Component{
  constructor(props){
    super(props);
  }

  getMemberData(){
    return {
      name : "Yomi Toba",
      title : "Co-Founder / CEO",
      params : this.props.location.query,
      profilePicture : "https://cdn.ytadvisors.com/images/team/yomi.gif",
      links : [
        { facebook : "https://www.facebook.com/yomi.toba.39"},
        { twitter : "https://www.twitter.com/ytwguru" },
        { google : "https://plus.google.com/109638795509632465576" },
        { linkedin : "https://www.linkedin.com/in/yomi-toba-569884a" }
      ],
      address : `YT Advisors<br/>
                7733 Forsyth Blvd. Suite 1100<br/>
                Clayton, MO. 63105 USA <br/>`,
      phone : "314.669.1750",
      fax : "314.652.2092",
      bio : `<div>
            <p>Yomi Toba is the CEO and Co-founder of YT Advisors a Saint Louis based consulting and software development company.</p>
             <p>Mr. Toba is responsible for managing the company, formulating and executing long-term strategies and interacting with clients, employees and other stakeholders.  With over a decade of industry experience, Yomi has a deep expertise running software operations, creating partnerships with third party vendors and delivering on technical goals.</p>
             <p>Yomi began his leadership experience in software as the co-founder and CTO of Lockerdome &#8212; a social media advertising platform.  After founding the company, and building it's initial software development team, the company went on to raise over 18M dollars in venture capital, establishing partnerships with leading media companies nationwide.  </p>
             <p>Yomi acted as CTO and co-founder to a second venture funded company &#8212; Pushup Social an online social community and  social media aggregator.  The company subsequently raised 1M dollars in seed money, hired a small team of software developers and engineers and were early disrupters providing social media widgets to small to medium sided companies.</p>
             <p>Yomi is a passionate mentor and sits on the Advisor board of multiple Saint Louis startup companies, providing valuable insight on preventable pitfalls to avoid as a young company.  He has lectured on business and technical topics at Washington University in Saint Louis, Square One at CET, and Saint Louis University.</p></div>`
    };
  }

  render() {
    return <div>
      <Helmet
        title ="YT Advisors Co-founder / CEO Yomi Toba"
        meta={[
        { name: 'description', content: 'Mr. Toba is responsible for managing the company' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { property: 'og:image', content: 'https://cdn.ytadvisors.com/images/team/yomi.gif' },
        { property: 'og:title', content: "YT Advisors Co-founder / CEO Yomi Toba" },
        { property: 'og:description', content: "Mr. Toba is responsible for managing the company" },
        { property: 'og:image:width', content: "227" },
        { property: 'og:image:height', content: "311" },
        { property: 'og:site_name', content: "ytadvisors" },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:url', content: `${process.env.SITE_URL}/team/yomi/` },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:type', content: "article" },
        { name: 'author', content: "Yomi Toba" },
        { name: 'twitter:title', content: "YT Advisors Co-founder / CEO Yomi Toba" },
        { name: 'twitter:description', content: "Mr. Toba is responsible for managing the company" },
        { name: 'twitter:site', content: '@ytadvisors' },
        { name: 'twitter:image', content: 'https://cdn.ytadvisors.com/images/team/yomi.gif' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@ytadvisors' }
        ]}
      />
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "team"}}>
        </Header>
        <Member data={this.getMemberData()}>
        </Member>
      </div> 
      <Quote data={{ color: "color4" }}>
      </Quote>
      <Footer>
      </Footer>
    </div>
  }
}

export default Yomi;