import React, { Component } from 'react';
import './navigation.scss';

class Navigation extends Component {
  render() {
      return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="brand-logo" href="#"></a>

            <div className="collapse navbar-collapse">
              <div className="top-links">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item  menu-item">
                    <a href="#">Blog</a>
                  </li>
                  <li className="nav-item">
                    <span className="ml-10 mr-10">|</span>
                  </li>
                  <li className="nav-item menu-item dropdown">
                    <a className="icon-call" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                    <div className="dropdown-menu custom-l" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">
                        <strong>Call us: </strong> 0124-4312500/01
                      </a>
                    </div>
                  </li>
                  <li className="nav-item menu-item dropdown">
                    <a className="icon-user" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Login</a>
                      <a className="dropdown-item" href="#">Register</a>
                    </div>
                  </li>
                  <li className="nav-item  menu-item">
                    <a className="icon-cart" href="#"></a>
                  </li>
                </ul>
              </div>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item menu-item dropdown">
                  <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Resume Writing
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Resume Writing Links</a>
                    <a className="dropdown-item" href="#">Resume Writing Links</a>
                    <a className="dropdown-item" href="#">Resume Writing Links</a>
                  </div>
                </li>
                <li className="nav-item menu-item">
                  <a className="nav-link" href="#">Linkedin</a>
                </li>
                <li className="nav-item menu-item dropdown">
                  <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Recruiter Reach
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Recruiter Reach Links</a>
                    <a className="dropdown-item" href="#">Recruiter Reach Links</a>
                    <a className="dropdown-item" href="#">Recruiter Reach Links</a>
                  </div>
                </li>
                <li className="nav-item menu-item dropdown">
                  <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Free Resources
                  </a>
                  {/* multi level dropdown */}
                  <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                    <li className="dropdown-submenu d-flex">
                      <a  className="dropdown-item" tabindex="-1" href="#">Resume Formats</a>
                      <ul className="dropdown-menu dropdown-menu-open">
                        <li className="dropdown-item"><a tabindex="-1" href="#">Freshers</a></li>
                        <li className="dropdown-item"><a href="#">Banking Freshers</a></li>
                        <li className="dropdown-item"><a href="#">Experienced Professional</a></li>
                        <li className="dropdown-item"><a href="#">Engineers</a></li>
                        <li className="dropdown-item"><a href="#">IT</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu d-flex">
                      <a  className="dropdown-item" tabindex="-2" href="#">Resignation Letter Formats</a>
                      <ul className="dropdown-menu dropdown-menu-open">
                        <li className="dropdown-item"><a tabindex="-2" href="#">Second level2</a></li>
                        <li className="dropdown-item"><a href="#">Second level2</a></li>
                        <li className="dropdown-item"><a href="#">Second level2</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu d-flex">
                      <a  className="dropdown-item" tabindex="-3" href="#">Covor Letter Formats</a>
                      <ul className="dropdown-menu dropdown-menu-open">
                        <li className="dropdown-item"><a tabindex="-3" href="#">Second level3</a></li>
                        <li className="dropdown-item"><a href="#">Second level3</a></li>
                        <li className="dropdown-item"><a href="#">Second level3</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu d-flex">
                      <a  className="dropdown-item" tabindex="-4" href="#">Resume Templates</a>
                      <ul className="dropdown-menu dropdown-menu-open">
                        <li className="dropdown-item"><a tabindex="-4" href="#">Second level4</a></li>
                        <li className="dropdown-item"><a href="#">Second level4</a></li>
                        <li className="dropdown-item"><a href="#">Second level4</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu d-flex">
                      <a  className="dropdown-item" tabindex="-5" href="#">LinkedIn Summary Example</a>
                      <ul className="dropdown-menu dropdown-menu-open">
                        <li className="dropdown-item"><a tabindex="-5" href="#">Second level5</a></li>
                        <li className="dropdown-item"><a href="#">Second level5</a></li>
                        <li className="dropdown-item"><a href="#">Second level5</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu d-flex">
                      <a  className="dropdown-item" tabindex="-6" href="#">Relieving Letter</a>
                      <ul className="dropdown-menu dropdown-menu-open">
                        <li className="dropdown-item"><a tabindex="-6" href="#">Second level6</a></li>
                        <li className="dropdown-item"><a href="#">Second level6</a></li>
                        <li className="dropdown-item"><a href="#">Second level6</a></li>
                      </ul>
                    </li>
                  </ul>
                  {/* multi level dropdown */}
                </li>
                <li className="nav-item menu-item dropdown">
                  <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Other Services
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Other Services Links</a>
                    <a className="dropdown-item" href="#">Other Services Links</a>
                    <a className="dropdown-item" href="#">Other Services Links</a>
                  </div>
                </li>
                <li className="nav-item menu-item">
                  <a className="nav-link" href="#">Courses</a>
                </li>
                
              </ul>
            </div>
          </nav>
        </div>
      )
  }
}

export default Navigation;