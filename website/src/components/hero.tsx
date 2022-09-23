import {
  ComponentProps,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import { Anchor } from '@theguild/components';
import animationData from './animation.json';

export const Hero = (): ReactElement => {
  const [animation, setAnimation] = useState<AnimationItem>();
  const [clicked, setClicked] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    container.current.classList.remove('opacity-0')
    // For some reason there is 2 svg elements, and first don't have animation
    // so I removed him and keep only 2nd svg with animation
    container.current.querySelector('svg')?.remove();
    const animationItem = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
        progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
        hideOnTransparent: true,
      },
    });
    setAnimation(animationItem);
  }, [container]);

  const playToClick = () => {
    if (!animation) return;
    animation.setDirection(1);
    animation.playSegments([0, 25]);
  };

  const playToStart = () => {
    if (!animation) return;
    if (clicked) {
      setClicked(false);
      animation.setDirection(1);
      animation.playSegments([85, 120]);
    } else {
      animation.setDirection(-1);
      animation.playSegments([25, 0]);
    }
  };

  const playFromClick: ComponentProps<'a'>['onClick'] = (e) => {
    if (animation && !clicked) {
      e.preventDefault();
      animation.setDirection(1);
      animation.playSegments([25, 85]);
      setClicked(true);
    }
  };

  return (
    <div
      className="-mx-72 lg:mx-0 max-h-[calc(100vh-var(--nextra-navbar-height)*2)] md:max-h-min relative opacity-0"
      ref={container}
    >
      <Anchor
        href="/docs"
        className={[
          'absolute translate-x-1/2 right-1/2 top-1/3',
          'animation-button z-[1] rounded-full bg-[#e535ab] hover:bg-[#37a9e2]',
          'border border-white text-white text-sm font-bold py-3.5 px-5 transition duration-500',
        ].join(' ')}
        onMouseEnter={playToClick}
        // @ts-ignore -- TODO: figure out why there is type error in @theguild/components <Anchor /> tag
        onMouseLeave={playToStart}
        onClick={playFromClick}
      >
        {clicked ? 'See how it works!' : 'Switch to REST'}
      </Anchor>
    </div>
  );
};
