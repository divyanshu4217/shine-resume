import React, { Component } from 'react';
import './expertResumeServices.scss';

class ExpertResumeServices extends Component {
    render () {
        return(
            <div className="container expert-resume-services">
                <div className="row">
                    <div className="col pl-0">
                        <div className="expert-resume-services__stats mt-20">
                            <ul>
                                <li>
                                    <figure>
                                        <span className="color1">
                                            <i className="icon-stats1"></i>
                                        </span>
                                        <figcaption>
                                            <strong>10+</strong>
                                            Years of experience
                                        </figcaption>
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <span className="color2">
                                            <i className="icon-stats2"></i>
                                        </span>
                                        <figcaption>
                                            <strong>10,000+</strong>
                                            Resume written
                                        </figcaption>
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <span className="color3">
                                            <i className="icon-stats3"></i>
                                        </span>
                                        <figcaption>
                                            <strong>95+</strong>
                                            Customer satisfaction
                                        </figcaption>
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <span className="color4">
                                            <i className="icon-stats4"></i>
                                        </span>
                                        <figcaption>
                                            <strong>15+</strong>
                                            Countries served
                                        </figcaption>
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <span className="color5">
                                            <i className="icon-stats5"></i>
                                        </span>
                                        <figcaption>
                                            <strong>50+</strong>
                                            Industry served
                                        </figcaption>
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <span className="color6">
                                            <i className="icon-stats6"></i>
                                        </span>
                                        <figcaption>
                                            <strong>20+</strong>
                                            Writers
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </div>
                    
                    </div>
                    <div className="col d-flex align-items-center">
                        <div className="expert-resume-services__content mt-20">
                            <strong>
                                Boost your career with our <h2>Expert Resume Writing</h2> service
                            </strong>
                            <p className="mt-20">
                                Get success on landing new job faster with a resume that shows your strength. Use our experts to write your resume using the right keyword to highlight your career goals and achievements in an effective manner and quality formatting to make your resume stand out.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ExpertResumeServices;