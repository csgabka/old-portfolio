import React, { Component } from 'react';
import Portfolio1 from '../img/port3_scrs.png';
import Portfolio2 from '../img/port1_scrs.png';
import Portfolio3 from '../img/port2_scrs.png';
import Portfolio4 from '../img/port4_scrs.png';
import '../css/Portfolio.css';


class Portfolio extends Component {

	constructor() {
		super();
		this.state = {
			portfolios: [
				{
					id: 1,
					image: Portfolio4,
					description: 'This project is a BLOG app, built in Vanilla JS, backend is provided by Google`s Firebase. It has an administration surface available for all users for testing. When adding new posts, it automatically generates the current time and attaches to each post. The design is dinamic, where the user can choose between day and night mode when clicking on the orb on the left hand side corder.',
					viewLink: 'https://csgabka-1539976293487.firebaseapp.com/',
					viewSource: 'https://github.com/csgabka/JS-and-Firebase-Blog-App-with-day-and-night-design',
				},
				{
					id: 2,
					image: Portfolio3,
					description: 'This IMAGE GALLERY app was built in React. States were used to create the modal effect and for the navigation as well. Also keyboard navigation is an added functionality.',
					viewLink: 'https://csgabka.github.io/React-Image-Gallery/',
					viewSource: 'https://github.com/csgabka/React-Image-Gallery'
				},
				{	
					id: 3, 
					image: Portfolio1, 
					description: 'Fetches a random JSON file and at state level orders, filters, adds, removes or edits data from it.',
					viewLink: 'https://csgabka.github.io/phonebook_interface/',
					viewSource: 'https://github.com/csgabka/phonebook_interface' 
				},
				{
					id: 4,
					image: Portfolio2,
					description: 'The project is my PERSONAL WEB APP. It was built in React. Apart from coding it from scratch, I have used different npm packages to learn how to use those when developing in React.',
					viewLink: 'https://csgabka.github.io/csgabka-portfolio/',
					viewSource: 'https://github.com/csgabka/csgabka-portfolio' 
				},
			]
		}
	}

	render() {
		const { portfolios } = this.state; 
		return (
			<div className="portfolio">
			<div className="portfolio_header">
			<h1>My Portfolio</h1>
			</div>
			<div className="image-gallery">
			<p className="technologies">Technologies used: HTML5, CSS3, Javascript, React.Js., Firebase</p>
				{portfolios.map((portfolio) => {
					return (
					<div>
					<a href={portfolio.viewLink}><img name={portfolio.image} className="single-image" src={portfolio.image} key={portfolio.image} alt={portfolio.image}/></a>
					<p className="portfolio-description">
					{portfolio.description}<br />
					<a className="source" href={portfolio.viewSource}>View source code</a></p>
					</div> )
				})}
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