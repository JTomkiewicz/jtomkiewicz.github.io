import React from 'react';

const Project = ({ title, desc, imgName }) => {
  return (
    <article className="row">
      <p className="column-left">
        <h4 className="project-title">{title}</h4>

        {desc}
      </p>

      <img src={imgName} alt="ISO" className="column-right" />
    </article>
  );
};

export default Project;
