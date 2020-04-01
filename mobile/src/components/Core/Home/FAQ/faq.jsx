import React, { Component } from 'react';
import './faq.scss';

class FAQ extends Component {
    render(){
        return(
            <div class="container faq">
                <h2 className="secondary-heading">Frequently Asked Questions</h2>
                <div class="tabs">
                    <div class="tab">
                        <input type="radio" id="rd1" name="rd"/>
                        <label class="tab-label" for="rd1">What is a resume format?</label>
                        <div class="tab-content">
                            A resume format is a sample resume that can be edited and filled with the required details. It is often provided with instructions or sample text and needs a rigorous edit to make it useful.
                        </div>
                    </div>
                    <div class="tab">
                        <input type="radio" id="rd2" name="rd"/>
                        <label class="tab-label" for="rd2">How to choose a resume format?</label>
                        <div class="tab-content">
                            A resume format is a sample resume that can be edited and filled with the required details. It is often provided with instructions or sample text and needs a rigorous edit to make it useful.
                        </div>
                    </div>
                    <div class="tab">
                        <input type="radio" id="rd3" name="rd"/>
                        <label class="tab-label" for="rd3">Why are resume formats important?</label>
                        <div class="tab-content">
                            A resume format is a sample resume that can be edited and filled with the required details. It is often provided with instructions or sample text and needs a rigorous edit to make it useful.
                        </div>
                    </div>
                    <div class="tab">
                        <input type="radio" id="rd4" name="rd"/>
                        <label class="tab-label" for="rd4">What makes a resume good and attractive?</label>
                        <div class="tab-content">
                            A resume format is a sample resume that can be edited and filled with the required details. It is often provided with instructions or sample text and needs a rigorous edit to make it useful.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default FAQ;