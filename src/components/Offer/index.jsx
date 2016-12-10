import "./styles.less"
import React from "react";

export default React.createClass({
  componentDidMount: function () {
  },
  render : function(){
    let className = `col-md-${Math.floor(12/this.props.data.plan.length)}`;
    return <section className="slice color1" id="offer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Website Pricing</h1>
          </div>
        </div>
        <div className="row mb30">
          {
            (((sections) => sections.map((section) =>{
                return <div className={className}>
                    <div className={section.selected ? "pricingBloc focusPlan" : "pricingBloc"} >
                    <h2>{section.type}</h2>
                    <h3>{section.price}<span>{section.duration}</span></h3>
                    <ul>
                      {
                        (((featureList) => featureList.map((feature) => <li>{feature}</li>))(section.featureList))
                      }
                    </ul>
                    <p className="sign">
                      <a className="btn" href="#">
                        Sign up
                      </a>
                    </p>
                  </div>
                </div>;
              })
            )(this.props.data.plan))
          }
        </div>
      </div>
    </section>;
  }
});