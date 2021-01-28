import React from 'react';

export default function Project(props) {
  return(  
    <figure className={props.content==="backend" ? "project-column" : null}>
      {/* Backend: figure wraps an image, a figcaption, and a div with project links. 
          Frontend: figure wraps a link that contains an image and figcaption */}
      {props.content==="frontend" && <a href={props.url2}>}
        {/* "https://bohdicave.github.io/StockUp"
        "https://bohdicave.github.io/Weather-Dashboard"
        "https://bohdicave.github.io/Daily-Scheduler"
        "https://bohdicave.github.io/Reflective-Password-Generator"
        "https://bohdicave.github.io/JS-Quiz"
        "https://bohdicave.github.io/DakhaBrakha-Fan-Page/" */}
      <img className="project" src={props.imgSrc} alt={props.altdesc} />
            {/* 
            Props.imgSrc: 
            "../assets/Images/Projects/Backend/wrappit_app.png" 
            "../assets/Images/Projects/Backend/expressive-devoyeuring_screen.png" 
            "../assets/Images/Projects/Backend/backendedEM_CLI-app.png" 
            "../assets/Images/Projects/Backend/notable-takeaways_app.png"
            "../assets/Images/Projects/Backend/karmateeming-manajeering_app.png"
            "../assets/Images/Projects/Backend/README-writher_app.png"
            Props.title:
            "Wrappit App"
            "Node-Express-Handlebars app for the gourmands"
            "Node.js CLI app for employee management"
            "Express.js note taking app"
            "Node.js CLI app for team mgmt"
            "Node.js CLI app to generate READMEs"

            Above - backend. Below - frontend 

            Props.imgSrc: 
            "../assets/Images/Projects/Frontend/AJAX-APIs-StockUp.png" 
            "../assets/Images/Projects/Frontend/AJAX-weather-dashboard.png" 
            "../assets/Images/Projects/Frontend/jQuery-daily-scheduler.png"
            "../assets/Images/Projects/Frontend/pw-generator.png"
            "../assets/Images/Projects/Frontend/js-quiz.png"
            "../assets/Images/Projects/Frontend/CSS-fanpage.png" 
            Props.title:            
            "AJAX-API investment info for beginners"
            "AJAX-based searchable weather dashboard"
            "jQuery-based Daily Scheduler app"
            "Password Generator Project"
            "JavaScript Quiz App"
            "CSS Fanpage" */}
      <figcaption>{props.title}</figcaption>
        {/* FULL-STACK: MVC app <br></br> for finding gifts (MySQL, Node/Express/Handlebars)
            FULL-STACK: MVC app <br></br> for the gourmands (MySQL, Node/Express/Handlebars)      
            Node.js: a CLI app <br></br> to manage employees (3-table MySQL database w/ CRUD).
            Express.js: <br></br> a simple yet fierce <br></br> note-taking app.
            Node.js: a CLI app <br></br> to manage a team <br></br> (HTML generator)
            Node.js: a CLI app <br></br> to generate good <br></br> README files
        Above - backend, below - frontend 
            AJAX-APIs: StockUp - Investment for Beginners
            AJAX, JSON and jQuery: OpenWeatherMap API
            jQuery: <br></br> Daily Scheduler
            JavaScript: <br></br> JS Password Generator
            JavaScript: <br></br> JS quiz
            CSS: <br></br> Fan page */}
      {props.content==="backend" &&        
        <div className="project-links">
          <a href={props.url1}> Heroku </a> | <a href={props.url2}> Github </a>
        </div>
         {/* 
            URL 1
                "https://intense-falls-86763.herokuapp.com/"
                "https://serene-fortress-49055.herokuapp.com/" 
Screencast demo "https://www.awesomescreenshot.com/video/1802035?key=647b4d8cdb8097d1b1c06aa313c6cc8b"
                "https://sleepy-beach-08943.herokuapp.com/"
Screencast demo "https://www.awesomescreenshot.com/video/1615787?key=125adf4b48b2df16dbf1dc3a64658a60" 
Screencast demo "https://www.awesomescreenshot.com/video/1521117?key=5f149f573d486a557a68b50e1c966f5f" 
            
            URL 2
                "https://github.com/BohdiCave/WrappIt"
                "https://github.com/BohdiCave/ExpressiveDevoYEuring"
                "https://github.com/BohdiCave/BackEnded-EM"
                "https://github.com/BohdiCave/Notable-Takeaways"
                "https://github.com/BohdiCave/KarmaTeeming-ManaJeering"
                "https://github.com/BohdiCave/README-writher"
            */}
      } 
      {props.content==="frontend" && </a>}
    </figure>
  );
}

    