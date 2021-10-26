import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Introduction from './Introduction/Introduction';
import MyProjects from './MyProjects/MyProjects';

const MainPage = () => {
  return (
    <main>
      <Introduction />
      <AboutMe />
      <MyProjects />
    </main>
  );
};

export default MainPage;
