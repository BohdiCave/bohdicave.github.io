import React from 'react';

export default function Figure({name}) {
    return (
        {
        <div className="showcase" id={name}>
            <figure>
                <a href={name==="showcase1" ? "https://github.com/BohdiCave/WrappIt" : "https://github.com/BohdiCave/StockUp"}>
                    <img class="screenshot-img" src={name==="showcase1" ? "./assets/Images/Projects/Backend/wrappit_screenshot.png" : "./assets/Images/Projects/Frontend/stockUp-mobile-screenshot.png"} alt={name==="showcase1" ? "Screenshot of the WrappIt app" : "Screenshot of the mobile version"} />
                    <figcaption>
                        Collaborative repository on GitHub {name==="showcase1" && "(forked)"}
                    </figcaption>
                </a>
            </figure>

            <figure className="screenshot-fig">
                <a href={name==="showcase1" ? "https://intense-falls-86763.herokuapp.com/" : "https://bohdicave.github.io/StockUp"}>
                    <img class="project" src={name==="showcase1" ? "./assets/Images/Projects/Backend/wrappit_saved-gifts_screenshot.png" : "./assets/Images/Projects/Frontend/AJAX-APIs-StockUp.png"} alt={name==="showcase1" ? "Full-stack MVC (Node-MySQL-Handlebars-Express) gift suggestions app" : "AJAX-API investment info for beginners"}/>
                    <figcaption>
                        <strong>{name==="showcase1" ? "WrappIt:" : "StockUp:"}</strong> {name==="showcase1" ? "Gift suggestions. Full-stack Node-Express.js app with MVC architecture (MySQL/Sequelize)" : "Investment for Beginners. Mobile-first project on AJAX-APIs"}
                    </figcaption>
                </a>
            </figure>
        </div>                     
        }
    );
}