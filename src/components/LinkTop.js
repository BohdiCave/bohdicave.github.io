import React from 'react';

export default function LinkTop({type, padbottom}) {    
    return(
        <>
        {type==="div" ? 
            (
            <div class="flex-column-center">
                <a class={`back-to-top ${padbottom}`} href="#menu">
                    (back to menu)
                </a>
            </div>
            )
        : type==="anchor" && 
            (
            <a class="back-to-top" href="#menu">
                (back to menu)
            </a>
            )
        }
        </>
    );
}