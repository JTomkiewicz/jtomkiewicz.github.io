import React from 'react';

const Project = ({ title, desc, imgName }) => {
  return (
    <article className="row">
      <div className="column-left">
        <h4 className="project-title">{title}</h4>

        {desc}
      </div>

      <img src={imgName} alt="ISO" className="column-right" />
    </article>
  );
};

export default Project;
