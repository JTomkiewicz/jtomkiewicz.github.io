import React, { useState, useEffect } from 'react';

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
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <a className="nav-link active" href="#id">
            Home
          </a>
          <a className="nav-link" href="#id2">
            About me
          </a>
          <a className="nav-link" href="#id3">
            My projects
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
