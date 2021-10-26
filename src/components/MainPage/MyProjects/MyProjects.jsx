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
    <section>
      <h1>My Projects</h1>

      {projectList}
    </section>
  );
};

export default MyProjects;
