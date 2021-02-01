import React from 'react';
import Figure from './Figure.js';
import './portfolio-style.css';
import './link-style.css';

export default function Showcase({name}) {
  return (
    <>
    <div className="showcase">  
      <p>
        <a href={`#${name}`}>{name==="showcase1" ? "WrappIt app:" : "StockUp app:"} </a> 
        { name==="showcase1" ? 
          "Recently, I worked on a team of three to develop a full-stack gift-suggestions app. I designed and built a simple MySQL database (2 tables, one-to-many relation) using Sequelize.js library for Node.js server, integrating to save the data loaded from third-party APIs, as well as with Express-Handlebars.js library to render the saved data in HTML. In the future, the basic functionality of the app may be expanded to provide better and more customized results based on the person for whom the gift is intended."
        : "On another recent project, I applied aspects of UX and agile development, as I worked on a team of four to develop a single-page AJAX-API app to provide up-to-date financial information to beginner investors looking to enter the markets."
        }
      </p>
    </div> 
    <Figure name={name} />
    </>
  );
}