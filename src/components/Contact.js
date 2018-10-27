import React, { Component }  from 'react';
import '../css/Contact.css';
import Facebook from '../img/psx_20181024_223123.jpg';
import LinkedIn from '../img/psx_20181024_223143.jpg';
import GMail from '../img/psx_20181024_223422.jpg';
import WhatsApp from '../img/psx_20181024_223039.jpg';



class Contact extends Component {
  render() {
    return (
    	<div className="contact">
    	<h1>Connect me on social media</h1>	
    	<div className="container">
			  <div class="soc_med"><a href="https://www.facebook.com/csgab"><img id="facebook" class="mx-auto" src={Facebook} alt="front"/></a></div>
			  <div class="soc_med"><a href="www.linkedin.com/in/csgabka"><img id="linkedin" class="mx-auto" src={LinkedIn} alt="right"/></a></div>
			  <div class="soc_med"><a href="mailto:csgabkawebdev.gmail.com"><img id="gmail" class="mx-auto" src={GMail} alt="back"/></a></div>
			  <div class="soc_med"><a href="facebook.co.uk"><img id="whatsapp" class="mx-auto" src={WhatsApp} alt="left"/></a></div>

		</div>
		<br />
		<hr />
		<button id="scroll-button" type="button" className="btn btn-outline-info" onClick={this.props.scrollToTop}>
		Scroll me back to the top!</button>

		</div>
    	);

  }
}

export default Contact;