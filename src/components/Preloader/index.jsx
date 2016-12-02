import "./styles.less";
import React from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  componentDidMount : function(){
    $("#globalWrapper").css("visibility", "hidden");
    $(window).on("load", function(){
      $(document.body).trigger('load');
    });

    $(document.body).on("load", function () {
      $("#globalWrapper").css("visibility", "visible");
      $('#preloader').delay(450).fadeOut('slow'); // will fade out the white DIV that covers the website.
    });
  },
  render : function(){

    return <div className="preloader" id="preloader" >
      <div id="status" >loading</div>
    </div>;
  }
});