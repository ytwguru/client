import React from "react";
import "./styles.less";
import Helmet from "react-helmet";

import Header from "../../components/Header";
import Preloader from "../../components/Preloader";
import Footer from "../../components/Footer";
import Quote from "../../components/Quote";


export default React.createClass({
  render : function() {
    return <div>

      <Helmet
        title ="Pricing"
        meta={[
        { name: 'description', content: 'Pricing Plans' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { property: 'og:title', content: "Pricing" },
        { property: 'og:description', content: "Pricing Plans" },
        { property: 'og:site_name', content: "ytadvisors" },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:url', content: `${process.env.SITE_URL}/pricing/` },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:type', content: "article" },
        { name: 'author', content: "Yomi Toba" },
        { name: 'twitter:title', content: "Pricing" },
        { name: 'twitter:description', content: "Pricing Plans" },
        { name: 'twitter:site', content: '@ytadvisors' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@ytadvisors' }
        ]}
      />
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "pricing"}}>
        </Header>
      </div>
      <Quote data={{ color: "color4" }}>
      </Quote>
      <Footer>
      </Footer>
    </div>
  }
});