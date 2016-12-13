import "./style.less";
import React from "react";

/**
 * @class CheckoutButton
 * @property {object} handler
 * @property {boolean} submit
 */
class CheckoutButton extends React.Component{
  constructor(props){
    super(props);
    this.handler = null;
    this.openCheckout = this.openCheckout.bind(this);
  }

  componentDidMount(){
    let $this = this;
    this.handler = StripeCheckout.configure({
      key: process.env.STRIPE_PUBLISH_KEY,
      image: 'https://s3.amazonaws.com/stripe-uploads/acct_19P0JiEOOTIWXoKdmerchant-icon-1481534554612-square-logo.png',
      locale: 'auto',
      zipCode : true,
      token: function(token) {
        let apiUrl = process.env.API_URL;
        let currentPrice = $this.props.data.price.replace(/,/g, "");
        token.amount = (currentPrice - ($this.props.data.discountPercent/100 * currentPrice)) * 100;

        $.ajax({
          url:`${apiUrl}/customers`,
          type:"POST",
          data: JSON.stringify(token),
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function(data){
            console.log(data);
          },
          failure : function(err){
            console.log();
          }
        });

        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    window.addEventListener('popstate', function() {
      if(this.handler)
        this.handler.close();
    });
  }

  openCheckout(e){
    if(this.props.data.price){
      let currentPrice = this.props.data.price.replace(/,/g, "");
      let amount = (currentPrice - (this.props.data.discountPercent/100 * currentPrice)) * 100;
      this.handler.open({
        name: 'YT Advisors',
        description: `${this.props.data.product} ${this.props.data.type}`,
        amount: amount
      });
    }
    e.preventDefault();
  }

  render() {
    return <form className = "checkoutButton" method="POST" action="/your-server-side-code">
      <p className="sign">
        <a className="btn" href="#" onClick={this.openCheckout}>
          Sign up
        </a>
      </p>
    </form>
  }
}

export default CheckoutButton;