import React, { useState, useEffect } from 'react';
import Transition from 'react-transition-group/Transition';
import cn from 'classnames';

import s from './quotes.styl';

const quotes = [
  'Full Stack Developer',
  'I write code for fun… and sometimes even for money…',
];
const timeout = 6e3;
let currentIndex = 0;
const getIndex = () => {
  currentIndex = currentIndex + 1 === quotes.length ? 0 : currentIndex + 1;
  return currentIndex;
};
const duration = 400;

const Quotes = ({ className = '' }) => {
  const [i, setQuote] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setQuote(getIndex());
    }, timeout);
    return () => clearInterval(timer);
  }, [setQuote]);
  return (
    <div className={cn(s['full-width'], className)} >
      <div className={s.what}>
        {quotes.map((q, index) => (
          <Transition
            in={index === i}
            key={index}
            timeout={duration}>
            {status => (
              <div
                className={cn(s.quote, s[`quote-${status}`])}
                key={index} >
                <h1>
                  {q}
                </h1>
              </div>
            )}
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default Quotes;