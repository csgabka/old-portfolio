import React, { Component }  from 'react';
import '../css/Contact.css';
import Facebook from '../img/psx_20181024_223123.jpg';
import LinkedIn from '../img/psx_20181024_223143.jpg';
import GMail from '../img/psx_20181024_223422.jpg';
import WhatsApp from '../img/psx_20181024_223039.jpg';
import Logo from '../img/logo.jpg';



class Contact extends Component {
  render() {
    return (
    	<div className="contact">
    	<h1>Connect me on social media</h1>	
    	<div className="container">
			  <div className="soc_med"><a href="https://www.facebook.com/csgab"><img id="facebook" className="mx-auto" src={Facebook} alt="front"/></a></div>
			  <div className="soc_med"><a href="www.linkedin.com/in/csgabka"><img id="linkedin" className="mx-auto" src={LinkedIn} alt="right"/></a></div>
			  <div className="soc_med"><a href="mailto:csgabkawebdev.gmail.com"><img id="gmail" className="mx-auto" src={GMail} alt="back"/></a></div>

		</div>
		<img id="logo" src={Logo} alt="logo"/><br />
		<br />
		<hr />
		<button id="scroll-button" type="button" className="btn btn-outline-info" onClick={this.props.scrollToTop}>
		Scroll me back to the top!</button>

		</div>
    	);

  }
}

export default Contact;