import React, { Component } from 'react';
import './enquireNow.scss';

class EnquireNow extends Component {
    render(){
        return(
            <div id="enquirenow" class="container mt-10">
                <h2 className="secondary-heading">Enquire now!</h2>
                <form className="enquire-now mt-20">
                    <div className="form-group">
                        <input className="input_field" type="text" name="name" id="name" placeholder=" " />
                        <label className="input_label" for="name">Name*</label>
                    </div>
                    <div className="form-group">
                        <input type="text" className="input_field" name="email" id="email" placeholder=" " />
                        <label className="input_label" for="email">Email*</label>
                    </div>
                    <div className="form-group error">
                        <input type="text" className="input_field" name="mobile" id="mobile" placeholder=" " />
                        <label className="input_label" for="mobile">Mobile*</label>
                    </div>
                    <div className="form-group">
                        <textarea className="input_field" name="message" id="message" placeholder=" " />
                        <label className="input_label" for="message">Message</label>
                    </div>
                    <div className="form-group">
                        <button className="btn-orange">Submit</button>
                    </div>
                    
                </form>
            </div>
        )
    }
};

export default EnquireNow;