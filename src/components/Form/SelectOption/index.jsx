import "./styles.less";
import React from "react";
import Formsy from "formsy-react";

export default React.createClass({

  mixins : [Formsy.Mixin],


  changeValue : function(event){
    this.setValue(event.currentTarget.value);
  },

  render : function(){

    const className = this.showRequired() ? "required" : this.showError() ? "error" : null;
    var errorMessage = this.getErrorMessage();
    if(!errorMessage)
      errorMessage = "&nbsp;";

    return (
      <div className={className}>
        <select onChange={this.changeValue} name={this.props.name} value={this.getValue()}>
          {this.props.children}
        </select>
        <span dangerouslySetInnerHTML={{__html: errorMessage}}>
        </span>
      </div>
    );

  }
});