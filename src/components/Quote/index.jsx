import "./styles.less";
import React from "react";
import Formsy from 'formsy-react';
import {TextInput, TextArea, SelectOption} from "./../Form";
import {Alert} from "./../Modal";

class Quote extends React.Component{

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
    let $form = $('#quoteFormWrapper');
    let apiUrl = process.env.API_URL;
    $.post(`${apiUrl}/quotes`, model)
      .done( data => {
        reset();
        $("#projectQuote").find("input[type=text], textarea").val("");
        $form.slideToggle('fast', function() {
          $('#quoteTrigger').text($form.is(':visible') ? "Close form" : "Get a quote");
          $("#quoteModal").modal("show");
        });
      });
  }

  componentDidMount(){
    let $form = $('#quoteFormWrapper');
    $('#quoteTrigger').click(function (e) {
      e.preventDefault();
      let $this = $(this);

      if(!$form.is(':visible')){
        $('html, body').animate({ scrollTop: $("#quoteWrapper").offset().top }, 300);
      }

      $form.slideToggle('fast', function() {
        $this.text($form.is(':visible') ? "Close form" : "I have a project");
      });
    });
  }

  render(){
    let alertData = {
      header : "Request Sent",
      message : "<p>We just received your quote request. </p><p>A member of our team will get in touch with you soon.</p>"
    };
    return <section className={`slice ${this.props.data.color}`} id="quoteWrapper">
      <div className="container">
        <div className="ctaBox clearfix">
          <div className="row-fluid">
            <div className="col-md-9">
              <blockquote>Like what you see? <small>Request a proposal now!</small></blockquote>
            </div>
            <div className="col-md-3"> <a className="btn" title="" href="#" id="quoteTrigger"> Get a quote!</a> </div>
          </div>
          <div className="row">
            <div className="col-md-12" id="quoteFormWrapper">
              <Formsy.Form ref="form"  className="form clearfix"  id="projectQuote"
                           onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                <div className="row-fluid">

                  <div className="col-md-4">
                    <h3>Ask us about your projects</h3>
                    <p>
                      We begin every relationship with an in-depth discussion about the short and long-term desires for your project.
                      Our engineers will review any hidden requirements and your existing codebase, if you have one. 
                      When we know your goals and understand existing software, we are able to better ensure the success of the project.
                    </p>
                  </div>

                  <div className="col-md-4">
                    <TextInput id="inputName" placeholder="Name" name="name" required
                          validations="maxLength:150" defaultValue = ""
                    />
                    <TextInput id="inputEmail" placeholder="Email" name="email" defaultValue = ""
                           validations="isEmail" validationError="This is not a valid email" required
                    />
                    <TextInput id="inputCompany" placeholder="Company" name="company" required
                               validations="maxLength:150" defaultValue = "" />
                  </div>

                  <div className="col-md-4">

                    <SelectOption name = "quoteType" value="web app">
                      <option disabled >Project Type</option>
                      <option value="website">Website</option>
                      <option value="web app">Web Application</option>
                      <option value="mobile app">Mobile Application</option>
                      <option value="desktop app">Desktop Application</option>
                      <option value="custom dev">Custom Development</option>
                      <option value="integration project">Integration Project</option>
                      <option value="hosting project">Hosting Project</option>
                    </SelectOption>

                    <TextArea name="comment" id="quoteComment" placeholder="message" >
                    </TextArea>

                  </div>
                </div>
                <div className="row-fluid">
                  <div className="col-md-8 col-md-offset-4">
                    <div className="quoteResult pull-left"></div>
                    <button className="btn pull-right" type="submit"
                            disabled={!this.state.canSubmit}>Send</button>
                  </div>
                </div>
              </Formsy.Form>

            </div>
          </div>
        </div>
      </div>
      <Alert id="quoteModal" data={alertData} />
    </section>;
  }
}

export default Quote;