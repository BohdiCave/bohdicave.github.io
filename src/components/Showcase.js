import React from 'react';
import {useLocation} from 'react-router-dom';
import Figure from './Figure.js';
import '../styles/portfolio-style.css';
import '../styles/link-style.css';

export default function Showcase({name}) {
  const location=useLocation();
  const address=location.pathname;
  return (
    <>
    <div className="showcase">  
      <p>
        <a href={`#${name}`}>
          {name==="showcase0" ? "Lost Horse Press website: " : 
          name==="showcase1" ? "WrappIt app: " : "StockUp app: "}
        </a> 
        { name==="showcase0" ? 
          (address==="/" ? 
          "While in coding bootcamp, I connected with an Ukrainian-American independent publisher from Sandpoint, Idaho specializing in poetry, who was looking for help with the outdated WordPress website causing image upload issues. As the final project for the bootcamp, I undertook to build a new website for the LOST HORSE PRESS on MERN stack using React and Redux frameworks. This project is ongoing and long-term - in the end, the best solution for the client's needs might be staying on xAMPP stack and upgrading both WordPress and PHP. The new design, however, will be applied to the updated website." 
          : "В час навчання на курсі програмування, я нав'язав контакт з незалежним видавцем поезії українського походження з м. Сендпойнт, штат Айдаго. Цей видавець потребував допомоги із застарілим вебсайтом у WordPress, який спричиняв проблеми з завантаженням зображень тощо. Як фінальний проект для свого курсу, я взявся побудувати новий сайт для LOST HORSE PRESS вживаючи комплекс МERN, зокрема лаштунки React та Redux. Це довготривалий проєкт - зрештою, найкращим вирішенням для клієнта може бути залишитися у комплексі xAMPP, але оновити як WordPress, так і PHP. Однак новий розроблений дизайн буде застосовано на існуючому сайті.")
        : name==="showcase1" ? 
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