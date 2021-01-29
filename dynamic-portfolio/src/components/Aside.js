import React from 'react';
import Contacts from './Contacts.js';

export default function Aside({address}) {
    return (
      <aside className="column1">
        <img src="./assets/Images/photo-Bohdan.jpg" alt="Bohdan's photo" />
        { address==="index.html" ? <h1>Full-stack web developer</h1>
        : address==="portfolio.html" ? <h1>My Portfolio</h1>
        : address==="wisdom.html" ? <h1>Cross-Cultural Wisdom</h1>
        : address==="mystory.html" ? <h1>My Story</h1>
        : address==="myinterests.html" ? <h1>Interests</h1>
        : <h1>Contacts</h1> }
        <Contacts />
      </aside>
    );
}