import "./styles.less";
import React from "react";

class MidBreaker extends React.Component{
  constructor(props){
    super(props);
  }
  
  getProps(){
    return this.props.data;
  }

  getIconClass(color){
    if(color)
      return "iconWrapper iconBig color4 col-centered";
    return "iconWrapper iconBig col-centered";
  }

  render(){
    let data = this.getProps();
    let text = () => {};
    let icon = <div className="row emptyRow"></div>;

    if(data.text) {
      if(data.header === true){
        text = <div className="row">
          <div className="topHeader col-md-12" dangerouslySetInnerHTML={{__html: data.text}}>
          </div>
        </div>;
      }
      else {
        text = <div className="row">
          <blockquote className="bigTitle col-md-12" dangerouslySetInnerHTML={{__html: data.text}}>
          </blockquote>
        </div>;
      }
    }

    if(data.icon){
      icon = <div className="row">
        <div className={this.getIconClass(data.color)}>
          <i className={data.icon}>
          </i>
        </div>
      </div>;
    }

    return <div id={data.id} data-stellar-background-ratio="0.5">
      <div className="paralaxText container">
        {icon}
        {text}
      </div>
    </div>;
  }
}

export default MidBreaker;

