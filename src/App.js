import React, { Component } from 'react';
import Intro from './components/Intro';
import MyStory from './components/MyStory';
import Portfolio from './components/Portfolio';
import Repositories from './components/Repositories';
import Contact from './components/Contact';
import './App.css';
import { animateScroll as scroll } from 'react-scroll';
import scrollToComponent from 'react-scroll-to-component';


class App extends Component {

  constructor(props){
     super(props);
     this.state = {
       navStatus: 'back',
       id: "slider",
       isLoading: true,
       rotating: 'accepted',
       repositories: [],
       timestamp: ""
     };
     this.onIntroTyped = this.onIntroTyped.bind(this);
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
    fetch('https://api.github.com/users/csgabka/repos')
     .then(response => response.json())
     .then(data => data.filter(data => {
      return data.fork === false}))
    .then(data => this.setState({repositories: data}));
    this.setState({timestamp: Date()});
}

cancelRotation = (event) => {
  this.setState({rotating: 'cancelled'});
} 
    
  render() {
      return (
          <div>
            <div id="app" className="App">
          <div>
          <nav id="navigation" className={ `sticky-top ${this.state.navStatus}`} >
            <div className="links">
              <button id="open-menu" onClick={this.onMenuClick} className="btn btn-outline-light btn-xs btn-responsive">Menu</button>
                  <div id={this.state.id}>
                  <a href="#" id="myStory" onClick={()=> {scrollToComponent(this.MyStory,{ offset: 0, align: 'top', duration: 1000})}}>My Story</a>
                  <a href="#" id="portfolio" onClick={()=> {scrollToComponent(this.Portfolio,{ offset: 0, align: 'top', duration: 1000})}}>Portfolio</a>
                  <a href="#" id="contact" onClick={()=> {scrollToComponent(this.Contact,{ offset: 0, align: 'top', duration: 1000})}}>Contact</a>
                  </div>
             </div>
          </nav>
          <Intro onIntroTyped={this.onIntroTyped} />
          <MyStory scrollToTop={this.scrollToTop} ref={(MyStory) => { this.MyStory = MyStory; }}/>
          <Portfolio scrollToTop={this.scrollToTop} ref={(Portfolio) => { this.Portfolio = Portfolio; }}/>
          <Repositories repositories={this.state.repositories} timestamp={this.state.timestamp}/>
          <Contact scrollToTop={this.scrollToTop} ref={(Contact) => { this.Contact = Contact; }}/>
        </div>
    </div>
    </div>
    );
}
}

export default App;
