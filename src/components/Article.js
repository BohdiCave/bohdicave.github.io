import React from 'react';
import {useLocation} from 'react-router-dom';
import Row from './Row.js';
import Accordion from './Accordion.js';

export default function Article() {
  const location=useLocation();
  const address=location.pathname;
  return (
    <div className="column2">
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
      {(address==="index.html" || address==="portfolio.html") ? 
      <>
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
      </> 
      : <Accordion />}
      
      {address==="/" && 
        <><Row type="light" content="heading" name="skills" innerText="My Skills" />
        <Row type="dark" content="text-in-box"/></>}

      {!(address==="/story") && !(address==="/contacts") && 
        <Row type="light" content="empty" innerText="&nbsp;" />}
    
    </div>
  );
}