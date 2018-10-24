import React, { Component } from 'react';
import '../css/Contact.css';
import axios from 'axios';
import Popup from "reactjs-popup";

class Contact extends Component {
	
	render() {
		return (
		<div className="contact">
		<h1>Connect me on social media</h1>
		<hr />
		<button id="scroll-button" type="button" className="btn btn-outline-info" onClick={this.props.scrollToTop}>
		Scroll me back to the top!</button>

		</div>
		);
	}
	
}

export default Contact;