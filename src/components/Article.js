import React from 'react';
import {useLocation} from 'react-router-dom';
import Row from './Row.js';
import AccordionFold from './AccordionFold.js';
import './styles/grid-style.css';
import './styles/accordion-style.css';

export default function Article() {
  const location=useLocation();
  const address=location.pathname;
  return (
    <article className="column2">
      {(address==="/contacts" || address==="/contacts-ua") 
      ? 
      <Row type="dark" content="empty" name="row-in-col" innerText="&nbsp;" style={{width: 350 +'px'}} /> 
      :
      <Row type="dark" content="empty" name="row-in-col" innerText="&nbsp;" />
      }
      
      <Row type="light" content="heading" 
        name={(address==="/" || address==="/home-ua") ? "mission" : "backend"} 
        innerText={
          address==="/" ? (<>Mission &bull; Vision &bull; Purpose</>) :
          address==="/portfolio" ? "Selected backend or full-stack projects" :
          address==="/wisdom" ? "Welcome! Вітаю! Servus! Χαίρετε! Hallo!" :
          address==="/story" ? "Who I Am" :
          address==="/interests" ? "What I Obsess About" : 
          address==="/contacts" ? "How to Reach Me" :
          address==="/home-ua" ? (<>Місія &bull; Фокус &bull; Візія</>) :
          address==="/portfolio-ua" ? "Вибрані проєкти - комплексні / backend" : 
          address==="/wisdom-ua" ? "Welcome! Вітаю! Servus! Χαίρετε! Hallo!" :
          address==="/story-ua" ? "Хто я" :
          address==="/interests-ua" ? "Зацікавлення" : 
          address==="/contacts-ua" ? "Як зв'язатися" : undefined
        }
      />
      {(address==="/" || address==="/portfolio" || 
        address==="/home-ua" || address==="/portfolio-ua") ? 
      (<>
      <Row type="dark" 
        content={(address==="/" || address==="/home-ua") ? "text-in-box" : "backend"} 
        alignment={(address==="/" || address==="/home-ua") && "flex-column-center"} 
      />
      <Row type="light" 
        content="heading" name={(address==="/" || address==="/home-ua") ? "showcase" : "frontend"}    
        innerText={ address==="/" ? "Project Showcase" 
                  : address==="/home-ua" ? "Показові проєкти" 
                  : address==="/portfolio" ? "Selected frontend projects"
                  : address==="/portfolio-ua" ? "Вибрані проєкти - клієнт (frontend)" : "Error"} 
      />
      <Row 
        type="dark" 
        content={(address==="/" || address==="/home-ua") ? "showcase" : "frontend"} 
        showcase={(address==="/" || address==="/home-ua") && "showcase-row"}
      />
      </>) 
      : <AccordionFold 
          id={
            (address==="/wisdom" || address==="/wisdom-ua") ? "wisdom" :
            (address==="/story" || address==="/story-ua") ? "story" :
            (address==="/interests" || address==="/interests-ua") ? "interests" : 
            (address==="/contacts" || address==="/contacts-ua") ? "contacts" : undefined
          }
        />}
      
      {(address==="/" || address==="/home-ua") && 
        <><Row type="light" content="heading" name="skills" innerText={address==="/" ? "My Skills" : "Вміння"} />
        <Row type="dark" content="text-in-box"/></>}

        <Row type="light" content="empty" innerText="&nbsp;" />   
    </article>
  );
}