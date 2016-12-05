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
            <section className="blogPost clearfix" dangerouslySetInnerHTML={{__html: this.props.data.content}} >
            </section>
          </article>
        </div>
        <div className="col-md-4">
          <section>
            <p>Our services focus on our clients' critical issues and opportunities across all industries and geographies.</p>
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