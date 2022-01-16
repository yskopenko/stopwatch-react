import React from 'react';
import PropTypes from 'prop-types';
import setTimeFormat from '../formats/timeFormats';

export const Guids = ({
  time,
  start,
  stop,
  reset,
  wait,
}) => (
  <>
    <header className="header">
      <h1 className="stopwatch headline">
        StopWatch
      </h1>
      <h1 className="stopwatch indicator">
        {setTimeFormat(time)}
      </h1>
    </header>
    <section className="main">
      <div className="container">
        <button type="button" className="button is-click" onClick={start}>
          Start
        </button>
        <button type="button" className="button is-click" onClick={stop}>
          Stop
        </button>
        <button type="button" className="button is-click" onClick={reset}>
          Reset
        </button>
        <button type="button" className="button is-click" onClick={wait}>
          Wait
        </button>
      </div>
    </section>
  </>
);

Guids.propTypes = {
  time: PropTypes.number.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  wait: PropTypes.func.isRequired,
};