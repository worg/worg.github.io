import React, { useEffect } from 'react';
import cssTx from '../utils/csstx';

import s from './dynamic.styl';

const effect = (e) => {
  const {
    screenY,
    screenX,
    gamma,
    beta,
    type,
  } = e;
  const target = document.getElementById(s.background);
  let x = 0;
  let y = 0;

  if (type === 'mousemove') {
    [x, y] = [screenX, screenY];
  } else {
    const inc = 30;
    [x, y] = [gamma * inc, beta * inc];
  }

  x = Math.round(x / 70);
  y = Math.round(y / 70);

  const transform = `translate3d(${x}px,${y}px,0) scale3d(1.1,1.1,1)`;
  cssTx(target, transform);
};

const Background = () => {
  useEffect(() => {
    if (window.innerWidth < 1025) {
      window.addEventListener('deviceorientation', effect, { passive: true });
    } else {
      window.addEventListener('mousemove', effect, { passive: true });
    }
    return () => {
      window.removeEventListener('mousemove', effect);
      window.removeEventListener('deviceorientation', effect);
    };
  }, []);
  return (
    <div className={s.container}>
      <div
        id={s.background}
        onMouseMove={effect}
        className={s.background}></div>
    </div>
  );
};

export default Background;