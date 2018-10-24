import React, { Component } from 'react';
import '../css/Contact.css';
import Particles from 'react-particles-js';

class Contact extends Component {
	
	render() {
		const particleOptions = {
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}
		return (
		<div className="contact">
		<h1>Connect me on social media</h1>
		<div>
			
		<Particles 
              params={particleOptions}
            />



		</div>
		
		<hr />
		<button id="scroll-button" type="button" className="btn btn-outline-info" onClick={this.props.scrollToTop}>
		Scroll me back to the top!</button>

		</div>
		);
	}
	
}

export default Contact;