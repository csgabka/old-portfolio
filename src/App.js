import React, { Component } from 'react';
import Intro from './components/Intro';
import MyStory from './components/MyStory';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
//import Cube from './components/Cube';
import './App.css';
import { animateScroll as scroll } from 'react-scroll';
import scrollToComponent from 'react-scroll-to-component';
//import firebase from './firebase.js';

class App extends Component {

  constructor(props){
     super(props);
     this.state = {
       navStatus: 'back',
       id: "slider",
       isLoading: true
     };
     this.onIntroTyped=this.onIntroTyped.bind(this);
     this.scrollToTop = this.scrollToTop.bind(this);
   }

   onMenuClick = (event) => {
    if (this.state.id === "slider"){
      this.setState({id: "sliderOut"});
    }
    else (this.setState({id: "slider"}));
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  onIntroTyped(){
    this.setState({ navStatus: 'front'});
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 3500);
  }


  
  render() {
    const isLoading = this.state.isLoading;
    if(isLoading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }
    return (
      <div id="app" className="App">
        <div>
          <nav id="navigation" className={this.state.navStatus}>
            <div className="links">
              <a onClick={this.onMenuClick}>Menu</a>
                  <div id={this.state.id}>
                  <a id="myStory" onClick={()=> {scrollToComponent(this.MyStory,{ offset: 0, align: 'top', duration: 1000})}}>My Story</a>
                  <a id="portfolio" onClick={()=> {scrollToComponent(this.Portfolio,{ offset: 0, align: 'top', duration: 1000})}}>Portfolio</a>
                  <a id="contact" onClick={()=> {scrollToComponent(this.Contact,{ offset: 0, align: 'top', duration: 1000})}}>Contact</a>
                  </div>
             </div>
          </nav>
          <Intro onIntroTyped={this.onIntroTyped} />
          <MyStory scrollToTop={this.scrollToTop} ref={(MyStory) => { this.MyStory = MyStory; }}/>
          <Portfolio scrollToTop={this.scrollToTop} ref={(Portfolio) => { this.Portfolio = Portfolio; }}/>
          <Contact scrollToTop={this.scrollToTop} ref={(Contact) => { this.Contact = Contact; }}/>
        </div>
     )}
    </div>
    );
}
}

export default App;
