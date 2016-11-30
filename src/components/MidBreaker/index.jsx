import "./styles.less";
import React from "react";

export default React.createClass({
  componentDidMount : function(){
    
  },
  getProps : function(){
    return this.props.data;
  },
  getIconClass : function(color){
    if(color)
      return "iconWrapper iconBig color4 col-centered";
    return "iconWrapper iconBig col-centered";
  },
  render : function(){
    var data = this.getProps();
    return <div id={data.id} data-stellar-background-ratio="0.5">
      <div className="paralaxText container">
        {
          (((icon, color) => {
            if(icon) {
              return <div className="row">
                <div className={this.getIconClass(color)}>
                  <i className={icon}>
                  </i>
                </div>
              </div>;
            }
            else{
              return <div className="row emptyRow"></div>
            }
          })( data.icon, data.color))
        }
        {
          (((text) =>{
            if(text){
              return <div className="row">
                <blockquote className="bigTitle col-md-12" dangerouslySetInnerHTML={{__html: data.text}}>
                </blockquote>
              </div>;
            }
            else {
              return <div className="row"></div>
            }
          })(data.text))
        }
      </div>
    </div>;
  }
});

