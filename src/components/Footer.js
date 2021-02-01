import React from 'react';
import './footer-style.css';
import './link-style.css';

export default function Footer() {
  return (
    <footer id="myfoot">
      <p id="copyright">
        2020 &copy; 
        <a className="copyright" href="https://github.com/BohdiCave" target="new">
          Bohdan Pechenyak
        </a>
      </p>
    </footer>
  );
}