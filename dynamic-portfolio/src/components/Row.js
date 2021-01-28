import React, {Component} from 'react';
import ShowcaseDiv from './ShowcaseDiv.js';
import Table from './SkillsTable.js';
import LinkTop from './LinkTop.js';

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
            <Project content="" ulr1="" url2="" imgSrc="" altdesc="" title="" />
            <Project content="" ulr1="" url2="" imgSrc="" altdesc="" title=""/>
            <Project content="" ulr1="" url2="" imgSrc="" altdesc="" title=""/>
            <Project content="" ulr1="" url2="" imgSrc="" altdesc="" title=""/>
            <Project content="" ulr1="" url2="" imgSrc="" altdesc="" title=""/>
            <Project content="" ulr1="" url2="" imgSrc="" altdesc="" title=""/>       
            <LinkTop type="div" padbottom="bottom-10" />
          }
          {content==="frontend" &&
            <Project content="" ulr1="" url2="" imgSrc="" altdesc="" title="" />
            <Project content="" ulr1="" url2="" imgSrc="" altdesc="" title=""/>
            <Project content="" ulr1="" url2="" imgSrc="" altdesc="" title=""/>
            <Project content="" ulr1="" url2="" imgSrc="" altdesc="" title=""/>
            <Project content="" ulr1="" url2="" imgSrc="" altdesc="" title=""/>
            <Project content="" ulr1="" url2="" imgSrc="" altdesc="" title=""/>       
            <LinkTop type="div" padbottom="bottom-10" />
          }
          {content}

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