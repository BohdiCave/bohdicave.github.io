import React from 'react';
import Contacts from './Contacts.js';

export default function Aside() {
    return (
      <aside className="column1">
        <img src="./assets/Images/photo-Bohdan.jpg" alt="Bohdan's photo" />
        <h1>Full-stack web developer</h1>
        <Contacts />
      </aside>
      /* <h1>My Portfolio / Cross-Cultural Wisdom /  My Story / Interests / Contacts</h1> */
    );
}