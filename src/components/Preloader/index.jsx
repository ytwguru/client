import "./styles.less";
import React from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Preloader extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    $("#globalWrapper").css("visibility", "hidden");
    $(window).on("load", function(){
      $(document.body).trigger('load');
    });

    $(window).on("resize", function(){
      $(document.body).trigger('resizeWindow');
    });
    
    $(document.body).on("load", function () {
      $("#globalWrapper").css("visibility", "visible");
      $('#preloader').delay(450).fadeOut('slow', function(){
        let link = window.location.hash;
        $(document.body).trigger('preloader-complete');
        if(link && link != "#")
          $("html, body").animate({ scrollTop: $(link).offset().top }, 1000);
      }); // will fade out the white DIV that covers the website.
    });
  }

  render(){
    return <div className="preloader" id="preloader" >
      <div id="status" >loading</div>
    </div>;
  }
}

export default Preloader;