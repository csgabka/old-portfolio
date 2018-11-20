import React, { Component } from 'react';
import Portfolio1 from '../img/port3_scrs.png';
import Portfolio2 from '../img/port1_scrs.png';
import Portfolio3 from '../img/port2_scrs.png';
import '../css/Portfolio.css';


class Portfolio extends Component {

	constructor() {
		super();
		this.state = {
			images: [Portfolio1, Portfolio2, Portfolio3],
		}
	}


	render() {
		const { images } = this.state; 
		return (
			<div className="portfolio">
			<div className="portfolio_header">
			<h1>My Portfolio</h1>
			<p className="technologies">Technologies used: HTML5, CSS3, Javascript, React.Js.</p>
			<div className="image-gallery">
				{images.map((image, index) => {
					return <img name={image} className="single-image" src={image} key={image} alt={image}/>
				})}
			</div>
			</div>
			<div className="portfolio_footer">
			<p className="portfolio-description"><a href="https://csgabka.github.io/phonebook_interface/">Click here to view</a><br />Fetches a random JSON file and at state level orders, filters, adds, removes or edits data from it.<br /><a className="source" href="https://github.com/csgabka/phonebook_interface">View source code</a></p>
			<p className="portfolio-description"><a href="https://csgabka.github.io/csgabka-portfolio/">Click here to view</a><br />The project is my personal web app. Apart from coding it from scratch, I have used different npm packages to practice how to plug in those into my React app.<br /><a className="source" href="https://github.com/csgabka/csgabka-portfolio">View source code</a></p>
			<p className="portfolio-description"><a href="https://csgabka.github.io/React-Image-Gallery/">Click here to view</a><br />States are used to create the modal effect and navigate. When choosing an image, it focuses on it straight, without having to click on it first to enable navigation with the keyboard.<br /><a className="source" href="https://github.com/csgabka/React-Image-Gallery">View source code</a></p>
			<hr />
			<button id="scroll-button" type="button" className="btn btn-outline-info" onClick={this.props.scrollToTop}>
		Scroll me back to the top!</button>
			</div>
			</div>
		);
	}
	
}

export default Portfolio;