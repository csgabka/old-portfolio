import React, {Component} from 'react';
import '../css/Intro.css';
import Typist from 'react-typist';
import intro_bg from '../img/bg-1.jpg';

class Intro extends Component {

    	render() {
        return (
          <div className="intro">
          <img src={intro_bg} alt="csgabka-web-solutions"/>
          <Typist className="text" avgTypingDelay={100} 
          startDelay={1000} 
          onTypingDone={this.props.onIntroTyped}
          cursor={{ hideWhenDone: true }}>
          CSGabka - Web Soluyio
          <Typist.Backspace count={3} delay={500} />
          ri
          <Typist.Backspace count={2} delay={500} />
          tions
          <Typist />
          </Typist>
          </div>
        );
      }
}

export default Intro;