import React, {Component} from 'react';
import '../css/Intro.css';
import Typist from 'react-typist';


class Intro extends Component {

    	render() {
        return (
          <div className="intro">
          <Typist className="text" avgTypingDelay={200} 
          startDelay={1500} 
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