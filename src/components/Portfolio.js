import React, { Component } from 'react';
import Portfolio1 from '../img/port5.jpg';
import Portfolio2 from '../img/port4.jpg';
import Portfolio3 from '../img/port2.jpg';
import Portfolio4 from '../img/port3.jpg';
import Portfolio5 from '../img/port1.jpg';
import Html5Logo from '../img/html5-logo.png';
import Css3Logo from '../img/css3-logo.png';
import JavascriptLogo from '../img/js-logo.png';
import '../css/Portfolio.css';


class Portfolio extends Component {

	constructor() {
		super();
		this.state = {
			position: false,
			portfolios: [
				{
					id: 1,
					image: Portfolio1,
					description: 'MUSIC INSTRUMENT APP. Built in: Javascript, HTML5, CSS3. The controllers were positioned with CSS flexbox. Each time a sound gets played, an audio element gets added to the DOM and once it has been played, it gets removed from the DOM. Controlling with keyboard, mouse click or tap. Hover effect and double tap has been disabled on touch devices to provide better user experience.',
					viewLink: 'https://csgabka.github.io/Let-s-Play-Rock/',
					viewSource: 'https://github.com/csgabka/Let-s-Play-Rock' 
				},
				{
					id: 2,
					image: Portfolio2,
					description: 'This project is a BLOG app, built in Vanilla JS, backend is provided by Google`s Firebase. It has an administration surface available for all users for testing. When adding new posts, it automatically generates the current time and attaches to each post. The design is dinamic, where the user can choose between day and night mode when clicking on the orb on the left hand side corder.',
					viewLink: 'https://csgabka-1539976293487.firebaseapp.com/',
					viewSource: 'https://github.com/csgabka/JS-and-Firebase-Blog-App-with-day-and-night-design',
				},
				{
					id: 3,
					image: Portfolio3,
					description: 'IMAGE GALLERY app was built in React. States were used to create the modal effect and for the navigation as well. Also keyboard navigation is an added functionality.',
					viewLink: 'https://csgabka.github.io/React-Image-Gallery/',
					viewSource: 'https://github.com/csgabka/React-Image-Gallery'
				},
				{	
					id: 4, 
					image: Portfolio4, 
					description: 'PHONEBOOK APP. Fetches a random JSON file and at state level orders, filters, adds, removes or edits data from it.',
					viewLink: 'https://csgabka.github.io/phonebook_interface/',
					viewSource: 'https://github.com/csgabka/phonebook_interface' 
				},
				{
					id: 5,
					image: Portfolio5,
					description: 'The project is my PERSONAL portfolio website. Built in React.',
					viewLink: 'https://csgabka.github.io/csgabka-portfolio/',
					viewSource: 'https://github.com/csgabka/csgabka-portfolio' 
				},
			]
		}
	}

	componentDidMount() {
 		 document.addEventListener('scroll', this.trackScrolling);
	}

	componentWillUnmount() {
  		document.removeEventListener('scroll', this.trackScrolling);
	}

	isBottom(el) {
  		return el.getBoundingClientRect().bottom <= window.innerHeight;
	}

	trackScrolling = () => {
	  const skills = document.getElementById('skills');
	  if (this.isBottom(skills)) {
	    this.setState({position: true});
	    document.removeEventListener('scroll', this.trackScrolling);
	  }
	};

	render() {
		const { portfolios, position } = this.state; 
			return (
			<div className="portfolio">
			<div className="portfolio_header">
				<h1>My Portfolio</h1>
				<h3 id="skills">Top skills</h3>
				{ position ? (
					<div>
					<div className="skills">
						<div className="animated flipInY delay-1s html">
							<img id="html5Logo" src={Html5Logo} alt="html5" />
							<div className="battery first-charge"></div>
						</div>
						<div className="animated flipInY delay-2s css">
							<img id="css3Logo" src={Css3Logo} alt="css3" />
							<div className="battery second-charge"></div>
						</div>
						<div className="animated flipInY delay-3s js">
							<img id="jsLogo" src={JavascriptLogo} alt="js" />
							<div className="battery third-charge"></div>
						</div>
					</div>
					</div>
				) : null }
			</div>
			<div className="image-gallery">
			<p className="technologies">Technologies used: HTML5, CSS3, Javascript, React.Js., Firebase</p>
				{portfolios.map((portfolio) => {
					return (
					<div key={portfolio.id}>
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