import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import './likeCourses.scss';

class LikeCourses extends React.Component {
    render() {
      var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
      };
      return (
        <div className="container courses-slider bg mt-10">
            <div className="courses-like">
                <h2 className="secondary-heading">Courses you may like</h2>
            </div>

            <Slider {...settings}>
                <div className="listing">
                    <ul class="list-unstyled">
                        <li class="media listing__list">
                            <figure class="listing__image">
                                <img aria-label="Digital Marketing Master Training Course"
                                    class="img-fluid"
                                    src="https://static1.shine.com/l/m/product_image/656/1518077922_6747.png"
                                    alt="Digital Marketing Master Training Course"/>
                            </figure>

                            <div class="media-body">
                                <h3>
                                    <a href="#">Email Marketing Master Training Course</a>
                                </h3>
                                <div class="rating">
                                    <span className="rating__mode">
                                        Online
                                    </span>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star-blank"></i>
                                    <span class="rating__output"> 4/5</span>
                                </div>
                                <div class="courses">
                                    Starting at <strong class="courses__price">Rs.
                                        2899/-</strong>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="listing">
                    <ul class="list-unstyled">
                        <li class="media listing__list">
                            <figure class="listing__image">
                                <img aria-label="Digital Marketing Test" class="img-fluid"
                                    src="https://static1.shine.com/l/m/product_image/3954/1562948482_5538.png"
                                    alt="Digital Marketing Test"/>
                                </figure>

                            <div class="media-body">
                                <h3>
                                    <a href="#">Certified Email Marketing Professional</a>
                                </h3>
                                <div class="rating">
                                    <span className="rating__mode">
                                        Online
                                    </span>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star-blank"></i>
                                    <span class="rating__output"> 4/5</span>
                                </div>
                                <div class="courses">
                                    Starting at <strong class="courses__price">Rs.
                                        2899/-</strong>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="listing">
                    <ul class="list-unstyled">
                        <li class="media listing__list">
                            <figure class="listing__image">
                                <img aria-label="Digital Marketing Master Training Course"
                                    class="img-fluid"
                                    src="https://static1.shine.com/l/m/product_image/656/1518077922_6747.png"
                                    alt="Digital Marketing Master Training Course"/>
                                </figure>

                            <div class="media-body">
                                <h3>
                                    <a href="#">Email Marketing Master Training Course</a>
                                </h3>
                                <div class="rating">
                                    <span className="rating__mode">
                                        Online
                                    </span>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star-blank"></i>
                                    <span class="rating__output"> 4/5</span>
                                </div>
                                <div class="courses">
                                    Starting at <strong class="courses__price">Rs.
                                        2899/-</strong>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Slider>
        </div>
      );
    }
  }

export default LikeCourses;