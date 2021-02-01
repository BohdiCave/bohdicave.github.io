import React from 'react';
import {useLocation} from 'react-router-dom';
import Row from './Row.js';
import AccordionFold from './AccordionFold.js';
import './grid-style.css';
import './accordion-style.css';

export default function Article() {
  const location=useLocation();
  const address=location.pathname;
  return (
    <article className="column2">
      {address==="/contacts" 
      ? 
      <Row type="dark" content="empty" name="row-in-col" innerText="&nbsp;" style={{width: 350 +'px'}} /> 
      :
      <Row type="dark" content="empty" name="row-in-col" innerText="&nbsp;" />
      }
      
      <Row type="light" content="heading" 
        name={address==="/" ? "mission" : "backend"} 
        innerText={
          address==="/" ? (<>Mission &bull; Vision &bull; Purpose</>) :
          address==="/portfolio" ? "Selected backend or full-stack projects" :
          address==="/wisdom" ? "Welcome! Вітаю! Servus! Χαίρετε! Hallo!" :
          address==="/story" ? "Who I Am" :
          address==="/interests" ? "What I Obsess About" : 
          address==="/contacts" && "How to Reach Me"
        }
      />
      {(address==="/" || address==="/portfolio") ? 
      (<>
      <Row type="dark" 
        content={address==="/" ? "text-in-box" : "backend"} 
        alignment={address==="/" && "flex-column-center"} 
      />
      <Row type="light" 
        content="heading" name={address==="/" ? "showcase" : "frontend"}    
        innerText={address==="/" ? "Project Showcase" : "Selected backend or full-stack projects"} 
      />
      <Row 
        type="dark" 
        content={address==="/" ? "showcase" : "frontend"} 
        showcase={address==="/" && "showcase-row"}
      />
      </>) 
      : <AccordionFold 
          id={
            address==="/wisdom" ? "wisdom" :
            address==="/story" ? "story" :
            address==="/interests" ? "interests" : 
            address==="/contacts" ? "contacts" : undefined
          }
        />}
      
      {address==="/" && 
        <><Row type="light" content="heading" name="skills" innerText="My Skills" />
        <Row type="dark" content="text-in-box"/></>}

        <Row type="light" content="empty" innerText="&nbsp;" />   
    </article>
  );
}