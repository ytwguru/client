import React from "react";
import "./styles.less";

import Header from "../../components/Header";
import Member from "../../components/Member";
import MidBreaker from "../../components/MidBreaker";
import Preloader from "../../components/Preloader";
import Footer from "../../components/Footer";
import Quote from "../../components/Quote";
import Helmet from "react-helmet";


class Yomi extends React.Component{
  constructor(props){
    super(props);
  }

  getMemberData(member){
    switch(member){
      case 1:
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
        break;
      case 2:
        return {
          name : "Tanya Hamilton Toba",
          params : this.props.location.query,
          title : "Co-Founder / COO",
          profilePicture : "https://cdn.ytadvisors.com/images/team/tanya.png",
          links : [
            { facebook : "https://www.facebook.com/tanya.hamilton.9"},
            { linkedin : "https://www.linkedin.com/in/tanyajhamilton" }
          ],
          address : `YT Advisors<br/>
                7733 Forsyth Blvd. Suite 1100<br/>
                Clayton, MO. 63105 USA <br/>`,
          phone : "314.669.1750",
          fax : "314.652.2092",
          bio : `<div><p>Tanya Hamilton Toba is the COO and Co-founder of YT Advisors, a St. Louis based consulting and software development company. In this role, Mrs. Toba is responsible for managing the daily operations of the company, interacting with clients, and overseeing the administration organizational duties.</p>
             <p>Tanya also currently runs Independent Youth Inc, a 501(c)3 non-profit organization that she launched in 2009. Independent Youth empowers teens through entrepreneurship using peer to peer teaching methods.   As the Founder and Executive Director  Tanya has mentored dozens of nationally recognized teen entrepreneurs through the organization, helping them grow their professional brand. The teens Mrs. Toba works with have appeared in various national media outlets, including ABC's hit show Shark Tank. Tanya loves working with students to build the next generation of young entrepreneurs. In this role, Tanya has also worked with companies such as Facebook and Google to execute programs that empower budding entrepreneurs.</p>
             <p>Over the course of her career, Tanya has worked in marketing and business development, gaining professional experience in various industries including; professional sports, healthcare, technology and Real Estate. Utilizing the knowledge and skills she obtained over the years, Mrs. Toba followed her passion of working with youth to build strong, confident, educated entrepreneurs. Mrs. Toba has a Masters of Business Administration Degree with a concentration in Entrepreneurship from The University of Portland and an Undergraduate Degree in Business Management from Johnson C. Smith University in Charlotte, NC.</p></div>`
        };
        break;
    }
  }

  render() {
    return <div>
      <Helmet
        title ="YT Advisors - Team"
        meta={[
        { name: 'description', content: 'YT Advisors team members' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { property: 'og:image', content: 'https://cdn.ytadvisors.com/images/team/yomi.gif' },
        { property: 'og:title', content: "YT Advisors - Team" },
        { property: 'og:description', content: "YT Advisors team members" },
        { property: 'og:image:width', content: "227" },
        { property: 'og:image:height', content: "311" },
        { property: 'og:site_name', content: "ytadvisors" },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:url', content: `${process.env.SITE_URL}/team/yomi/` },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:type', content: "article" },
        { name: 'author', content: "Yomi Toba" },
        { name: 'twitter:title', content: "YT Advisors - Team" },
        { name: 'twitter:description', content: "YT Advisors team members" },
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
        <Member data={this.getMemberData(1)}>
        </Member>
        <Member data={this.getMemberData(2)}>
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