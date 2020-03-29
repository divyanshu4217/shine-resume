import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer class="container-fluid mt-50">
                <div class="row">
                    <div class="container">
                        <div className="d-flex align-items-center bdr-bottom">
                            <ul className="d-flex">
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Partners</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms & Condition</a>
                                </li>
                                <li>
                                    <a href="#">Contact us</a>
                                </li>
                            </ul>
                            <span class="navbar-text social-icon ml-auto">
                                <a href="#" class="icon-facebook-footer"></a>
                                <a href="#" class="icon-linkedin-footer"></a>
                                <a href="#" class="icon-twitter-footer"></a>
                            </span>
                        </div>
                    
                        <div class="d-flex justify-content-between align-items-center mt-20">
                            <div class="secure-payment">
                                <figure class="icon-secure mr-20"></figure>
                                <span>
                                <strong>100% Secure Payment</strong>
                                All major credit & debit cards accepted
                                </span>
                            </div>
                            <div class="payment-option">
                                Payment options
                                <figure class="icon-payment-options"></figure>
                            </div>
                            <div class="copyright">
                                Copyright © 2019 HT Media Limited.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;




