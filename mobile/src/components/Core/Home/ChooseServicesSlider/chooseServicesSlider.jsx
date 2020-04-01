import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import './chooseServicesSlider.scss';

class ChooseServicesSlider extends React.Component {
    render() {
      var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,

      };
      return (
        <div className="choose-services bg mt-30 text-center">
            <div className="choose-services__content">
                <strong className="secondary-heading">
                    Choose your services and start today
                </strong>
            </div>

            <Slider {...settings}>
            <div className="choose-services__slider">
                <div className="choose-services__slider__content">
                    <figure>
                        <img src="/media/images/text-resume.jpg" alt="Text Resume" />
                    </figure>
                    <div className="media-body">
                        <strong>Text Resume</strong>
                        <p>Get a competitive edge with resume that highlights your strengths and eraknesses</p>
                        <span className="d-flex align-items-center">
                            <span className="price">
                                Price <strong>1100/-</strong>
                            </span>
                            <button type="button" class="btn-blue ml-auto">View details</button>
                        </span>
                    </div>
                </div>
                <div className="choose-services__slider__content">
                    <figure>
                        <img src="/media/images/visual-resume.jpg" alt="Visual Resume" />
                    </figure>
                    <div className="media-body">
                        <strong>Visual Resume</strong>
                        <p>Use visuals to enhance and highlight your experience</p>
                        <span className="d-flex align-items-center">
                            <span className="price">
                                Price <strong>2299/-</strong>
                            </span>
                            <button type="button" class="btn-blue ml-auto">View details</button>
                        </span>
                    </div>
                </div>
                <div className="choose-services__slider__content">
                    <figure>
                        <img src="/media/images/resume-builder.jpg" alt="Resume Builder" />
                    </figure>
                    <div className="media-body">
                        <strong>Resume Builder</strong>
                        <p>Create yourself with the wonderful templates available</p>
                        <span className="d-flex align-items-center">
                            <span className="price">
                                Price <strong>2899/-</strong>
                            </span>
                            <button type="button" class="btn-blue ml-auto">View details</button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="choose-services__slider">
                <div className="choose-services__slider__content">
                    <figure>
                        <img src="/media/images/text-resume.jpg" alt="Text Resume" />
                    </figure>
                    <div className="media-body">
                        <strong>Text Resume</strong>
                        <p>Get a competitive edge with resume that highlights your strengths and eraknesses</p>
                        <span className="d-flex align-items-center">
                            <span className="price">
                                Price <strong>1100/-</strong>
                            </span>
                            <button type="button" class="btn-blue ml-auto">View details</button>
                        </span>
                    </div>
                </div>
                <div className="choose-services__slider__content">
                    <figure>
                        <img src="/media/images/resume-builder.jpg" alt="Resume Builder" />
                    </figure>
                    <div className="media-body">
                        <strong>Resume Builder</strong>
                        <p>Create yourself with the wonderful templates available</p>
                        <span className="d-flex align-items-center">
                            <span className="price">
                                Price <strong>2899/-</strong>
                            </span>
                            <button type="button" class="btn-blue ml-auto">View details</button>
                        </span>
                    </div>
                </div>
                <div className="choose-services__slider__content">
                    <figure>
                        <img src="/media/images/visual-resume.jpg" alt="Visual Resume" />
                    </figure>
                    <div className="media-body">
                        <strong>Visual Resume</strong>
                        <p>Use visuals to enhance and highlight your experience</p>
                        <span className="d-flex align-items-center">
                            <span className="price">
                                Price <strong>2299/-</strong>
                            </span>
                            <button type="button" class="btn-blue ml-auto">View details</button>
                        </span>
                    </div>
                </div>
            </div>
            </Slider>
        </div>
      );
    }
  }

export default ChooseServicesSlider;