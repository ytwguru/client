import "./styles.less";
import React from "react";

class Posts extends React.Component{

  constructor(props){
    super(props);
  }

  getLinkClass(page){
    return this.props.data.page == page ? "active" : "";
  }
  
  render(){
    let title = this.props.data.title ? <h3>{this.props.data.title}</h3> : () => {};
    let month = this.props.data.month ? <span>{this.props.data.month}</span> : null;
    let day = this.props.data.day ? <h4>{this.props.data.day}</h4> : null;
    let date = month && day ? <div className="newsDate">{day}{month}</div> : () => {};
    let img = this.props.data.mainImage ?
      <div className="imgWrapper">
        <img src={this.props.data.mainImage} alt="Main post image" />
      </div> :
      () => {};
    return <section className="slice color1" id="postSlice">
      <div className="container">
        <div className="col-md-8">
          <article>
            <header>
              {title}
              <div className="postPic">
                {img}
                {date}
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
              <li> <a href="/services/custom-application-development/" className={this.getLinkClass("custom-application-development")}>Custom Application Development</a></li>
              <li> <a href="/services/hosting-support/" className={this.getLinkClass("hosting-support")}>Hosting & Support</a></li>
              <li> <a href="/services/product-development/" className={this.getLinkClass("product-development")}>Product Development</a></li>
              <li> <a href="/services/system-integration/" className={this.getLinkClass("system-integration")}>System Integration</a></li>
              <li> <a href="/services/technology-consulting/" className={this.getLinkClass("technology-consulting")}>Technology Consulting</a></li>
              <li> <a href="/services/website-startup/" className={this.getLinkClass("website-startup")}>Website Design</a></li>
            </ul>
          </section>
        </div>
      </div>
    </section>;
  }
}

export default Posts;