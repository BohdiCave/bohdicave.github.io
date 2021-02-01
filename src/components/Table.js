import React from 'react';
import './tab-style.css';

export default function Table({type}) {
  return (
    <>
    {type==="skills" ?
      (
      <table>
        <tbody>
        <tr>
          <th>Frontend:</th>
          <td className="first" >HTML5, CSS3, CSS frameworks (Bootstrap, Milligram.io, UI Kit), CSS flexbox, Javascript/JSON, jQuery-AJAX, web/third-party APIs</td>
        </tr>
        <tr>
          <th>Backend:</th>
          <td>MERN stack (MongoDB, Express.js, Node.js/npm, Express-Handlebars, Sequelize.js), XAMPP stack (PHP, MySQL), Heroku/JawsDB, WordPress</td>
        </tr>
        <tr>
          <th>Learning:</th>
          <td>React.js, XAMPP stack (Apache, MariaDB, PHP-8, Perl, Laravel)</td>
        </tr>
        <tr className="last">
          <th>Intend to explore:</th>
          <td className="last">Python, Java, С/C++, C#, mobile development (Swift/Flutter/React Native, etc.), data science and visualization (GIS, D3.js, Chart.js, others), cybersecurity, and ...</td>
        </tr>
        </tbody>
      </table>
      )
    : type==="mission" &&
      (
      <table>
      <tbody>
        <tr>
          <th>Mission:</th>
          <td className="first">To provide software development expertise to individuals and organizations, especially and primarily in the following spheres of interest: environmental protection, arts, and education.</td>
        </tr>
        <tr>
          <th>Vision:</th>
          <td>A web developer with a background in social science and a passion for arts and humanities, aiming to create an aesthetically pleasing, socially meaningful, and functionally accessible user experience on the web. I tend to focus on fully responsive, mobile-first, and accessible design and development.</td>
        </tr>
        <tr className="last">
          <th>Purpose:</th>
          <td>Always passionate about quality, I am known to pay attention to detail without losing focus of the overall concept. Currently, I am earning a certificate in full-stack development (with the focus on MERN stack) from University of Pennsylvania.</td>
        </tr>
        </tbody>
      </table>
      )
    }
    </> 
  );
}