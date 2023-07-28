'use client';

import { useRef, useEffect } from 'react';

// @ts-ignore
import Typed from 'typed.js';

const TypedAnimation = ({ strings }: { strings: string[] }) => {
  // Create reference to store the DOM element containing the animation
  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      backDelay: 2400,
      loop: true,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [strings]);

  return <span ref={element} />;
};

export default TypedAnimation;
