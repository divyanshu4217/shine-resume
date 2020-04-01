import React, { Component } from 'react';
import './ourCustomers.scss';

class OurCustomers extends Component{
    render() {
        return(
            <div className="container bg mt-30 our-customers">
                <strong className="secondary-heading">Our customers are now at these amazing places</strong>
                <div className="d-flex align-items-center flex-wrap mt-20">
                    <div className="col">
                        <img src="/media/images/google-logo.png" alt="Google" />
                    </div>
                    <div className="col">
                        <img src="/media/images/people-logo.png" alt="People Strong" />
                    </div>
                    <div className="col">
                        <img src="/media/images/infosys-logo.png" alt="Infosys" />
                    </div>
                    <div className="col">
                        <img src="/media/images/fujitsu-logo.png" alt="Fujitsu" />
                    </div>
                    <div className="col">
                        <img src="/media/images/ibm-logo.png" alt="IBM" />
                    </div>
                    <div className="col">
                        <img src="/media/images/genpact-logo.png" alt="Genpact" />
                    </div>
                </div>
            </div>
        )
    }
};

export default OurCustomers;