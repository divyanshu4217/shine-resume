import React, { Component } from "react";
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer className="container bg">
                <p><a href="/privacy-policy/">Privacy Policy</a> | <a href="/tnc/">Terms &amp; Conditions</a></p>
                <p>2020 HT Media Limited. All rights reserved</p>
            </footer>
        );
    }
}

export default Footer;