import "./styles.less"
import React from "react";

class SideNav extends React.Component{

  constructor(props){
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.navState = "closed";
  }

  componentDidMount(){
  }

  toggleMenu(){
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    let openWidth = width-300 >= 100 ? 300 : 200;
    $("#menuList").css("width", `${openWidth}px`);
    if(this.navState == "closed"){
      let x = 0;
      $("#menuBar").css("left", `${openWidth}px`);
      $("#menuList").css("left", "0px");
      $("#navOverlay").css("display", "block");
      $("#menu").removeClass("icon-menu").addClass("icon-x");
      $("#menuList li a").each(function(){
        (((obj, x) => {
          setTimeout(function(){
            obj.addClass("open");
          }, 100 * x);
        }) ($(this), x));
        x++;
      });
      this.navState = "opened";
    } else {
      $("#menuBar").css("left", "0px");
      $("#menuList").css("left", `-${openWidth}px`);
      $("#navOverlay").css("display", "none");
      $("#menu").removeClass("icon-x").addClass("icon-menu");
      $("#menuList li a").each(function(){
        $(this).removeClass("open")
      });
      this.navState = "closed";
    }
  }

  render(){
    return <section id = "sideNav">
      <div id="menuBar" >
        <div className="menuContainer" onClick={this.toggleMenu}>
          <i className="icon-menu" id="menu">
          </i>
          <div className="menuText text-center">Menu</div>
        </div>
      </div>
      <ul id = "menuList">
        <li><a href ="/">Home</a></li>
        <li><a href ="/history">History</a></li>
        <li><a href ="/vision">Vision</a></li>
        <li><a href ="/design">Design</a></li>
      </ul>
      <div id="navOverlay" onClick={this.toggleMenu}>
      </div>
    </section>

  }
}

export default SideNav;