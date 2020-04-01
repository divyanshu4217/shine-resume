import React, { Component } from 'react';
import './addonServices.scss';

class AddonServices extends Component {
    render(){
        return(
            <section class="container mt-30 bg">
                <div className="addon-heading">
                    <h2 className="secondary-heading">Add on services</h2>
                    <p>Improve your shortlisting chances with the other services we have</p>
                </div>
                <div class="tabset">
                    <input type="radio" name="tabset" id="tab1" aria-controls="services" checked/>
                    <label for="tab1">Services</label>

                    <input type="radio" name="tabset" id="tab2" aria-controls="combos" />
                    <label for="tab2">Combos</label>
                    
                    <div class="tab-panels">
                        <section id="services" class="tab-panel">
                            <div className="addon-services">
                                <figure>
                                    <img src="/media/images/linkedin-service.jpg" alt="Linkedin" />
                                </figure>
                                <p>
                                    <strong>Linkedin</strong>
                                    Linkedin Profile writing
                                </p>
                                <a className="icon-arrow-addon ml-auto" href="#"></a>
                            </div>
                            <div className="addon-services">
                                <figure>
                                    <img src="/media/images/featured-service.jpg" alt="Linkedin" />
                                </figure>
                                <p>
                                    <strong>Featured profile</strong>
                                    Get your profile featured in recruiter search
                                </p>
                                <a className="icon-arrow-addon ml-auto" href="#"></a>
                            </div>
                            <div className="addon-services">
                                <figure>
                                    <img src="/media/images/application-service.jpg" alt="Linkedin" />
                                </figure>
                                <p>
                                    <strong>Application highligter</strong>
                                    Highlight your applications
                                </p>
                                <a className="icon-arrow-addon ml-auto" href="#"></a>
                            </div>
                        </section>
                        <section id="combos" class="tab-panel">
                            <div className="addon-services">
                                <figure>
                                    <img src="/media/images/application-service.jpg" alt="Linkedin" />
                                </figure>
                                <p>
                                    <strong>Improved visibility package</strong>
                                    Resume Booster + Featured Profile
                                </p>
                                <a className="icon-arrow-addon ml-auto" href="#"></a>
                            </div>
                            <div className="addon-services">
                                <figure>
                                    <img src="/media/images/linkedin-service.jpg" alt="Linkedin" />
                                </figure>
                                <p>
                                    <strong>Improved visibility package</strong>
                                    Resume Booster + Featured Profile
                                </p>
                                <a className="icon-arrow-addon ml-auto" href="#"></a>
                            </div>
                            <div className="addon-services">
                                <figure>
                                    <img src="/media/images/application-service.jpg" alt="Linkedin" />
                                </figure>
                                <p>
                                    <strong>Improved visibility package</strong>
                                    Resume Booster + Featured Profile
                                </p>
                                <a className="icon-arrow-addon ml-auto" href="#"></a>
                            </div>
                        </section>
                    </div>
                    
                </div>
            </section>
        )
    }
};

export default AddonServices;