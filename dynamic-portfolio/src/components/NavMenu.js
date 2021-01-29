import React from 'react';

export default function NavMenu({address}) {
    
    return(
      <ul className="navbar-nav mr-auto">
        <li className={address==="index.html" ? "nav-item dropdown active" : "nav-item dropdown"}>
            <a className="nav-link dropdown-toggle" href="" id="homeDrop" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Home {address==="index.html" ? (<><span className="sr-only">(current)</span></>) : null}
            </a>
            <div className="dropdown-menu" aria-labelledby="homeDrop">
                <a className="dropdown-item" href={address==="index.html" ? "#mission" : "../index.html#mission"}>
                    Brand Statement
                </a>
                <a className="dropdown-item" href={address==="index.html" ? "#showcase" : "../index.html#showcase"}>
                    Project Showcase
                </a>
                <a className="dropdown-item" href={address==="index.html" ? "#skills" : "../index.html#skills"}>
                    My Skills
                </a>
            </div>
        </li>

        <li className={address==="portfolio.html" ? "nav-item dropdown active" : "nav-item dropdown"}>
            <a className="nav-link dropdown-toggle" href="" id="folioDrop" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Portfolio {address==="portfolio.html" ? (<><span className="sr-only"> (current) </span></>) : null}
            </a>
            <div className="dropdown-menu" aria-labelledby="folioDrop">
                <a className="dropdown-item" href={address==="portfolio.html" ? "#backend" : address==="index.html" ? "./EN-files/portfolio.html#backend" : "portfolio.html#backend"}>
                    Backend/Full-stack Projects
                </a>
                <a class="dropdown-item" href={address==="portfolio.html" ? "#frontend" : address==="index.html" ? "./EN-files/portfolio.html#frontend" : "portfolio.html#frontend"}>
                    Frontend Projects
                </a>
            </div>
        </li>

        <li className={address==="wisdom.html" || address==="mystories.html" || address==="myinterests.html" ? "nav-item dropdown active" : "nav-item dropdown"}>
            <a className="nav-link dropdown-toggle" href="" id="aboutDrop" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About Me 
            </a>
            <div className="dropdown-menu" aria-labelledby="aboutDrop">
                <a className="dropdown-item" href={address==="wisdom.html" ? "" : address==="index.html" ? "./EN-files/wisdom.html" : "wisdom.html"}>
                    Cross-Cultural Wisdom {address==="wisdom.html" ? (<><span className="sr-only"> (current) </span></>) : null}
                </a>
                <a className="dropdown-item" href={address==="mystory.html" ? "" : address==="index.html" ? "./EN-files/mystory.html" : "mystory.html"}>
                    My Story {address==="mystory.html" ? (<><span className="sr-only"> (current) </span></>) : null}
                </a>
                <a className="dropdown-item" href={address==="myinterests.html" ? "" : address==="index.html" ? "./EN-files/myinterests.html" : "myinterests.html"}>
                    My Interests {address==="myinterests.html" ? (<><span className="sr-only"> (current) </span></>) : null}
                </a>
            </div>
        </li>

        <li className={address==="contacts.html" ? "nav-item active" : "nav-item"}>
            <a className="nav-link" href={address==="contacts.html" ? "" : address==="index.html" ? "./EN-files/contacts.html" : "contacts.html"}>
                Contacts {address==="contacts.html" ? (<><span className="sr-only"> (current) </span></>) : null}
            </a>
        </li>

        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="" id="languageSelector" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Languages
            </a>
            <div className="dropdown-menu" aria-labelledby="languageSelector">
                <a className="dropdown-item" href={
                    address==="index.html" ? "index-ua.html" 
                    : address==="portfolio.html" ? "../UA-files/portfolio-ua.html"
                    : address==="wisdom.html" ? "../UA-files/wisdom-ua.html" 
                    : address==="mystory.html" ? "../UA-files/mystory-ua.html"
                    : address==="myinterests.html" ? "../UA-files/myinterests-ua.html"
                    : "../UA-files/contacts-ua.html"
                }>
                <img className="flag-icon" src="./assets/Images/UA.png"/>
                    Українська
                </a>
                <a className="dropdown-item" href="">
                <img className="flag-icon" src="./assets/Images/US.png"/>
                    English
                </a>
            </div>
        </li>
      </ul>
    );
}


