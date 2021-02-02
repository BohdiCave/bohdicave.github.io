import React from 'react';
import Aside from './Aside.js';
import Article from './Article.js';
import './styles/grid-style.css';

export default function Container() {
  return (
    <main className="container">
      <section className="row">
        <Aside />
        <Article />
      </section>
    </main>
  );  
}
