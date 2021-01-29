import React from 'react';
import Row from './Row.js';
import Accordion from './Accordion.js';

export default function Article({address}) {
  return (
    <div className="column2">
      <Row type="dark" content="empty" name="row-in-col" innerText="&nbsp;" 
        style={address==="contacts.html" ? "width: 350px;" : null} 
      />
      <Row type="light" content="heading" 
        name={address==="index.html" ? "mission" : "backend"} 
        innerText={
          address==="index.html" ? (<>Mission &bull; Vision &bull; Purpose</>) :
          address==="portfolio.html" ? "Selected backend or full-stack projects" :
          address==="wisdom.html" ? "Welcome! Вітаю! Servus! Χαίρετε! Hallo!" :
          address==="mystory.html" ? "Who I Am" :
          address==="myinterests.html" ? "What I Obsess About" : "How to Reach Me"
        }
      />
      {address==="index.html" || address==="portfolio.html" ? 
      <>
      <Row type="dark" 
        content={address==="index.html" ? "text-in-box" : "backend"} 
        alignment={address==="index.html" ? "flex-column-center" : null} 
      />
      <Row type="light" 
        content="heading" name={address==="index.html" ? "showcase" : "frontend"}    
        innerText={address==="index.html" ? "Project Showcase" : "Selected backend or full-stack projects"} 
      />
      <Row 
        type="dark" 
        content={address==="index.html" ? "showcase" : "frontend"} 
        showcase={address==="index.html" ? "showcase-row" : null}
      />
      </> 
      : <Accordion address={address} />}
      
      {address==="index.html" && 
        <><Row type="light" content="heading" name="skills" innerText="My Skills" />
        <Row type="dark" content="text-in-box"/></>}

      {!(address==="mystory.html") && !(address==="contacts.html") ? 
        <Row type="light" content="empty" innerText="&nbsp;" /> : null}
    
    </div>
  );
}