import "./styles.less";
import React from "react";
import Formsy from 'formsy-react';
import {TextInput, TextArea} from "./../Form";
import {Alert} from "./../Modal";

class Member extends React.Component{

  constructor(props){
    super(props);
    this.state = { canSubmit : false };
    this.submit = this.submit.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  componentWillUnmount(){
    if($("#profilepic").length > 0){
      $("#profilepic").remove();
    }
  }

  enableButton() {
    this.setState({ canSubmit : true });
  }

  disableButton(){
    this.setState({ canSubmit : false });
  }

  submit(model, reset){
    let api_url = process.env.API_URL;
    $.post(`${api_url}/members`, model)
      .done( data => {
        reset();
        $("#memberfrm").find("input[type=text], textarea").val("");
        $("#memberUsModal").modal("show");
      });
  }

  render() {
    let alertData = {
      header : "Message Sent",
      message : "<p>We just received your message </p><p>A member of our team will get in touch with you soon.</p>"
    };
    return <section className="slice color1" id="memberSlice">
      <div className="container">
        <div className="row mb40">
          <div className="col-md-12">
            <h1>{this.props.data.name}</h1>
          </div>
          <div id="memberSlide">
            <div className="col-md-3">
              <div href="" title="" id="mapTriggerLoader">
                <img className="img-responsive" id = "teamProfilepic" src ={this.props.data.profilePicture} data-src={this.props.data.profilePicture}  alt={this.props.data.name}/>
              </div>
              <p>
                <h3 className = "text-center">{this.props.data.title}</h3>
              </p>
            </div>
            <div className="col-md-6" dangerouslySetInnerHTML={{__html: this.props.data.bio}} >
            </div>
            <div className="col-md-3">
              <address>
                <strong>Address:</strong>
                <p dangerouslySetInnerHTML={{__html: this.props.data.address}} >
                </p>
                <strong>Phone:</strong>
                <p dangerouslySetInnerHTML={{__html: this.props.data.phone}} >
                </p>
                <strong>Fax:</strong>
                <p dangerouslySetInnerHTML={{__html: this.props.data.fax}} >
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
      <Alert id="memberUsModal" data={alertData} />
    </section>;
  }
}

export default Member;