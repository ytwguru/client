import "./styles.less";
import React from "react";
import Formsy from 'formsy-react';
import {TextInput, TextArea} from "./../Form";
import {Alert} from "./../Modal";

class ContactUs extends React.Component{

  constructor(props){
    super(props);
    this.state = { canSubmit : false };
    this.submit = this.submit.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  enableButton() {
    this.setState({ canSubmit : true });
  }

  disableButton(){
    this.setState({ canSubmit : false });
  }

  submit(model, reset){
    let apiUrl = process.env.API_URL;
    $.post(`${apiUrl}/contacts`, model)
      .done( data => {
        reset();
        $("#contactfrm").find("input[type=text], textarea").val("");
        $("#contactUsModal").modal("show");
      });
  }

  render() {
    let alertData = {
      header : "Message Sent",
      message : "<p>We just received your message </p><p>A member of our team will get in touch with you soon.</p>"
    };
    return <section className="slice color1" id="contactSlice">
      <div className="container">
        <div className="row mb40">
          <div className="col-md-12">
            <h1>Contact us</h1>
          </div>
          <div id="contactSlide">
            <div className="col-md-3">
              <div href="" title="" id="mapTriggerLoader">
                <div className="iconWrapper iconBig">
                  <i className="icon-location">
                  </i>
                </div>
              </div>
              <p>For more information please submit an inquiry in the contact us form or send an email to <a href = "mailto:support@ytadvisors.com"> support@ytadvisors.com</a>.</p>
            </div>
            <div className="col-md-6">
              <Formsy.Form id="contactfrm" ref="contactfrm" className="form"
                           onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                <TextInput name="name" id="name" placeholder="Name" required
                           validations="maxLength:150" />
                <TextInput id="email" placeholder="Email" name="email"
                           validations="isEmail" validationError="This is not a valid email" required
                />
                <TextInput name="phone" id="phone" placeholder="Phone" required
                           validations="maxLength:20" />

                <TextArea name="comment" id="comments" placeholder="Enter your message..." cols="3" rows="5" >
                </TextArea>
                <button name="submit" type="submit" className="btn" id="submit" disabled={!this.state.canSubmit}> Submit</button>
              </Formsy.Form>

            </div>
            <div className="col-md-3">
              <address>
                <strong>Address:</strong><br/>
                YT Advisors<br/>
                7733 Forsyth Blvd. Suite 1100<br/>
                Clayton, MO. 63105 USA <br/>
                <br/>
                <strong>Phone:</strong><br/>
                314.669.1750<br/><br/>
                <strong>Fax:</strong><br/>
                314.652.2092<br/>
              </address>
            </div>
          </div>
        </div>
      </div>
      <Alert id="contactUsModal" data={alertData} />
    </section>;
  }
}

export default ContactUs;