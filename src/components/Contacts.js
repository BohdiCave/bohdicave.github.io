import React from 'react';
import {useLocation} from 'react-router-dom';

export default function Contacts() {
    const location = useLocation();
    const address = location.pathname;
    return(
      <div id="contact-info">
        <a href="/assets/Resume-Bohdan-Pechenyak.pdf" id="resume">
          {(address==="/home-ua" || address==="/portfolio-ua" || address==="/wisdom-ua" 
          || address==="/story-ua" || address==="/interests-ua" || address==="/contacts-ua") 
          ? "Резюме" : "Resume"}
        </a> 
        <br></br>
        <br></br>
        <a href="https://linkedin.com/in/pechenyak/" id="linkedin-profile">LinkedIn &bull;</a> 
        <a href="https://github.com/BohdiCave/" id="github-profile">GitHub</a>
        <br></br>
        <a href="/contacts" id="contact-info">
          {(address==="/home-ua" || address==="/portfolio-ua" || address==="/wisdom-ua" 
          || address==="/story-ua" || address==="/interests-ua" || address==="/contacts-ua") 
          ? "Контакти" : "Contacts"}
        </a>
      </div>
    );
}
