import React, { Component }  from 'react';
import Cube from 'react-3d-cube';
import FrontSide from '../img/psx_20181024_223039.jpg';
import BackSide from '../img/psx_20181024_223123.jpg';
import LeftSide from '../img/psx_20181024_223143.jpg';
import RightSide from '../img/psx_20181024_223422.jpg';
import Profile from '../img/17311080_10211117562268372_3587118879478260351_o.jpg';



class Contact extends Component {
  render() {
    return (
    	<div className="contact">
    	<h1>Connect me on social media</h1>	
    	<div >

			
			        <div className="cube_area"
			          style={{
			            width: 300,
			            height: 300
			          }}
			        >
			          <Cube size={80} index="front">
			            <div><img src={FrontSide} alt="front"/></div>
			            <div><img src={RightSide} alt="right"/></div>
			            <div><img src={BackSide} alt="back"/></div>
			            <div><img src={LeftSide} alt="left"/></div>
			            <div><img src={FrontSide} alt="top"/></div>
			            <div><img src={RightSide} alt="bottom"/></div>
			          </Cube>
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