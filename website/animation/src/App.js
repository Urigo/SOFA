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
    const btnClassName = this.state.clicked
      ? 'animation-button graphql'
      : 'animation-button';

    return (
      <React.Fragment>
        <div id="animation">
          <div className="animation-button-container">
            <a
              href="/docs"
              id="button"
              className={btnClassName}
              onMouseEnter={() => {
                this.playToClick();
              }}
              onMouseLeave={() => {
                this.playToStart();
              }}
              onClick={e => {
                if (!this.state.clicked) {
                  e.preventDefault();
                  this.playFromClick();
                }
              }}
            >
              {this.state.clicked ? 'See how it works!' : 'Switch to REST'}
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
