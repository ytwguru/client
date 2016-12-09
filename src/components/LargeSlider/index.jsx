import "./styles.less";
import React from 'react';
let Flickity = "";

export default React.createClass({
  componentDidMount : function (){
    if (!Flickity){
      Flickity  = require("flickity");
    }

    var flky = new Flickity( '#home', {
      autoPlay : 5000,
      wrapAround : true,
      imagesLoaded: true,
      lazyLoad: 3,
      contain: true,
      adaptiveHeight : true,
      cellAlign: 'center'
    });
    
  },
  render : function(){
    return <div id="home">
      <div className="carousel" >
        <div className="carousel-cell">
          <section className = "imgWrapper">
            <img data-src= "http://cdn.ytadvisors.com/images/slider/super/placeholder.jpg"
              data-flickity-lazyload="http://cdn.ytadvisors.com/images/slider/super/supersized-1.jpg" className="img-responsive" id = "main-image" alt="Women in business"/>
            <div className = "content">
              <h2>Professional software development</h2>
              <h3>We build custom web, mobile, and cross-platform solutions that keep you one step ahead of the competition.</h3>
              <p>
                <a href = "/services/product-development/" className = "btn pull-right">Read More</a>
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-cell">
          <section className = "imgWrapper">
            <img data-src= "http://cdn.ytadvisors.com/images/slider/super/placeholder.jpg" alt="Black family"
                 data-flickity-lazyload="http://cdn.ytadvisors.com/images/slider/super/supersized-2.jpg" className="img-responsive" />
            <div className = "content">
              <h2>Custom software solutions</h2>
              <h3>Whether you are a start-up or an established business, we create solutions to engage your customers.</h3>
              <p>
                <a href = "/services/custom-application-development/" className = "btn pull-right">Read More</a>
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-cell">
          <section className = "imgWrapper">
            <img data-src= "http://cdn.ytadvisors.com/images/slider/super/placeholder.jpg"
                 data-flickity-lazyload="http://cdn.ytadvisors.com/images/slider/super/supersized-3.jpg" className="img-responsive" alt="Cyber security"/>
            <div className = "content">
              <h2>Information Security</h2>
              <h3>Address data security challenges in software, systems, and organizational processes.</h3>
              <p>
                <a href = "/services/technology-consulting#security" className = "btn pull-right">Read More</a>
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-cell">
          <section className = "imgWrapper">
            <img data-src= "http://cdn.ytadvisors.com/images/slider/super/placeholder.jpg" alt="Project managers"
                 data-flickity-lazyload="http://cdn.ytadvisors.com/images/slider/super/supersized-4.jpg" className="img-responsive" />
            <div className = "content">
              <h2>Product management</h2>
              <h3>Our experienced consultants will tailor solutions that deliver results.</h3>
              <p>
                <a href = "/services/technology-consulting#product_management" className = "btn pull-right">Read More</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>;
  }
});