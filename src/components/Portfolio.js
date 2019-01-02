import React, { Component } from 'react';

//import Portfolio1 from '../img/port5.jpg';
//import Portfolio2 from '../img/port4.jpg';
import Portfolio3 from '../img/port2.jpg';
//import Portfolio4 from '../img/port3.jpg';
import Portfolio5 from '../img/port1.jpg';
import Portfolio6 from '../img/port6.jpg';
import Portfolio7 from '../img/port7.jpg';
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
					image: Portfolio6,
					description: 'CALCULATOR App. Built in ReactJs. I have used Math.js to evalute the calculations. Created a component which monitors the size of the display div. Every time it gets bigger than the parent div`s container it scales it down so the content on the display shrinks every time the content exceeds the available space.',
					viewLink: 'https://csgabka.github.io/React-calculator/',
					viewSource: 'https://github.com/csgabka/React-calculator' 
				},
				{
					id: 2,
					image: Portfolio7,
					description: 'QUOTE MACHINE App. Built in ReactJs. With FETCH API it fetches an URL with random quotes. When the response is received, the data gets stored in the component`s state and this gets displayed. With the additional twitter button the user can tweet quotes as well.',
					viewLink: 'https://csgabka.github.io/quote-machine/',
					viewSource: 'https://github.com/csgabka/quote-machine',
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
			<p className="technologies">Technologies used: HTML5, CSS3, Javascript, React.Js.</p>
			<p>In this section you will find a collection of my projects. If you like what you see, please check out my<a href="https://github.com/csgabka?tab=repositories" className="github">Github</a>profile as well.</p>
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