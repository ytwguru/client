import React from "react";
import "./styles.less";

import Header from "../../components/Header";
import Preloader from "../../components/Preloader";
import ArrowsNav from "../../components/ArrowsNav";
import Services from "../../components/Services";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import Helmet from "react-helmet";
import SlickSlider from "../../components/SlickSlider";

class Home extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){

    var $localScroll = $('.localscroll');
    if($localScroll.length){
      $localScroll.localScroll({
        lazy: true,
        lock: true,
        hash: false
      });
    }

    $(document).on("preloader-complete", function () {
      $(".slick-active > .textContent > .heading > .innerHeading").addClass("open");
      console.log("Preloaded");
    });
  }

  getArrowNav(section){
    var data = [];
    switch(section){
      case 0:
        data = [
          { link : "#home", color : "color1"},
          { link : "#services", color : "color4"}
        ];
        break;
      case 1:
        data = [
          { link : "#home", color : "color3"},
          { link : "#paralaxSlice2", color : "color1"}
        ];
        break;
      case 2:
        data = [
          { link : "#home", color : "color4"},
          { link : "#contactSlice", color : "color1"}
        ];
        break;
      case 3:
        data = [
          { link : "#services", color : "color2"},
          { link : "#contactSlice", color : "color1"}
        ];
        break;
      case 4:
        data = [
          { link : "#home", color : "color4"}
        ];
        break;
    }
    return data;
  }

  getBreakerContent(section){
    var data = {};
    switch(section){
      case 0:
        data = {
          id : "paralaxSlice1", icon : "icon-megaphone", text : "Technology to grow your business.", color :"color4"
        };
        break;
      case 1:
        data = {
          id : "paralaxSlice17", icon : "icon-camera", text : "Software that connects with your customers"
        };
        break;
      case 2:
        data = {
          id : "paralaxSlice20", icon : "icon-mail", text : "Keep in touch with us"
        };
        break;
    }
    return data;
  }

  render(){
    let slides = [
      {
        url : "https://cdn.ytadvisors.com/images/slider/super/supersized-1.jpg",
        title : <div className='heading '>
          <div className='innerHeading thirdText'>
            <div className="headerTitle">
              Software development
            </div>
            <div className="headerBody">
              We build custom web, mobile, and cross-platform solutions that keep you one step ahead of the competition.
            </div>
            <p>
              <a href = "/services/product-development/" className = "btn pull-right">Read More</a>
            </p>
          </div>
        </div>
      },
      {
        url : "https://cdn.ytadvisors.com/images/slider/super/supersized-2.jpg",
        title : <div className='heading '>
          <div className='innerHeading thirdText'>
            <div className="headerTitle">
              Custom solutions
            </div>
            <div className="headerBody">
              Whether you are a start-up or an established business, we create solutions to engage your customers.
            </div>
            <p>
              <a href = "/services/custom-application-development/" className = "btn pull-right">Read More</a>
            </p>
          </div>
        </div>
      },
      {
        url : "https://cdn.ytadvisors.com/images/slider/super/supersized-3.jpg",
        title : <div className='heading '>
          <div className='innerHeading thirdText'>
            <div className="headerTitle">
              Information Security
            </div>
            <div className="headerBody">
              Address data security challenges in software, systems, and organizational processes.
            </div>
            <p>
              <a href = "/services/technology-consulting#security" className = "btn pull-right">Read More</a>
            </p>
          </div>
        </div>
      },
      {
        url : "https://cdn.ytadvisors.com/images/slider/super/supersized-4.jpg",
        title : <div className='heading '>
          <div className='innerHeading thirdText'>
            <div className="headerTitle">
              Product management
            </div>
            <div className="headerBody">
              Our experienced consultants will tailor solutions that deliver results.
            </div>
            <p>
              <a href = "/services/technology-consulting#product_management" className = "btn pull-right">Read More</a>
            </p>
          </div>
        </div>
      }
    ];
    let slickSettings = {
      dots: true,
      infinite: true,
      pauseOnHover : false,
      swipe : false,
      swipeToSlide : false,
      touchMove : false,
      arrows: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: function(){
        $(".innerHeading").each(function(){
          $(this).removeClass("open");
        });
      },
      afterChange : function(){
        $(".slick-active > .textContent > .heading  > .innerHeading").addClass("open");
      }
    };
    return <div id="home">
      <Preloader>
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <SlickSlider data={{slides : slides, settings : slickSettings }} />
        <Header data={{page : "home"}}>
        </Header>
        <Services>
        </Services>
        <ArrowsNav data={this.getArrowNav(2)}>
        </ArrowsNav>
        <ContactUs>
        </ContactUs>
        <ArrowsNav data={this.getArrowNav(4)}>
        </ArrowsNav>
        <Footer>
        </Footer>
      </div>
    </div>
  }
}

export default Home;
