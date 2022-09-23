import React, { Component, createRef } from 'react'
import lottie from 'lottie-web'
import animationData from './animation.json'
import { Anchor } from '@theguild/components'

export class Hero extends Component {
  constructor(props) {
    super(props)

    this.state = {
      animation: null,
      clicked: false,
    }
    this.container = createRef()
  }

  componentDidMount() {
    const animation = lottie.loadAnimation({
      wrapper: this.container.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData,
      rendererSettings: {
        className: 'even:hidden',
        preserveAspectRatio: 'xMidYMid meet',
        clearCanvas: false,
        progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
        hideOnTransparent: true,
      },
    })

    this.setState({ animation })
  }

  playToClick() {
    this.state.animation.setDirection(1)
    this.state.animation.playSegments([0, 25])
  }

  playToStart() {
    if (this.state.clicked) {
      this.setState({
        clicked: false,
      })
      this.state.animation.setDirection(1)
      this.state.animation.playSegments([85, 120])
    } else {
      this.state.animation.setDirection(-1)
      this.state.animation.playSegments([25, 0])
    }
  }

  playFromClick() {
    if (this.state.clicked) {
      return
    }

    this.state.animation.setDirection(1)
    this.state.animation.playSegments([25, 85])
    this.setState({
      clicked: true,
    })
  }

  render() {
    return (
      <div className="animation-container relative">
        <div id="animation" ref={this.container}>
          <div className="animation-button-container">
            <a
              href="/docs"
              className={this.state.clicked
                ? 'animation-button graphql'
                : 'animation-button'}
              onMouseEnter={() => {
                this.playToClick()
              }}
              onMouseLeave={() => {
                this.playToStart()
              }}
              onClick={(e) => {
                if (!this.state.clicked) {
                  e.preventDefault()
                  this.playFromClick()
                }
              }}
            >
              {this.state.clicked ? 'See how it works!' : 'Switch to REST'}
            </a>
          </div>
        </div>
      </div>
    )
  }
}
