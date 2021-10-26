import React from 'react';

import './Introduction.css';

const Introduction = () => {
  return (
    <section className="px-3">
      <h1>Junior frontend developer</h1>

      <p className="lead">Im the beginner</p>

      <p className="lead">
        <a
          href="da"
          className="btn btn-lg btn-secondary fw-bold border-white bg-white"
        >
          Learn more
        </a>
      </p>
    </section>
  );
};

export default Introduction;
