import React from 'react';
import Project from './SingleProject/SingleProject';

import './MyProjects.css';

import img from '../../../images/avatarPicture.png';

const projectInfo = [
  {
    id: 1,
    title: 'Project #1',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    imgName: img,
  },
  {
    id: 2,
    title: 'Project #2',
    desc: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book',
    imgName: img,
  },
];

const MyProjects = () => {
  const projectList = projectInfo.map((project) => (
    <Project key={project.id} {...project} />
  ));

  return (
    <section id="myprojects">
      <h1>
        My Projects&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-window"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
          <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z" />
        </svg>
      </h1>

      {projectList}
    </section>
  );
};

export default MyProjects;
