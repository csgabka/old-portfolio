import React, { Component } from 'react';
import '../css/Contact.css';
//import Particles from 'react-particles-js';
import FrontSide from '../img/psx_20181024_223039.jpg';
import BackSide from '../img/psx_20181024_223123.jpg';
import LeftSide from '../img/psx_20181024_223143.jpg';
import RightSide from '../img/psx_20181024_223422.jpg';

class Contact extends Component {
	
	render() {
		{/*const particleOptions = {
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

           <Particles params={particleOptions}  /> 	*/}
		return (
		<div className="contact">
		<h1>Connect me on social media</h1>
		<div>
			
		
		<div class="rotating_box">
			<div class="single_rb">
				<div class="front_side">
					<img src={FrontSide} alt="" />
				</div>
				<div class="back_side">
					<img src={BackSide} alt="" />
				</div>
				<div class="left_side">
					<img src={LeftSide} alt="" />
				</div>
				<div class="right_side">
					<img src={RightSide} alt="" />
				</div>
				<div class="top_side">
					<img src={FrontSide} alt="" />
				</div>
				<div class="bottom_side">
					<img src={FrontSide} alt="" />
				</div>
			</div>
		</div>




		</div>
		
		<hr />
		<button id="scroll-button" type="button" className="btn btn-outline-info" onClick={this.props.scrollToTop}>
		Scroll me back to the top!</button>

		</div>
		);
	}
	
}

export default Contact;