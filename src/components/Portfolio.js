import React, { Component } from 'react';
import Portfolio1 from '../img/port1_scrs.png';
import Portfolio2 from '../img/port2_scrs.png';
import '../css/Portfolio.css';
import {Carousel} from '3d-react-carousal';


class Portfolio extends Component {

	render() {
		let slides = [
	     	<img  src={Portfolio1} alt="1" />,
	    	<img  src={Portfolio2} alt="2" />,
	    	<img  src={Portfolio2} alt="3" />
	    	];
		return (
			<div className="portfolio">
			<div className="portfolio_header">
			<h1>My Portfolio</h1>
			<p>On this page you will a collection of my works.</p>
			<Carousel slides={slides}/>
			</div>
			<div className="portfolio_footer">
			<hr />
			<button id="scroll-button" type="button" className="btn btn-outline-info" onClick={this.props.scrollToTop}>
		Scroll me back to the top!</button>
			</div>
			</div>
		);
	}
	
}

export default Portfolio;