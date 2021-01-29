import React from 'react';

export default function Project(props) {
  return(  
    <figure className={props.content==="backend" ? "project-column" : null}>
      {props.content==="frontend" && 
        <a href={props.url}>
          <img className="project" src={props.imgSrc} alt={props.altdesc} />
          <figcaption>{props.title}</figcaption>
        </a>  
      }
      {props.content==="backend" &&
        <img className="project" src={props.imgSrc} alt={props.altdesc} />
        <figcaption>{props.title}</figcaption>
        <div className="project-links">
          <a href={props.url1}> {props.heroku ? "Heroku" : "Screencast Demo"} </a> | 
          <a href={props.url2}> Github </a>
        </div>
      }
    </figure>
  );
}

    