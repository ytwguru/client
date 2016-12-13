import "./styles.less"
import React from "react";
import CheckoutButton from "./../CheckoutButton"

class Offer extends React.Component{

  constructor(props) {
    super(props);
  }

  render(){

    let className = `col-md-${Math.floor(12/this.props.data.plan.length)}`;
    let discount = () => {};
    let coupon = () => {};
    let discountPercent = 0;
    let couponCode = "";
    if(this.props.data.params.coupon){
      let couponDetails = this.props.data.params.coupon.split(" ");
      if(couponDetails.length > 1){
        [couponCode, discountPercent] = [ ...couponDetails ];
        discount = <h4>{`Valid coupon is for a ${discountPercent}% discount`}</h4>;
        coupon = <div className = "couponContainer">
          <h3>
            Coupon : <span>{couponDetails[0]}</span>
          </h3>
          {discount}
        </div>;
      }
    }

    return <section className="slice color1" id="offer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{this.props.data.title}</h1>
          </div>
        </div>
        {coupon}
        <div className="row mb30">
          {
            (((sections) => sections.map((section) =>{
                let price = (section.price) ? `$${section.price}`: "";
                let plan = section;
                plan.title = this.props.data.title;
                plan.product = this.props.data.product;
                plan.discountPercent = discountPercent;
                plan.couponCode =  couponCode;

                return <div className={className}>
                    <div className={section.selected ? "pricingBloc focusPlan" : "pricingBloc"} >
                    <h2>{section.type}</h2>

                    <h3>{price}<span>{section.duration}</span></h3>
                    <ul>
                      {
                        (((featureList) => featureList.map((feature) => <li>{feature}</li>))(section.featureList))
                      }
                    </ul>
                    <CheckoutButton data={plan}/>
                  </div>
                </div>;
              })
            )(this.props.data.plan))
          }
        </div>
      </div>
    </section>;
  }
}

export default Offer;