import React, { Component } from 'react';
import '../css/Nav.css';
import Logo from './Logo';
import { Link, BrowserRouter, Route, Switch} from "react-router-dom";
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import scrollToComponent from 'react-scroll-to-component';


class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "slider",
		};
	}

	onMenuClick = (event) => {
		if (this.state.id === "slider"){
			this.setState({id: "sliderOut"});
		}
		else (this.setState({id: "slider"}));
	}

	render () {
		const {MyStory} = this.props;
		return (
      	<nav id="navigation" className={this.props.navStatus}>
        <div className="links">
        <a to='#' onClick={this.onMenuClick}>Menu</a>
        <div id={this.state.id}>
        <a id="myStory" onClick={()=> {scrollToComponent(MyStory)}}>My Story</a>
        <a id="portfolio">Portfolio</a>
        <a id="contact">Contact</a>
        </div>
        </div>
      	</nav>
		);
		}
	}

		return React.forwardRef((props, ref) => {
			return <MyStory MyStory={ref} />;
		});


	
 

export default Nav;