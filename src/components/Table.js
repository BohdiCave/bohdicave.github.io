import React from 'react';
import {useLocation} from 'react-router-dom';
import '../styles/tab-style.css';

export default function Table({type}) {
  const location = useLocation();
  const address = location.pathname;
  return (
    <>
    {type==="skills" ?
      (
      <table>
        <tbody>
        <tr>
          <th>{address==="/" ? "Frontend:" : "Клієнт (frontend):"}</th>
          <td className="first" >HTML5, CSS3, CSS frameworks (Bootstrap, Foundation, Milligram.io, UI Kit), Javascript/JSON, jQuery-AJAX, {address==="/" ? "web/third-party APIs" : "мережеві та инші додатки (API)"}</td>
        </tr>
        <tr>
          <th>{address==="/" ? "Backend:" : "Сервер (backend)"}</th>
          <td>{address==="/" ? "MERN stack (MongoDB/Mongoose.js, Express.js, React.js, Node.js), including npm, Handlebars.js, Sequelize.js and other JS libraries and frameworks), xAMPP stack (PHP, MySQL), Heroku/JawsDB, MongoDB Atlas, WordPress" : "Комплекс MERN (MongoDB/Mongoose.js, Express.js, React.js, Node.js), в тому числі npm, Handlebars.js, Sequelize.js та низка програмних пакетів та бібліотек; комплекс xAMPP (PHP, MySQL), Heroku/JawsDB, MongoDB Atlas, WordPress"}</td>
        </tr>
        <tr>
          <th>{address==="/" ? "Learning:" : "Зараз навчаюся:"}</th>
          <td>{address==="/" ? "xAMPP stack (Apache, MariaDB, PHP-8, Perl, Laravel)" : "Комплекс xAMPP (Apache, MariaDB, PHP-8, Perl, Laravel)"}</td>
        </tr>
        <tr className="last">
          <th>{address==="/" ? "Intend to explore:" : "Маю намір вивчити:"}</th>
          <td className="last">Java, Python, R, С/C++, C#, {address==="/" ? "mobile development" : "розробка мобільних додатків"} (React Native/Swift/Flutter/Kotlin...), {address==="/" ? "data science and visualization" : "дані та їх візуалізація"} (GIS, D3.js, Chart.js...), {address==="/" ? "cybersecurity, and more..." : "кібербезпека тощо..."}</td>
        </tr>
        </tbody>
      </table>
      )
    : type==="mission" &&
      (
      <table>
      {address==="/" ?
      (<tbody>
        <tr>
          <th>Mission:</th>
          <td className="first">To provide software development expertise to individuals and organizations, especially and primarily in the following spheres of interest: environmental protection, arts, and education.</td>
        </tr>
        <tr>
          <th>Vision:</th>
          <td>A web developer with a background in social science and a passion for arts and humanities, aiming to create an aesthetically pleasing, socially meaningful, and functionally accessible user experience on the web. I tend to focus on fully responsive, mobile-first, and accessible design and development.</td>
        </tr>
        <tr className="last">
          <th>Purpose:</th>
          <td>Always passionate about quality, I am known to pay attention to detail without losing focus of the overall concept. Currently, I am earning a certificate in full-stack development (with the focus on MERN stack) from University of Pennsylvania.</td>
        </tr>
      </tbody>
      )
      :
      (<tbody>
        <tr>
          <th>Місія:</th>
          <td className="first">Надавати послуги у розробці програмування особам та організаціям у таких сферах як охорона довкілля, культура та мистецтво, освіта та наука.</td>
        </tr>
        <tr>
          <th>Фокус:</th>
          <td>Я орієнтуюся на якість послуг, тому завжди намагаюся бути уважним до деталей, не втрачаючи загального фокусу та концепції. Зараз я закінчую сертифікатний курс Пенсильванського університету (University of Pennsylvania) з комплексної розробки програмного забезпечення на основі комплексу MERN.
          </td>
        </tr>
        <tr className="last">
          <th>Візія:</th>
          <td>Як веб-розробник з суспільнознавчою освітою та пристрастю до гуманітаристики та мистецької творчості, я прагну створювати естетично приємний та функціонально доступний досвід для користувачів мережею. Я схильний зосереджувати увагу на дизайні та розробці, які є доступними для осіб з різними можливостями та є готовими до користування на різних мобільних пристроях.</td>
        </tr>
      </tbody>)       
      }
      </table>
      )
    }
    </> 
  );
}