import React from 'react';
import {useLocation} from 'react-router-dom';
import Contacts from './Contacts.js';

export default function Aside() {

  const location = useLocation();
  const address = location.pathname;

    return (
      <aside className="column1">
        <img src="./assets/Images/photo-Bohdan.jpg" alt="Bohdan Pechenyak" />
        { address==="/" ? <h1>Full-stack web developer</h1>
        : address==="/portfolio" ? <h1>My Portfolio</h1>
        : address==="/wisdom" ? <h1>Cross-Cultural Wisdom</h1>
        : address==="/story" ? <h1>My Story</h1>
        : address==="/interests" ? <h1>Interests</h1>
        : address==="/contacts" ? <h1>Contacts</h1>
        : address==="/index-ua" ? <h1>Комплексний веб-розробник</h1>
        : address==="/portfolio-ua" ? <h1>Мій портфель</h1>
        : address==="/wisdom-ua" ? <h1>Міжкультурна мудрість</h1>
        : address==="/story-ua" ? <h1>Історія</h1>
        : address==="/interests-ua" ? <h1>Зацікавлення</h1>
        : address==="/contacts-ua" && <h1>Контакти</h1>
        }
        <Contacts />
      </aside>
    );
}