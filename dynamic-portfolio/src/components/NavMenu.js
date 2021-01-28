import React from 'react';

export default function NavItem({address}) {
    // Need to think through the logic of assigning the "active" status and branching the NavMenu options
    let status = "active";
    
    return(
      <ul className="navbar-nav mr-auto">
        <li className={`nav-item dropdown ${{status} || null}`}>
            <a className="nav-link dropdown-toggle" href="" id="homeDrop" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Home {status ? <span className="sr-only"> (current) </span> : null}
            </a>
            <div className="dropdown-menu" aria-labelledby="homeDrop">
                <a className="dropdown-item" href={status ? "#mission" : "../index.html#mission"}>
                    Brand Statement
                </a>
                <a className="dropdown-item" href={status ? "#showcase" : "../index.html#showcase"}>
                    Project Showcase
                </a>
                <a className="dropdown-item" href={status ? "#skills" : "../index.html#skills"}>
                    My Skills
                </a>
            </div>
        </li>

        <li className={`nav-item dropdown ${{status} || null}`}>
            <a className="nav-link dropdown-toggle" href="" id="folioDrop" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Portfolio {status ? <span className="sr-only"> (current) </span> : null}
            </a>
            <div className="dropdown-menu" aria-labelledby="folioDrop">
                <a className="dropdown-item" href={status ? "#backend" : /* ./EN-files/ */ "portfolio.html#backend"}>
                    Backend/Full-stack Projects
                </a>
                <a class="dropdown-item" href={status ? "#frontend" : /* ./EN-files/ */ "portfolio.html#frontend"}>
                    Frontend Projects
                </a>
            </div>
        </li>

        <li className={`nav-item dropdown ${{status} || null}`}>
            <a className="nav-link dropdown-toggle" href="" id="aboutDrop" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About Me 
            </a>
            <div className="dropdown-menu" aria-labelledby="aboutDrop">
                <a className="dropdown-item" href={status ? "" : /* ./EN-files/ */"wisdom.html"}>
                    Cross-Cultural Wisdom {status ? <span className="sr-only"> (current) </span> : null}
                </a>
                <a className="dropdown-item" href={status ? "" : /* ./EN-files/ */"mystory.html"}>
                    My Story {status ? <span className="sr-only"> (current) </span> : null}
                </a>
                <a className="dropdown-item" href={status ? "" : /* ./EN-files/ */"myinterests.html"}>
                    My Interests {status ? <span className="sr-only"> (current) </span> : null}
                </a>
            </div>
        </li>

        <li className={`nav-item ${{status} || null}`}>
            <a className="nav-link" href={status ? "" : /* ./EN-files/ */"contacts.html"}>
                Contacts {status ? <span className="sr-only"> (current) </span> : null}
            </a>
        </li>

        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="" id="languageSelector" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Languages
            </a>
            <div className="dropdown-menu" aria-labelledby="languageSelector">
            <a className="dropdown-item" href={`${address}-ua.html`}><img className="flag-icon" src="./assets/Images/UA.png"/>
                Українська
            </a>
            <a className="dropdown-item" href=""><img className="flag-icon" src="./assets/Images/US.png"/>
                English
            </a>
            </div>
        </li>
      </ul>
    );
}


