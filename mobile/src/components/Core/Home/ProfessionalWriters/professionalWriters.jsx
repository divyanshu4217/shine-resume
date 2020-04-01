import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import './professionalWriters.scss';

class ProfessionalWriters extends React.Component {
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
        <div className="container professional-writers mt-30">
            <div className="professional-writers__content">
                <strong className="secondary-heading">
                    Meet our <h2>professional resume writers</h2>
                </strong>
            </div>

            <Slider {...settings}>
                <div className="professional-writers__slider mt-20">
                    <div className="professional-writers__slider__content">
                        <figure>
                            <img src="/media/images/professional-writer1.jpg" altText="Meet our professional resume writers" className="img-fluid" />
                        </figure>
                        <strong>Gaurav Singh</strong>
                        <p>Get a competitive edge with resume that highlights your strengths and eraknesses</p>
                        <span className="professional-writers__slider__social">
                            <a>
                                <i className="icon-facebook"></i>
                            </a>
                            <a>
                                <i className="icon-twitter"></i>
                            </a>
                            <a>
                                <i className="icon-linkedin"></i>
                            </a>
                        </span>
                    </div>
                </div>

                <div className="professional-writers__slider mt-20">
                    <div className="professional-writers__slider__content">
                        <figure>
                            <img src="/media/images/professional-writer2.jpg" altText="Meet our professional resume writers" className="img-fluid" />
                        </figure>
                        <strong>Priya Mittal</strong>
                        <p>Use visuals to enhance and highlight your experience</p>
                        <span className="professional-writers__slider__social">
                            <a>
                                <i className="icon-facebook"></i>
                            </a>
                            <a>
                                <i className="icon-twitter"></i>
                            </a>
                            <a>
                                <i className="icon-linkedin"></i>
                            </a>
                        </span>
                    </div>
                </div>

                <div className="professional-writers__slider mt-20">
                    <div className="professional-writers__slider__content">
                        <figure>
                            <img src="/media/images/professional-writer3.jpg" altText="Meet our professional resume writers" className="img-fluid" />
                        </figure>
                        <strong>Ruchi Gupta</strong>
                        <p>Create yourself with the wonderful templates available</p>
                        <span className="professional-writers__slider__social">
                            <a>
                                <i className="icon-facebook"></i>
                            </a>
                            <a>
                                <i className="icon-twitter"></i>
                            </a>
                            <a>
                                <i className="icon-linkedin"></i>
                            </a>
                        </span>
                    </div>
                </div>

            
            
            </Slider>
        </div>
      );
    }
  }

export default ProfessionalWriters;