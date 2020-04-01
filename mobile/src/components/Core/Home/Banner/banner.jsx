import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import './banner.scss';

class Banner extends React.Component {
    render() {
      var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        fade: true,
        adaptiveHeight: true,
      };
      return (
        <div className="banner-slide text-center">

            <Slider {...settings}>
            <div className="carousel-content banner1">
                <strong>Struggling with your job?</strong>
                    <h1 className="banner-heading">Get a well crafted professional resume</h1>
                    <ul className="carousel-content__list">
                        <li>Increased <strong>recruiter views</strong></li>
                        <li>Great first <strong>impression to recruiter</strong></li>
                        <li>Applicant <strong>Tracking System friendly</strong></li>
                        <li>Power to get you <strong>hired 33% FASTER</strong> </li>
                    </ul>
                <a href="#enquirenow" type="button" class="btn-orange">Enquire Now</a>
            </div>
            <div className="carousel-content banner2">
                <strong>Struggling with your job?</strong>
                    <h2 className="banner-heading">Make your online profile Extremely Strong</h2>
                    <ul className="carousel-content__list">
                        <li>Increased <strong>recruiter views</strong></li>
                        <li>Great first <strong>impression to recruiter</strong></li>
                        <li>Applicant <strong>Tracking System friendly</strong></li>
                        <li>Power to get you <strong>hired 33% FASTER</strong> </li>
                    </ul>
                <a href="#enquirenow" type="button" class="btn-orange">Enquire Now</a>
            </div>
            </Slider>
        </div>
      );
    }
  }

export default Banner;