import "./styles.less";
import React from "react";

export default React.createClass({
  
  getLinkClass : function(page){
    return this.props.data.page == page ? "active" : "";
  },
  
  render : function(){
    return <section className="slice color1" id="postSlice">
      <div className="container">
        <div className="col-md-8">
          <article>
            <header>
              <div className="imgWrapper">
                <img src={this.props.data.mainImage} alt="" />
              </div>
            </header>
            <section className="blogPost clearfix">
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut magna velit. Quisque placerat, risus in adipiscing rhoncus,
                quam purus bibendum sapien, a bibendum odio leo sit amet metus. Sed sed dolor sit amet lacus luctus blandit ut a lorem. Fusce feugiat
                aliquam imperdiet. </p>
              <h3>Quisque vitae ipsum ac justo porta </h3>
              <p> Orem ipsum dolor sit amet Consectetur adipiscing elit. Vestibulum ut
                magna velit. Quisque placerat, risus in adipiscing rhoncus, quam purus bibendum sapien, a bibendum odio leo sit amet metus. Sed sed
                dolor sit amet lacus luctus blandit ut a lorem. Fusce feugiat aliquam imperdiet. Quisque vitae ipsum ac justo porta gravida
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut magna velit. Quisque placerat, risus in adipiscing rhoncus,
                quam purus bibendum sapien, a bibendum odio leo sit amet metus. Sed sed dolor sit amet lacus luctus blandit ut a lorem. Fusce feugiat
                aliquam imperdiet. Quisque vitae ipsum ac justo porta gravida.orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut
                magna velit. Quisque placerat, risus in adipiscing rhoncus, quam purus bibendum sapien, a bibendum odio leo sit amet metus. Sed sed
                dolor sit amet lacus luctus blandit ut a lorem. Fusce feugiat aliquam imperdiet. Quisque vitae ipsum ac justo porta gravida </p>
              <div id="shareme" data-url="" data-title="Awesome html5 css3 premium template" data-desc="Check out this great #themeforest item Altea One page HTML5, CSS3, Bootstrap website template">
              </div>
            </section>
          </article>
        </div>
        <div className="col-md-4">
          <section>
            <p>Nullam sed tortor odio. Suspendisse tincidunt dictum nisi, nec convallis odio lacinia ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          </section>
          <section className="blogUpdates">
            <ul className="serviceList">
              <li> <a href="/services/custom_application_development" className={this.getLinkClass("custom_application_development")}>Custom Application Development</a></li>
              <li> <a href="/services/hosting_support" className={this.getLinkClass("hosting_support")}>Hosting & Support</a></li>
              <li> <a href="/services/product_development" className={this.getLinkClass("product_development")}>Product Development</a></li>
              <li> <a href="/services/system_integration" className={this.getLinkClass("system_integration")}>System Integration</a></li>
              <li> <a href="/services/technology_consulting" className={this.getLinkClass("technology_consulting")}>Technology Consulting</a></li>
              <li> <a href="/services/website_startup" className={this.getLinkClass("website_startup")}>Website Design</a></li>
            </ul>
          </section>
        </div>
      </div>
    </section>;
  }
});