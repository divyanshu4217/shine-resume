import React, { Component } from 'react';
import './expertResumeServices.scss';

class ExpertResumeServices extends Component {
    render() {
        return(
            <div className="container expert-resume-services container">
                <div className="expert-resume-services__content">
                    <strong className="secondary-heading">
                        Boost your career with our <h2 className="secondary-heading">Expert Resume Writing</h2> service
                    </strong>
                    <p className="mt-20">
                        Get success on landing new job faster with a resume that shows your strength. Use our experts to write your resume using the right keyword to highlight your career goals and achievements in an effective manner and quality formatting to make your resume stand out.
                    </p>
                </div>
                <div className="expert-resume-services__stats mt-20">
                    <ul>
                        <li>
                            <strong className="color1">10+</strong>
                            <p>Years of experience</p>
                        </li>
                        <li>
                            <strong className="color2">10,000+</strong>
                            <p>Resume written</p>
                        </li>
                        <li>
                            <strong className="color3">95+</strong>
                            <p>Customer satisfaction</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong className="color4">15+</strong>
                            <p>Countries served</p>
                        </li>
                        <li>
                            <strong className="color5">50+</strong>
                            <p>Industry served</p>
                        </li>
                        <li>
                            <strong className="color6">20+</strong>
                            <p>Writers</p>
                        </li>
                    </ul>
                </div>
                    
                
            </div>
        )
    }
}

export default ExpertResumeServices;