import React from "react";
import "./styles.less";
import Helmet from "react-helmet";

import Header from "../../../components/Header";
import Preloader from "../../../components/Preloader";
import Footer from "../../../components/Footer";
import Quote from "../../../components/Quote";
import Offer from "../../../components/Offer";


export default React.createClass({
  getPlanDetails: function () {
    return {
      plan: [
        {
          type: "Basic",
          price: "$1,500",
          duration: "",
          featureList: [
            "1 Landing Page",
            "Lifetime of free hosting",
            "Unlimited Bandwidth",
            "500M of storage",
            "Email support"
          ]
        },
        {
          type: "Silver",
          price: "$5,000",
          duration: "",
          featureList: [
            "15 pages",
            "Lifetime of free hosting",
            "Unlimited Bandwidth",
            "2G of Storage",
            "Email support",
            "Modern site re-design"
          ]
        },
        {
          type: "Gold",
          price: "$15,000",
          duration: "",
          selected: true,
          featureList: [
            "50 pages",
            "Lifetime of free hosting",
            "Unlimited Bandwidth",
            "10G of Storage",
            "Email + Phone support",
            "Modern site re-design",
            "6 mo. SEO",
            "6 mo. Social media marketing"
          ]
        },
        {
          type: "Platinum",
          price: "",
          duration: "Request a quote",
          featureList: [
            "Unlimited pages",
            "Lifetime of free hosting",
            "Unlimited Bandwidth",
            "Unlimited Storage",
            "Email + Phone support",
            "Modern site re-design",
            "1 yr. SEO",
            "1 yr. Social media marketing",
            "User Login and Registration",
            "E-commerce"
          ]
        }
      ]
    };
  },
  render: function () {
    return <div>
      <Helmet
        title ="Website Pricing"
        meta={[
        { name: 'description', content: 'Pricing Plans for website development' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { property: 'og:title', content: "Website Pricing" },
        { property: 'og:description', content: "Pricing Plans for website development" },
        { property: 'og:site_name', content: "ytadvisors" },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:url', content: `${process.env.SITE_URL}/pricing/website/` },
        { property: 'og:locale', content: "en_US" },
        { property: 'og:type', content: "article" },
        { name: 'author', content: "Yomi Toba" },
        { name: 'twitter:title', content: "Website Pricing" },
        { name: 'twitter:description', content: "Pricing Plans for website development" },
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
        <Offer data={this.getPlanDetails()}>
        </Offer>
      </div>
      <Quote data={{ color: "color4" }}>
      </Quote>
      <Footer>
      </Footer>
    </div>
  }
});