import React, { Component } from 'react';
import '../css/Contact.css';
import axios from 'axios';
import Popup from "reactjs-popup";

class Contact extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
			isValid: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (event) => {
		const name = event.target.id;
		const value = event.target.value;
		this.setState ({ [name] : value});
		if((this.state.name.length)>1 &&
		   (this.state.message.length)>5 &&
		   (this.state.email.length)>7 &&
		   (this.state.email.includes("@")) &&
		   (this.state.email.includes(".")))
				{
					this.setState({isValid: true});
					this.forceUpdate();
				}
				else 				{
					this.setState({isValid: false});
					this.forceUpdate();
				}

	}




	async handleSubmit (event) {
		
		if((this.state.isValid) === true)
		{
			event.preventDefault();
			const { name, email, message } = this.state;
			const form = await axios.post('/api/form', {
			name,
			email,
			message
			});
			event.target.reset();
			this.setState({ isValid: ''});
			this.setState({ name: ''});
			this.setState({ email: ''});
			this.setState({ message: ''});
			this.forceUpdate();
		}

		else {
			event.preventDefault();
			this.setState({ isValid: ''}, () => {
			
		});
		}
	}
	
	render() {
		const contentStyle = {
			fontFamily: "sans-serif",
			textAlign: "center",
			backgroundColor: "#596167",
			fontStyle: "italic"
		}
		const HiddenStyle = this.state.isValid ? {display: 'none'} : {};
		const showStyle = this.state.isValid ? {} : {display: 'none'};
		return (
		<div className="contact">
		<h1>Contact Me</h1>
		<form id="form" onSubmit={this.handleSubmit}>
		  <div>
		  <hr />
		    <h6><span class="label label-default">Name</span></h6>
		    <input 
		    onChange={this.handleChange} 
		    autoComplete="off"
		    id="name"
		    name="name" className="input-sm form-control" placeholder="Enter your name here."/>
		  </div>
		  <div>
		  <hr />
		    <h6><span class="label label-default">E-mail</span></h6>
		    <input 
		    onChange={this.handleChange}
		    id="email"
		    name="email"
		    className="form-control input-sm"
		    placeholder="Enter your e-mail address here."
		    autoComplete="off" />
		  </div>
		  <div className="">
		  <hr />
		    <h6><span class="label label-default">Message</span></h6>
		    <textarea 
		    onChange={this.handleChange} rows="4"
		    name="message"
		    className="form-control input-sm" id="message" 
		    autoComplete="off" placeholder="Enter your message here."></textarea>
		  </div>

		<Popup trigger={<button 
   			 type="submit" 
			 form="form" 
			 className="btn btn-secondary btn-lg button" 
			 id="submit"
			 value="Submit"> Send! </button>}
    		modal closeOnDocumentClick
    		contentStyle ={contentStyle}>
    		<p style={showStyle}>Thank you for contacting me.<div><br /></div>
    		I will get back to you as soon as possible.<div><br /></div>
    		Have a great day.</p>
    		<p style={HiddenStyle}>Have you entered everything correctly?</p>
  			</Popup>
		</form>
		<hr />
		<button id="scroll-button" type="button" className="btn btn-outline-info" onClick={this.props.scrollToTop}>
		Scroll me back to the top!</button>

		</div>
		);
	}
	
}

export default Contact;