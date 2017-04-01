import "./styles.less";
import React from "react";

class Services extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    var $boxIcon = $('.serviceContainer');
    if($boxIcon.length > 0){

      $boxIcon.hover(function(){
        let $this = $(this);
        $this.find(".iconWrapper").addClass("color3");
        $this.addClass("color0");
      }, function(){
        let $this = $(this);
        $this.find(".iconWrapper").removeClass("color3");
        $this.removeClass("color0");
      });
    }

    console.log($boxIcon.length);
  }
  render(){
    return <div id="services" >
        <section className="slice no-bottom-padding color1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Our services</h1>
              </div>
              <div className="col-md-3">
                <a className = "serviceContainer" href ="/services/product-development/">
                  <article className="boxIcon">
                    <div className="iconWrapper iconBig"> <i className="icon-mobile-1"></i></div>
                    <section className="boxContent">
                      <h2>Product Development</h2>
                      <p>We design and develop web, mobile and desktop applications.</p>
                    </section>
                  </article>
                </a>
              </div>
              <div className="col-md-3">
                <a className = "serviceContainer" href ="/services/technology-consulting/">
                  <article className="boxIcon">
                    <div className="iconWrapper iconBig"> <i className="icon-light-bulb"></i></div>
                    <section className="boxContent">
                      <h2>Technology Consulting</h2>
                      <p>We help teams understand new trends, and security risks.</p>
                    </section>
                  </article>
                </a>
              </div>
              <div className="col-md-3">
                <a className = "serviceContainer" href ="/services/system-integration/">
                  <article className="boxIcon">
                    <div className="iconWrapper iconBig"> <i className="icon-star-empty"></i></div>
                    <section className="boxContent">
                      <h2>System Integration</h2>
                      <p>We create solutions to integrate with third party platforms.</p>
                    </section>
                  </article>
                </a>
              </div>
              <div className="col-md-3">
                <a className = "serviceContainer" href ="/services/hosting-support/">
                  <article className="boxIcon">
                    <div className="iconWrapper iconBig"> <i className="icon-server"></i></div>
                    <section className="boxContent">
                      <h2>Hosting & Support</h2>
                      <p>We host production environments and oversee server security.</p>
                    </section>
                  </article>
                </a>
              </div>
            </div>
          </div>
      </section>
      <section className="slice">
        <div className="container">
          <div className="row">
            <div className="col-md-4"> <img className="img-responsive" src="https://cdn.ytadvisors.com/images/target.jpg" alt="services" />
            </div>
            <div className="col-md-4">
              <div className = "serviceBlock">
                <h2>Custom Application Development</h2>
                <p>
                  We design and develop software tailored to your specific demands in a way
                  that ultimately meets all your business goals, expectations, and requirements.
                </p>
                <p> Our applications are built using the latest in web and mobile technologies
                  solving your toughest problems and fitting seamlessly into your current processes
                  and systems, to produce measurable results for your business.
                </p>
                <p>
                  we provide software maintenance and platform-based customization.
                </p>
              </div>
              <p>
                <a href = "/services/custom-application-development/" className = "btn">Read More</a>
              </p>
            </div>
            <div className="col-md-4">
              <div className = "serviceBlock">
                <h2>Website Design</h2>
                <p> We develop responsive sites that provide the best user experience across devices, combining great design, form and function so
                  users can find the information they need quickly.  We leverage usability testing tools and techniques to understand how users interact
                  with your product to maximize user engagement and satisfaction.
                </p>
                <h2>Working with Startups</h2>
                <p> We quickly deploy an MVP for your new business with hand-crafted solutions that merge smart design, leading-edge technology and your unique business goals.
                </p>
              </div>
              <p>
                <a href = "/services/website-startup/" className = "btn">Read More</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
  }
}

export default Services;