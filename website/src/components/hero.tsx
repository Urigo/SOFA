import { ComponentProps, ReactElement, useEffect, useRef, useState } from 'react'
import lottie, { AnimationItem } from 'lottie-web'
import { Anchor } from '@theguild/components'
import animationData from './animation.json'

export const Hero = (): ReactElement => {
  const [animation, setAnimation] = useState<AnimationItem>(null as any)
  const [clicked, setClicked] = useState(false)
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!container.current) return
    const animationItem = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData,
      rendererSettings: {
        className: 'even:hidden',
        preserveAspectRatio: 'xMidYMid meet',
        progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
        hideOnTransparent: true,
      },
    })
    setAnimation(animationItem)
  }, [container])

  const playToClick = () => {
    animation.setDirection(1)
    animation.playSegments([0, 25])
  }

  const playToStart = () => {
    if (clicked) {
      setClicked(false)
      animation.setDirection(1)
      animation.playSegments([85, 120])
    } else {
      animation.setDirection(-1)
      animation.playSegments([25, 0])
    }
  }

  const playFromClick: ComponentProps<'a'>['onClick'] = (e) => {
    if (!clicked) {
      e.preventDefault()
      animation.setDirection(1)
      animation.playSegments([25, 85])
      setClicked(true)
    }
  }

  return (
    <div className="animation-container relative">
      <div id="animation" ref={container}>
        <div className="animation-button-container">
          <Anchor
            href="/docs"
            className={clicked
              ? 'animation-button graphql'
              : 'animation-button'}
            onMouseEnter={playToClick}
            // @ts-ignore -- TODO: figure out why there is type error in @theguild/components <Anchor /> tag
            onMouseLeave={playToStart}
            onClick={playFromClick}
          >
            {clicked ? 'See how it works!' : 'Switch to REST'}
          </Anchor>
        </div>
      </div>
    </div>
  )
}
