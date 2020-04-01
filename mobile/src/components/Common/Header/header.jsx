import React, { Component } from "react";
import './header.scss';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <a className="icon-shine" href="#"></a>
                <a className="icon-cart ml-auto" href="#"></a>
            </header>
        );
    }
}

export default Header;