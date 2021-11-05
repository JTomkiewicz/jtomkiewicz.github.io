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
    <header className={scroll ? 'sticky-top header-scroll' : null}>
      <div className="mb-auto">
        <h3 className="float-md-start mb-0">Jakub Tomkiewicz</h3>
        <Scrollspy
          items={['home', 'aboutme', 'myprojects']}
          currentClassName="active"
          componentTag={'nav'}
          className={'nav nav-masthead justify-content-center float-md-end'}
        >
          <a className="nav-link" href="#home">
            Home&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="currentColor"
              className="bi bi-house-door-fill"
              viewBox="0 0 16 19"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
            </svg>
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
