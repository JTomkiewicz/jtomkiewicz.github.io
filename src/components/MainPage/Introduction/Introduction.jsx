import React from 'react';

import './Introduction.css';
import img from '../../../images/avatarPicture.png';

const Introduction = () => {
  return (
    <section className="px-3">
      <img src={img} alt="goupOfPpl" />

      <p className="lead">
        Junior <span style={{ color: '#61DBFB' }}>React</span> Developer
      </p>
    </section>
  );
};

export default Introduction;
