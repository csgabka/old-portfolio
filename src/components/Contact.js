import React, { Component } from 'react';
import '../css/Contact.css';
//import Particles from 'react-particles-js';
import FrontSide from '../img/psx_20181024_223039.jpg';
import BackSide from '../img/psx_20181024_223123.jpg';
import LeftSide from '../img/psx_20181024_223143.jpg';
import RightSide from '../img/psx_20181024_223422.jpg';
import Profile from '../img/17311080_10211117562268372_3587118879478260351_o.jpg';


class Contact extends Component {
	
		constructor(props) {
		super(props);
		this.state = {
			single_rb: "single_rb",
			front: "front_side",
			back: "back_side",
			left: "left_side",
			right: "right_side",
			top: "top_side",
			bottom: "bottom_side"
		};
	}

	onClick = (event) => {
		this.setState ({ single_rb: "single_rb_onClick"});
		this.setState ({ front: "front_side_onClick"});
		this.setState ({ back: "back_side_onClick"});
		this.setState ({ left: "left_side_onClick"});
		this.setState ({ right: "right_side_onClick"});
		this.setState ({ top: "top_side_onClick"});
		this.setState ({ bottom: "bottom_side_onClick"});
		
	}

     render() {     
		return (
		<div className="contact">
		<h1>Connect me on social media</h1>			
		
		<div class="rotating_box">
			<div class={this.state.single_rb} onClick={this.onClick}>
				<div class={this.state.front}>
					<img src={FrontSide} alt="" />
				</div>
				<div class={this.state.back}>
					<img src={BackSide} alt="" />
				</div>
				<div class={this.state.left}>
					<img src={LeftSide} alt="" />
				</div>
				<div class={this.state.right}>
					<img src={RightSide} alt="" />
				</div>
				<div class={this.state.top}>
					<img src={Profile} alt="" />
				</div>
				<div class={this.state.bottom}>
					<img src={Profile} alt="" />
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