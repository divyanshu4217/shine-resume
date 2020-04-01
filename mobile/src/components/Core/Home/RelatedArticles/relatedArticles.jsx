import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import './relatedArticles.scss';

class RelatedArticles extends React.Component {
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
        <div className="related-articles container bg mt-10">
            <div className="related-articles__content">
                <strong className="secondary-heading">
                    Related Articles
                </strong>
            </div>

            <Slider {...settings}>
            <div className="related-articles__slider">
                <div className="related-articles__slider__content">
                    <a href="#">
                        <figure>
                            <img src="/media/images/article-pic1.jpg" altText="Meet our professional resume writers" className="img-fluid" />
                        </figure>
                        <strong>What Makes a Cover Letter an important document attached to resume!</strong>
                        <span>
                            <i className="icon-forward"></i> <p>128</p>
                            <i className="icon-watch"></i> <p>830</p>
                        </span>
                    </a>
                </div>
            </div>
            <div className="related-articles__slider">
                <div className="related-articles__slider__content">
                    <a href="#">
                        <figure>
                            <img src="/media/images/article-pic2.jpg" altText="Meet our professional resume writers" className="img-fluid" />
                        </figure>
                        <strong>Resume Format Tips for Experienced Professionals</strong>
                        <span>
                            <i className="icon-forward"></i> <p>128</p>
                            <i className="icon-watch"></i> <p>830</p>
                        </span>
                    </a>
                </div>
            </div>
            <div className="related-articles__slider">
                <div className="related-articles__slider__content">
                    <a href="#">
                        <figure>
                            <img src="/media/images/article-pic3.jpg" altText="Meet our professional resume writers" className="img-fluid" />
                        </figure>
                        <strong>10 Words You Should Avoid Including in Your Resume</strong>
                        <span>
                            <i className="icon-forward"></i> <p>128</p>
                            <i className="icon-watch"></i> <p>830</p>
                        </span>
                    </a>
                </div>
            </div>

                

               

            
            
            </Slider>
        </div>
      );
    }
  }

export default RelatedArticles;