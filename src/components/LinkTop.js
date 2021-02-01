import React from 'react';
import './link-style.css';

export default function LinkTop({type, padbottom}) {    
    return(
        <>
        {type==="div" ? 
            (
            <div className="flex-column-center">
                <a className={`back-to-top ${padbottom}`} href="#menu">
                    (back to menu)
                </a>
            </div>
            )
        : type==="anchor" && 
            (
            <a className="back-to-top" href="#menu">
                (back to menu)
            </a>
            )
        }
        </>
    );
}