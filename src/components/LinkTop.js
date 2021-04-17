import React from 'react';
import {useLocation} from 'react-router-dom';
import '../styles/link-style.css';

export default function LinkTop({type, padbottom}) {
    const location = useLocation();
    const address = location.pathname;    
    return(
        <>
        {type==="div" ? 
            (
            <div className="flex-column-center">
                <a className={`back-to-top ${padbottom}`} href="#menu">
                    {(address==="/" || address==="/portfolio") ? "(back to menu)" : "(до меню)"}
                </a>
            </div>
            )
        : type==="anchor" && 
            (
            <a className="back-to-top" href="#menu">
                {(address==="/" || address==="/portfolio") ? "(back to menu)" : "(до меню)"}
            </a>
            )
        }
        </>
    );
}