import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <header className="mb-auto">
      <div>
        <h3 className="float-md-start mb-0">My portfolio</h3>
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
