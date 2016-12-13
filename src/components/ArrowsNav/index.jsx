import "./styles.less"
import React from "react";

class ArrowsNav extends React.Component{

  getNav(){
    return this.props.data;
  }
  render(){
    var nav = this.getNav();
    return <nav className="arrowsNav">
      {((nav) => {
        if(nav.length > 1){
          return <div>
            <a href={nav[1].link} className={"navDown " + nav[1].color}>
              <i className="icon-down-open">
              </i>
            </a>
            <a href={nav[0].link} className={"navUp " + nav[0].color}>
              <i className="icon-up-open">
              </i>
            </a>
          </div>;
        } else {
          return <div>
            <a href={nav[0].link} className={"navUp navCentered " + nav[0].color}>
              <i className="icon-up-open">
              </i>
            </a>
          </div>;
        }
      })(nav)}

    </nav>;

  }
}

export default ArrowsNav;