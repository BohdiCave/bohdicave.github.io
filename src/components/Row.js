import React from 'react';
import ShowcaseDiv from './ShowcaseDiv.js';
import Table from './Table.js';
import LinkTop from './LinkTop.js';
import Project from './Project.js';
import './styles/grid-style.css';

export default function Row({type, content, name, innerText, style, alignment, showcase}) {
  
  return(
    <>
    { type==="dark" ? 
      (
      <div className={showcase ? "row row-in-col showcase-row" : (content==="backend" || content==="frontend") ? "row row-in-col portfolio-row" : "row row-in-col"} id={name} style={style}>
        { content==="empty" ? innerText 
        : content==="showcase" ? <ShowcaseDiv/> 
        : content==="text-in-box" ? 
          ( 
          <div className={alignment ? `text-in-box ${alignment}` : "text-in-box"}>
            <Table type={alignment ? "mission" : "skills"} />
            <LinkTop type={alignment ? "anchor" : "div"} />
          </div>
          )
        : content==="backend" ? 
          (<>
            <Project content={content} name="back1" heroku={true} />
            <Project content={content} name="back2" heroku={true} />
            <Project content={content} name="back3" />
            <Project content={content} name="back4" heroku={true} />
            <Project content={content} name="back5" />
            <Project content={content} name="back6" />       
            <LinkTop type="div" padbottom="bottom-10" />
          </>)
        : content==="frontend" &&
          (<>
            <Project content={content} name="front1" />
            <Project content={content} name="front2" />
            <Project content={content} name="front3" />
            <Project content={content} name="front4" />
            <Project content={content} name="front5" />
            <Project content={content} name="front6" />       
            <LinkTop type="div" padbottom="bottom-10" />
          </>)
        }
      </div>
      ) 
      : type==="light" &&
      (
      <div className="row row-in-col-2">
        { content==="heading" ? (<h2 className="special" id={name}>{innerText}</h2>)
        : content==="empty" && innerText }         
      </div>
      )
    }
    </>
  );
}