import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import './professionalResume.scss';

class ProfessionalResume extends React.Component {
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
        <div className="container professional-slider mt-30">
            

            <Slider {...settings}>
            <div className="professional-slider__slides">
                <strong className="secondary-heading">
                    See the difference a professional resume makes
                </strong>
                <figure>
                    <img src="/media/images/professional-resume-bg1.jpg" altText="See the difference a professional resume makes" className="img-fluid" />
                </figure>
                <span className="d-flex justify-content-center">
                    <a href="#enquirenow" type="button" class="btn-orange mt-10">Enquire Now</a>
                </span>
            </div>
            <div className="professional-slider__slides">
                <strong className="secondary-heading">
                    Be among the first ones to be seen by recruiters.
                </strong>
                <figure>
                    <img src="/media/images/professional-resume-bg2.jpg" altText="See the difference a professional resume makes" className="img-fluid" />
                </figure>
                <span className="d-flex justify-content-center">
                    <a href="#enquirenow" type="button" class="btn-orange mt-10">Enquire Now</a>
                </span>
            </div>
            
            </Slider>
        </div>
      );
    }
  }

export default ProfessionalResume;