import React, { useState } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import './faq.scss';

const FAQ = () => (
	<div className="container-fluid mt-50"> 
	  <div className="row">
	  	<div className="container faq">
		  	<h2>Frequently Asked Questions</h2>
		  	<div className="faq__list mt-30">
			  	<Button id="toggler0">
					<strong>What is a resume format?</strong>
				</Button>
				<UncontrolledCollapse className="" toggler="#toggler0">
					<Card>
						<p>
							A resume format is a sample resume that can be edited and filled with the required details. It is often provided with instructions or sample text and needs a rigorous edit to make it useful.
						</p>
					</Card>
				</UncontrolledCollapse>
			</div>
			<div className="faq__list">
			  	<Button id="toggler1">
				  <strong>How to choose a resume format?</strong>
				</Button>
				<UncontrolledCollapse toggler="#toggler1">
					<Card>
						<p>
							A resume format is a sample resume that can be edited and filled with the required details. It is often provided with instructions or sample text and needs a rigorous edit to make it useful.
						</p>
					</Card>
				</UncontrolledCollapse>
			</div>
			<div className="faq__list">
			  	<Button id="toggler2">
				  <strong>Why are resume formats important?</strong>
				</Button>
				<UncontrolledCollapse toggler="#toggler2">
					<Card>
						<p>
							A resume format is a sample resume that can be edited and filled with the required details. It is often provided with instructions or sample text and needs a rigorous edit to make it useful.
						</p>
					</Card>
				</UncontrolledCollapse>
			</div>
			<div className="faq__list">
			  	<Button id="toggler3">
				  <strong>What makes a resume good and attractive?</strong>
				</Button>
				<UncontrolledCollapse toggler="#toggler3">
					<Card>
						<p>
							A resume format is a sample resume that can be edited and filled with the required details. It is often provided with instructions or sample text and needs a rigorous edit to make it useful.
						</p>
					</Card>
				</UncontrolledCollapse>
			</div>
		</div>
	  </div>
	</div>
  );
  
export default FAQ;