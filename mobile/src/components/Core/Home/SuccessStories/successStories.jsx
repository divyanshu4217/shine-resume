import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import './successStories.scss';

class SuccessStories extends React.Component {
    render() {
      var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
      };
      return (
        <div className="container stories-slider mt-30">
            <div className="success-stories">
                <h2 className="secondary-heading">Success stories</h2>
                <p>What are our customers saying about our <br/>resume service</p>
            </div>

            <Slider {...settings}>
            <div className="stories-slider">
                <div className="stories-slider__content">
                    <i>s</i>
                    <strong>Sumit Singh</strong>
                    <span>Project Co-ordinator, HCL</span>
                    <p>I am enthusiastic about your service and will definitely consider you for my future resume/editing needs and that of my friends/ colleagues.</p>
                </div>
            </div>
            <div className="stories-slider">
                <div className="stories-slider__content">
                    <i className="col2">V</i>
                    <strong>Vijay Dinanath Chauhan</strong>
                    <span>High school teacher, Mandwa</span>
                    <p>I am enthusiastic about your service and will definitely consider you for my future resume/editing needs and that of my friends/ colleagues.</p>
                </div>
            </div>
            
            </Slider>
        </div>
      );
    }
  }

export default SuccessStories;