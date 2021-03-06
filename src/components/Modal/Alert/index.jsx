import "./styles.less";
import React from "react";

class Alert extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id={this.props.id} className="alert modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header color4">
              <h3 className="modal-title">{this.props.data.header}</h3>
            </div>
            <div className="modal-body"  dangerouslySetInnerHTML={{__html: this.props.data.message}}>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Alert;