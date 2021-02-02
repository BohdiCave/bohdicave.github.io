import React from 'react';
import {useLocation} from 'react-router-dom';
import './styles/footer-style.css';
import './styles/link-style.css';

export default function Footer() {
  const location = useLocation();
  const address = location.pathname;  
  return (
    <footer id="myfoot">
      <p id="copyright">
        2020 &copy; 
        <a className="copyright" href="https://github.com/BohdiCave" target="new">
          {(address==="/home-ua" || address==="/portfolio-ua" || address==="/wisdom-ua" 
          || address==="/story-ua" || address==="/interests-ua" || address==="/contacts-ua") 
          ? "Богдан Печеняк" : "Bohdan Pechenyak"}
        </a>
      </p>
    </footer>
  );
}