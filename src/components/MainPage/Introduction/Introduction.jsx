import React from 'react';

import './Introduction.css';
import img from '../../../images/profilePicture.JPG';

const Introduction = () => {
  return (
    <section className="px-3" id="home">
      <div>
        <img id="profilePic" src={img} alt="goupOfPpl" />

        <div className="lead junior-developer">
          Junior <span style={{ color: '#61DBFB' }}>React</span> Developer
        </div>
      </div>
    </section>
  );
};

export default Introduction;
