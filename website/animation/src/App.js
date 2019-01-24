import React, { Component } from 'react';
import lottie from 'lottie-web';
import animationData from './animation.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animation: null,
      clicked: false,
    };
  }

  componentDidMount() {
    const animation = lottie.loadAnimation({
      container: document.querySelector('#animation'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
      },
    });

    this.setState({
      animation,
    });
  }

  playToClick() {
    this.state.animation.setDirection(1);
    this.state.animation.playSegments([0, 25]);
  }

  playToStart() {
    if (this.state.clicked) {
      this.setState({
        clicked: false,
      });
      this.state.animation.setDirection(1);
      this.state.animation.playSegments([85, 120]);
    } else {
      this.state.animation.setDirection(-1);
      this.state.animation.playSegments([25, 0]);
    }
  }

  playFromClick() {
    if (this.state.clicked) {
      return;
    }

    this.state.animation.setDirection(1);
    this.state.animation.playSegments([25, 85]);
    this.setState({
      clicked: true,
    });
  }

  render() {
    return (
      <div
        id="animation"
        onMouseEnter={() => {
          this.playToClick();
        }}
        onMouseLeave={() => {
          this.playToStart();
        }}
        onClick={e => {
          e.preventDefault();
          this.playFromClick();
        }}
      />
    );
  }
}

export default App;
