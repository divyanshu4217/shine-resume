import React, { Component } from "react";
import { stack as Menu } from 'react-burger-menu';
import './menuNav.scss';
 
class MenuNav extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }
 
  render () {
    return (
      <Menu className={ 'navigation' } width={ '300px' }>
        <div className="guest-section">
          <figure className="icon-user-pic"></figure>
          <div className="media-body">
            <p>Welcome Guest</p>
            <p>
              <a className="btn-white" href="#">Login</a>
              <a className="btn-white" href="#">Register</a>
            </p>
          </div>
        </div>
        <div className="menu-links">
          <a className="menu-item" href="#"><figure className="icon-home"></figure> Home</a>
          <a className="menu-item" href="#"><figure className="icon-resume-service"></figure> Resume Services <figure className="icon-arrow-menusm ml-auto"></figure></a>
          <a className="menu-item" href="#"><figure className="icon-linkedin-service"></figure> Linkedin</a>
          <a className="menu-item" href="#"><figure className="icon-recruiter-service"></figure> Recruiter Reach</a>
          <a className="menu-item" href="#"><figure className="icon-free-resources"></figure> Free Resources <figure className="icon-arrow-menusm ml-auto"></figure></a>
          <a className="menu-item" href="#"><figure className="icon-other-services"></figure> Other Services <figure className="icon-arrow-menusm ml-auto"></figure></a>
          <a className="menu-item" href="#"><figure className="icon-courses-services"></figure> Courses</a>
          <a className="menu-item" href="#"><figure className="icon-blog-services"></figure> Blog</a>
          <a className="menu-item" href="#">About us</a>
          <a className="menu-item" href="#">Contact us</a>
        </div>
      </Menu>
    );
  }
}

export default MenuNav;