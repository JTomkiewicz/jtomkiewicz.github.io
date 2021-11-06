import React from 'react';

import './Introduction.css';
import img from '../../../images/profilePicture.JPG';

const Introduction = () => {
  return (
    <section className="px-3" id="home">
      <img id="profilePic" src={img} alt="goupOfPpl" />

      <div style={{ margin: 'auto' }}>
        <div className="lead junior-developer">
          Junior <span style={{ color: '#61DBFB' }}>React</span> Developer
        </div>
      </div>
    </section>
  );
};

export default Introduction;
