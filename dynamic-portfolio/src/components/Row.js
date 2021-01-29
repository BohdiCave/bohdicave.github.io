import React, {Component} from 'react';
import ShowcaseDiv from './ShowcaseDiv.js';
import Table from './SkillsTable.js';
import LinkTop from './LinkTop.js';
import Project from './Project.js';

export default function Row({type, content, name, innerText, style, alignment, showcase}) {
  
  render() {
    return (
      {type==="dark" && 
        <div className={showcase ? `row row-in-col ${showcase}` : {content==="backend" || content==="frontend" ? "row row-in-col portfolio-row" : "row row-in-col"}} id={{name} || null} style={style ? {style} : null}>
          {content==="empty" && {innerText} }
          {content==="showcase" && <ShowcaseDiv/>}
          {content==="text-in-box" && 
              <div className={alignment ? `text-in-box ${alignment}` : "text-in-box"}>
                  <Table type={alignment ? "mission" : "skills"} />
                  <LinkTop type={alignment ? "anchor" : "div"} />
              </div>
          }
          
          {content==="backend" && 
            <Project 
              content={content} 
              url1="https://intense-falls-86763.herokuapp.com/" 
              url2="https://github.com/BohdiCave/WrappIt" 
              imgSrc="../assets/Images/Projects/Backend/wrappit_app.png" 
              altdesc="Wrappit App" 
              title="FULL-STACK: MVC app <br></br> for finding gifts (MySQL, Node/Express/Handlebars)"
              heroku={true}
            />
            <Project 
              content={content} 
              url1="https://serene-fortress-49055.herokuapp.com/" 
              url2="https://github.com/BohdiCave/ExpressiveDevoYEuring" 
              imgSrc="../assets/Images/Projects/Backend/expressive-devoyeuring_screen.png" altdesc="Node-Express-Handlebars app for the gourmands" 
              title="FULL-STACK: MVC app <br></br> for the gourmands (MySQL, Node/Express/Handlebars)"
              heroku={true}
            />
            <Project 
              content={content} 
              url1="https://www.awesomescreenshot.com/video/1802035?key=647b4d8cdb8097d1b1c06aa313c6cc8b" url2="https://github.com/BohdiCave/BackEnded-EM" 
              imgSrc="../assets/Images/Projects/Backend/backendedEM_CLI-app.png" 
              altdesc="Node.js CLI app for employee management" 
              title="Node.js: a CLI app <br></br> to manage employees (3-table MySQL database w/ CRUD)."
              heroku={false}
            />
            <Project 
              content={content} 
              url1="https://sleepy-beach-08943.herokuapp.com/" 
              url2="https://github.com/BohdiCave/Notable-Takeaways" 
              imgSrc="../assets/Images/Projects/Backend/notable-takeaways_app.png" 
              altdesc="Express.js note taking app" 
              title="Express.js: <br></br> a simple yet fierce <br></br> note-taking app."
              heroku={true}
            />
            <Project 
              content={content} 
              url1="https://www.awesomescreenshot.com/video/1615787?key=125adf4b48b2df16dbf1dc3a64658a60" url2="https://github.com/BohdiCave/KarmaTeeming-ManaJeering" 
              imgSrc="../assets/Images/Projects/Backend/karmateeming-manajeering_app.png" 
              altdesc="Node.js CLI app for team mgmt" 
              title="Node.js: a CLI app <br></br> to manage a team <br></br> (HTML generator)"
              heroku={false} 
            />
            <Project 
              content={content} 
              url1="https://www.awesomescreenshot.com/video/1521117?key=5f149f573d486a557a68b50e1c966f5f" url2="https://github.com/BohdiCave/README-writher" 
              imgSrc="../assets/Images/Projects/Backend/README-writher_app.png" 
              altdesc="Node.js CLI app to generate READMEs" 
              title="Node.js: a CLI app <br></br> to generate good <br></br> README files"
              heroku={false}
            />       
            <LinkTop type="div" padbottom="bottom-10" />
          }
          {content==="frontend" &&
            <Project 
              content={content} 
              url="https://bohdicave.github.io/StockUp" 
              imgSrc="../assets/Images/Projects/Frontend/AJAX-APIs-StockUp.png" 
              altdesc="AJAX-API investment info for beginners" 
              title="AJAX-APIs: StockUp - Investment for Beginners"
            />
            <Project 
              content={content} 
              url="https://bohdicave.github.io/Weather-Dashboard" 
              imgSrc="../assets/Images/Projects/Frontend/AJAX-weather-dashboard.png" 
              altdesc="AJAX-based searchable weather dashboard" 
              title="AJAX, JSON and jQuery: OpenWeatherMap API"
            />
            <Project 
              content={content} 
              url="https://bohdicave.github.io/Daily-Scheduler" 
              imgSrc="../assets/Images/Projects/Frontend/jQuery-daily-scheduler.png" 
              altdesc="jQuery-based Daily Scheduler app" 
              title="jQuery: <br></br> Daily Scheduler"
            />
            <Project 
              content={content} 
              url="https://bohdicave.github.io/Reflective-Password-Generator" 
              imgSrc="../assets/Images/Projects/Frontend/pw-generator.png" 
              altdesc="Password Generator Project" 
              title="JavaScript: <br></br> JS Password Generator"
            />
            <Project 
              content={content} 
              url="https://bohdicave.github.io/JS-Quiz" 
              imgSrc="../assets/Images/Projects/Frontend/js-quiz.png" 
              altdesc="JavaScript Quiz App" 
              title="JavaScript: <br></br> JS quiz"
            />
            <Project 
              content={content} 
              url="https://bohdicave.github.io/DakhaBrakha-Fan-Page/" 
              imgSrc="../assets/Images/Projects/Frontend/CSS-fanpage.png" 
              altdesc="CSS Fanpage" 
              title="CSS: <br></br> Fan page" 
            />       
            <LinkTop type="div" padbottom="bottom-10" />
          }
        </div>
      }
      {type==="light" &&
        <div className="row row-in-col-2">
          {content==="heading" && <h2 className="special" id={{name} || null}>{innerText}</h2>}
          {content==="empty" && {innerText} }         
        </div>
      }
    );
  }
}