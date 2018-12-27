import React, { Component } from 'react';
import '../css/MyStory.css';
import Profile from '../img/17311080_10211117562268372_3587118879478260351_o.jpg';

class MyStory extends Component  {

	render () {
		
		return (
		<div className="story_box" >
		<h1>Hello and welcome...</h1>
		<div className="story">
			<p>My name is Gabi and I am an Entry Level Web Developer. I have created this website as a portfolio work. I have been living in London since 2010, but I was born in Hungary, this is where I graduated as a Computer Engineer(BSc).</p>
			<img id="profile_pic" src={Profile} alt="profile_pic" />
			<p>- Hungary is the home of many great scientists such as János Neumann (John von), who invented and developed the first working Digital Computing System. -</p>
			<p> As a new Graduate, I was specialized in Web and Network technologies. Since then I have not worked in IT, instead - for several reasons - I have chosen Retail Management as a new, exciting and beneficial career field for 8 years. In 2018, I have made a decision - to choose a career which has always been at the back of my mind, so I started studying online. While I was working full time as a Retail Manager I spent most of my time studying, coding, learning from different sources, mainly from Youtube, Udemy and freeCodeCamp. </p>
			<p>Web development has become my new life's essence. I find it fascinating when you learn to solve a problem and that makes you learn something else connecting to a different issue. The complexity of creating Web Applications unleashes my creativity, there are no limits.</p>
			<p>I have done my projects using HTML5, CSS3, Javascript (ES6), React.JS and Firebase so far.</p>
			<p>Apart from this music makes my days even more colorful. I like to sing, also I play the guitar and listen mostly blues and hard rock. I love going to concerts as many as I can. Thank you for visiting my page. If you would like to reach me, please do not hesitate to contact me.</p>
		</div>
		<hr />
		<button id="scroll-button" type="button" className="btn btn-outline-info" onClick={this.props.scrollToTop}>
		Scroll me back to the top!</button>
		</div>);
		}
}

export default MyStory;
