import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './addonServices.scss';

const AddonServices = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="container-fluid bg2 mt-50">
      <div className="row">
        <div className="container addon-services mt-30">
          <h2>Add on services</h2>
          <p>Improve your shortlisting chances with the <br/>other services we have</p>
          <Nav tabs className="mt-20">
            <NavItem className="mr-10">
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                Services
              </NavLink>
            </NavItem>
            <NavItem className="ml-10">
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                Combos
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mt-20" activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12" className="d-flex pl-50 pr-50">
                  <div className="col">
                    <div className="addon-services__content">
                      <figure className="icon-addon1"></figure>
                      <strong>Interview Preperation</strong>
                      <p>Linkedin Profile writing</p>
                      <a href="#">View details</a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="addon-services__content">
                      <figure className="icon-addon2"></figure>
                      <strong>Featured profile</strong>
                      <p>Get your profile featured in recruiter search</p>
                      <a href="#">View details</a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="addon-services__content">
                      <figure className="icon-addon3"></figure>
                      <strong>Application highligter</strong>
                      <p>Highlight your applications</p>
                      <a href="#">View details</a>
                    </div>
                  </div>
                </Col>
                <a href="#enquirenow" type="button" class="btn btn-primary mt-20">Enquire Now</a>
              </Row>
            </TabPane>
            <TabPane tabId="2">
            <Row>
                <Col sm="12" className="d-flex pl-50 pr-50">
                  <div className="col">
                    <div className="addon-services__content">
                      <figure className="icon-addon1"></figure>
                      <strong>Improved visibility package</strong>
                      <p>Resume Booster + Featured Profile</p>
                      <a href="#">View details</a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="addon-services__content">
                      <figure className="icon-addon2"></figure>
                      <strong>Improved visibility package</strong>
                      <p>Resume Booster + Featured Profile</p>
                      <a href="#">View details</a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="addon-services__content">
                      <figure className="icon-addon3"></figure>
                      <strong>Improved visibility package</strong>
                      <p>Resume Booster + Featured Profile</p>
                      <a href="#">View details</a>
                    </div>
                  </div>
                </Col>
                <a href="#enquirenow" type="button" class="btn btn-primary mt-20">Enquire Now</a>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </div>
  );
}

export default AddonServices;
