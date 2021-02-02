import React from 'react';
import {useLocation} from 'react-router-dom';
import Figure from './Figure.js';
import './styles/portfolio-style.css';
import './styles/link-style.css';

export default function Showcase({name}) {
  const location=useLocation();
  const address=location.pathname;
  return (
    <>
    <div className="showcase">  
      <p>
        <a href={`#${name}`}>{name==="showcase1" ? "WrappIt app: " : "StockUp app: "} </a> 
        { name==="showcase1" ? 
          (address==="/" ?  
          "Recently, I worked on a team of three to develop a full-stack gift-suggestions app. I designed and built a simple MySQL database (2 tables, one-to-many relation) using Sequelize.js library for Node.js server, integrating to save the data loaded from third-party APIs, as well as with Express-Handlebars.js library to render the saved data in HTML. In the future, the basic functionality of the app may be expanded to provide better and more customized results based on the person for whom the gift is intended."
          : "Нещодавно, у складі команди з трьох осіб, я допоміг розробити комплексний додаток для пошуку подарунків. Я розпланував та створив просту базу даних MySQL (2 таблиці, відношення один-до-багатьох) за допомогою пакета Sequelize.js для сервера Node. Згодом, я інтегрував цю базу даних з іншими компонентами - з даними, які наш додаток отримує внаслідок запитів до сторонніх API через AJAX, а також з пакетом Express-Handlebars.js, за допомогою якого зібрані та збережені дані завантажуються в HTML для перегляду. В майбутньому, цей додаток можна розвинути, додавши більш цільові результати на основі інформації про особу, для якої шукається подарунок.")
        : (address==="/" ? 
          "On another recent project, I applied aspects of UX and agile development, as I worked on a team of four to develop a single-page AJAX-API app to provide up-to-date financial information to beginner investors looking to enter the markets."
          : "Ще один нещодавній проект включав аспекти UX (досвід користувача) та розробки в гнучкому режимі (agile). У складі команди з чотирьох осіб, я допоміг розробити односторінковий додаток на основі запитів AJAX-API, який надає останню фінансову інформацію інвесторам-початківцям що хочуть почати вкладати гроші в акціонерний ринок.")
        }
      </p>
    </div> 
    <Figure name={name} />
    </>
  );
}