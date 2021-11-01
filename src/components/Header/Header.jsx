import React, { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy';

import './Header.css';

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 40);
    });
  }, []);

  return (
    <header className={scroll ? 'bg-dark sticky-top header-scroll' : null}>
      <div className="mb-auto">
        <h3 className="float-md-start mb-0">Jakub Tomkiewicz</h3>
        <Scrollspy
          items={['home', 'aboutme', 'myprojects']}
          currentClassName="active"
          componentTag={'nav'}
          className={'nav nav-masthead justify-content-center float-md-end'}
        >
          <a className="nav-link" href="#home">
            Home
          </a>
          <a className="nav-link" href="#aboutme">
            About me
          </a>
          <a className="nav-link" href="#myprojects">
            My projects
          </a>
        </Scrollspy>
      </div>
    </header>
  );
};

export default Header;
