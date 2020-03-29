import React from 'react';
import './enquireNow.scss';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const EnquireNow = (props) => {
  return (
    <div id="enquirenow" className="container-fluid mt-50">
        <div className="row">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="/media/images/enquire-now.png" className="img-fluid" alt="Enquire now!" />
                    </div>
                    <div className="col">
                        <h2>Enquire now!</h2>
                        <Form className="mt-30 enquire-now">
                            <FormGroup>
                                <Input className="input_field" type="text" name="name" id="name" placeholder=" " />
                                <Label className="input_label" for="name">Name*</Label>
                            </FormGroup>
                            <FormGroup className="error">
                                <Input type="text" className="input_field" name="email" id="email" placeholder=" " />
                                <Label className="input_label" for="email">Email*</Label>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" className="input_field" name="mobile" id="mobile" placeholder=" " />
                                <Label className="input_label" for="mobile">Mobile*</Label>
                            </FormGroup>
                            <FormGroup>
                                <Input type="textarea" className="input_field" name="message" id="message" placeholder=" " />
                                <Label className="input_label" for="message">Message</Label>
                            </FormGroup>
                            <Button className="btn btn-primary">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default EnquireNow;