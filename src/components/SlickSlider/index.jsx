import React, { Component } from 'react'
import Slider from "react-slick";

export default class SlickSlider extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className=" sliderContent">
        <div className="">
          <Slider ref='slider' {...this.props.data.settings}>
            {
              (((slides) => slides.map((slide) => {
                return <div className="slideContainer">
                  <div className="textContent" >{slide.title}</div>
                  <div className = "sliderImage" style ={{backgroundImage:`url(${slide.url})`}} >
                  </div>
                </div>
              }))(this.props.data.slides))
            }
          </Slider>
        </div>
      </div>
    );
  }
}