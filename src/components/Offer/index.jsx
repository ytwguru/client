import "./styles.less"
import React from "react";
import CheckoutButton from "./../CheckoutButton"
import {Alert} from "./../Modal";

class Offer extends React.Component{

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    $(document.body).on("paymentSuccess", () => {
      $("#paymentSuccessModal").modal("show");
    });

    $(document.body).on("paymentError", () => {
      console.log("Payment error");
      $("#paymentErrorModal").modal("show");
    });
  }

  render(){

    let className = `col-md-${Math.floor(12/this.props.data.plan.length)}`;
    let successData = {
      header : "Payment Success",
      message : "<p>Congratulations! Your payment was successful. </p><p>A member of our team will get in touch with you soon.</p>"
    };
    let errorData = {
      header : "Payment Error",
      message : "<p>There was an error processing your payment </p><p>Please contact customer support: (314)669-1750.</p>"
    };

    return <section className="slice color1" id="offer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{this.props.data.title}</h1>
          </div>
        </div>
        <div className="row mb30">
          {
            (((sections) => sections.map((section) =>{
                let price = (section.price) ? `$${section.price}`: "";
                let plan = section;
                let ref = this.props.data.params.ref ? this.props.data.params.ref : "";
                plan.title = this.props.data.title;
                plan.product = this.props.data.product;
                plan.ref = ref;
                let btnAction = !price ?
                  <p className="sign">
                    <a href ="#" className ="btn" onClick ={()=> $("#quoteTrigger").click() }>Sign up</a>
                  </p> :
                  <CheckoutButton data={plan}/>;

                return <div className={className}>
                    <div className={section.selected ? "pricingBloc focusPlan" : "pricingBloc"} >
                    <h2>{section.type}</h2>

                    <h3>{price}<span>{section.duration}</span></h3>
                    <ul>
                      {
                        (((featureList) => featureList.map((feature) => <li>{feature}</li>))(section.featureList))
                      }
                    </ul>
                    {btnAction}
                  </div>
                </div>;
              })
            )(this.props.data.plan))
          }
        </div>
      </div>
      <Alert id="paymentSuccessModal" data={successData} />
      <Alert id="paymentErrorModal" data={errorData} />
    </section>;
  }
}

export default Offer;