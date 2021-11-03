import React from 'react';

import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="aboutme">
      <h1>About me</h1>
      <p>
        Ambitious 4th year Computer Science student that loves creating websites
        and wants to become a master at single-page applications.
      </p>

      <table style={{ margin: 'auto' }}>
        <tbody>
          <tr>
            <td style={{ textAlign: 'left' }}>HTML, CSS</td>
            <td style={{ textAlign: 'right' }}>
              &#11088;&nbsp;&#11088;&nbsp;&#11088;
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>JS</td>
            <td style={{ textAlign: 'right' }}>
              &#11088;&nbsp;&#11088;&nbsp;&#11088;
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>React</td>
            <td style={{ textAlign: 'right' }}>&#11088;&nbsp;&#11088;</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>jQuery</td>
            <td style={{ textAlign: 'right' }}>&#11088;&nbsp;&#11088;</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>SQL</td>
            <td style={{ textAlign: 'right' }}>
              &#11088;&nbsp;&#11088;&nbsp;&#11088;&nbsp;&#11088;
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>GIT</td>
            <td>&#11088;&nbsp;&#11088;&nbsp;&#11088;&nbsp;&#11088;</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default AboutMe;
