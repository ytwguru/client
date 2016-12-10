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
          type: "Free",
          price: "$0",
          duration: "per month",
          featureList: [
            "This is a feature",
            "Feature again"
          ]
        },
        {
          type: "Silver",
          price: "$10",
          duration: "per month",
          featureList: [
            "Though",
            "Not the best",
            "Honest Pre"
          ]
        },
        {
          type: "Gold",
          price: "$25",
          duration: "per month",
          selected: true,
          featureList: [
            "Honest Pre",
            "Save a lot",
            "Cool feature",
            "Really here now",
            "Cool",
            "Help"
          ]
        },
        {
          type: "Platinum",
          price: "$40",
          duration: "per month",
          featureList: [
            "Help",
            "Super cool",
            "Awesome",
            "Right plan for you",
            "If not now",
            "Super bowl",
            "Test kid"
          ]
        }
      ]
    };
  },
  render: function () {
    return <div>
      <Helmet
        title="About Us"
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