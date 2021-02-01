import React from 'react';
import './portfolio-style.css';
import './link-style.css';

export default function Project({content, name, heroku}) {
  return(  
    <figure className={ content==="backend" ? "project-column" 
                      : content==="screenshot" ? "screenshot-fig" : undefined}>
      { content==="frontend" ? 
        (
        <a href={ name==="front1" ? "https://bohdicave.github.io/StockUp" 
                : name==="front2" ? "https://bohdicave.github.io/Weather-Dashboard"
                : name==="front3" ? "https://bohdicave.github.io/Daily-Scheduler"
                : name==="front4" ? "https://bohdicave.github.io/Reflective-Password-Generator"
                : name==="front5" ? "https://bohdicave.github.io/JS-Quiz"
                : name==="front6" && "https://bohdicave.github.io/DakhaBrakha-Fan-Page/" }>
          <img className="project" 
            src={ name==="front1" ? "../assets/Images/Projects/Frontend/AJAX-APIs-StockUp.png" 
                : name==="front2" ? "../assets/Images/Projects/Frontend/AJAX-weather-dashboard.png"
                : name==="front3" ? "../assets/Images/Projects/Frontend/jQuery-daily-scheduler.png"
                : name==="front4" ? "../assets/Images/Projects/Frontend/pw-generator.png"
                : name==="front5" ? "../assets/Images/Projects/Frontend/js-quiz.png"
                : name==="front6" && "../assets/Images/Projects/Frontend/CSS-fanpage.png" } 
            alt=""
            // { name==="front1" ? "StockUp investment app"
            //     : name==="front2" ? "Searchable weather dashboard"
            //     : name==="front3" ? "Daily Scheduler app"
            //     : name==="front4" ? "Password Generator Project"
            //     : name==="front5" ? "JavaScript Quiz App"
            //     : name==="front6" && "CSS Fan page" } 
          />
          <figcaption>
            { name==="front1" ? (<>AJAX-APIs: StockUp - Investment for Beginners</>)
            : name==="front2" ? (<>AJAX, JSON and jQuery: OpenWeatherMap API</>)
            : name==="front3" ? (<>jQuery: <br></br> Daily Scheduler</>)
            : name==="front4" ? (<>JavaScript <br></br> Password Generator</>)
            : name==="front5" ? (<>JavaScript quiz</>)
            : name==="front6" && (<>CSS: <br></br> Fan page</>) }
          </figcaption>
        </a>  
        )
      : content==="backend" ?
        (
        <>
        <img className="project" 
          src={ name==="back1" ? "../assets/Images/Projects/Backend/wrappit_app.png"
              : name==="back2" ? "../assets/Images/Projects/Backend/expressive-devoyeuring_screen.png"
              : name==="back3" ? "../assets/Images/Projects/Backend/backendedEM_CLI-app.png"
              : name==="back4" ? "../assets/Images/Projects/Backend/notable-takeaways_app.png"
              : name==="back5" ? "../assets/Images/Projects/Backend/karmateeming-manajeering_app.png"
              : name==="back6" && "../assets/Images/Projects/Backend/README-writher_app.png" }
          alt=""
          // { name==="back1" ? "Wrappit App"
          //     : name==="back2" ? "Node-Express-Handlebars app for the gourmands"
          //     : name==="back3" ? "Node.js CLI app for employee management"
          //     : name==="back4" ? "Express.js note taking app"
          //     : name==="back5" ? "Node.js CLI app for team mgmt"
          //     : name==="back6" && "Node.js CLI app to generate READMEs" }
        />
        <figcaption>
          { name==="back1" ? (<>FULL-STACK: MVC app <br></br> for finding gifts <br></br> (MySQL, Node/Express/Handlebars)</>)
          : name==="back2" ? (<>FULL-STACK: MVC app <br></br> for the gourmands <br></br>(MySQL, Node/Express/Handlebars)</>)
          : name==="back3" ? (<>Node.js: a CLI app <br></br> to manage employees <br></br> (3-table MySQL database w/ CRUD).</>)
          : name==="back4" ? (<>Express.js: <br></br> a simple yet fierce <br></br> note-taking app.</>)
          : name==="back5" ? (<>Node.js: a CLI app <br></br> to manage a team <br></br> (HTML generator)</>)
          : name==="back6" && (<>Node.js: a CLI app <br></br> to generate good <br></br> README files</>) }
        </figcaption>
        <div className="project-links">
          <a href={ 
                name==="back1" ? "https://intense-falls-86763.herokuapp.com/"
              : name==="back2" ? "https://serene-fortress-49055.herokuapp.com/"
              : name==="back3" ? "https://www.awesomescreenshot.com/video/1802035?key=647b4d8cdb8097d1b1c06aa313c6cc8b"
              : name==="back4" ? "https://sleepy-beach-08943.herokuapp.com/"
              : name==="back5" ? "https://www.awesomescreenshot.com/video/1615787?key=125adf4b48b2df16dbf1dc3a64658a60"
              : name==="back6" && "https://www.awesomescreenshot.com/video/1521117?key=5f149f573d486a557a68b50e1c966f5f"  
          }> {heroku ? "Heroku" : "Screencast Demo"} </a> | 
          <a href={
              name==="back1" ? "https://github.com/BohdiCave/WrappIt"
            : name==="back2" ? "https://github.com/BohdiCave/ExpressiveDevoYEuring"
            : name==="back3" ? "https://github.com/BohdiCave/BackEnded-EM" 
            : name==="back4" ? "https://github.com/BohdiCave/Notable-Takeaways"
            : name==="back5" ? "https://github.com/BohdiCave/KarmaTeeming-ManaJeering"
            : name==="back6" && "https://github.com/BohdiCave/README-writher"
          }> Github </a>
        </div>
        </>
        )
      : content==="showcase" ?
        (
          <a href={ name==="showcase1" ? "https://intense-falls-86763.herokuapp.com/" 
                  : "https://bohdicave.github.io/StockUp" }>
            <img className="project" 
              src={ name==="showcase1" ? "./assets/Images/Projects/Backend/wrappit_saved-gifts_screenshot.png" 
                  : "./assets/Images/Projects/Frontend/AJAX-APIs-StockUp.png" } 
              alt={ name==="showcase1" ? "Full-stack MVC (Node-MySQL-Handlebars-Express) gift suggestions app" 
                  : "AJAX-API investment info for beginners"}
            />
          <figcaption>
                <strong>{ name==="showcase1" ? "WrappIt:" : "StockUp:" }</strong> 
                { name==="showcase1" ? 
                  "Gift suggestions. Full-stack Node-Express.js app with MVC architecture (MySQL/Sequelize)" 
                : "Investment for Beginners. Mobile-first project on AJAX-APIs" }
            </figcaption>
        </a>
        )
      : content==="screenshot" &&
        (
          <a href={ name==="showcase1" ? "https://github.com/BohdiCave/WrappIt" 
                : "https://github.com/BohdiCave/StockUp" }>
            <img className="screenshot-img" 
              src={ name==="showcase1" ? "./assets/Images/Projects/Backend/wrappit_screenshot.png" 
                : "./assets/Images/Projects/Frontend/stockUp-mobile-screenshot.png" } 
              alt={ name==="showcase1" ? "Screenshot of the WrappIt app" 
                : "Screenshot of the mobile version" } 
            />
             <figcaption>
            Collaborative repository on GitHub { name==="showcase1" && "(forked)" }
          </figcaption>
           
          </a>
        )
      }
    </figure>
  );
}