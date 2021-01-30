import React from 'react';
import {useLocation} from 'react-router-dom';
import CardListItem from './CardListItem';

export default function Card({name, collapse}) {
  const location = useLocation;
  const address = location.pathname;

  return(
    <div className="card">
      <div className="card-header" id={name}>
        <h2 className="mb-0">
          <button className="btn btn-link btn-block text-left collapsed " type="button" data-toggle="collapse" data-target={collapse} aria-expanded="true" aria-controls={collapse}>
            { collapse==="collapseOne" ? 
              (address==="/wisdom" ? "Ukrainian" :
              address==="/story" ? "Several biographical facts" :
              address==="/interests" ? "Arts and Humanities" : 
              address==="/contacts" && "E-mail") 
            : collapse==="collapseTwo" ? 
              (address==="/wisdom" ? "Latin" :
              address==="/story" ? "Intellectual orientation" :
              address==="/interests" ? "Social Sciences" : 
              address==="/contacts" && "Related to Web Development")
            : collapse==="collapseThree" ? 
              (address==="/wisdom" ? "Greek" :
              address==="/story" ? "Motivational outlook" :
              address==="/interests" ? "Natural Sciences" : 
              address==="/contacts" && "Related to Writing or Translation")
            : collapse==="collapseFour" && "German"
            }
          </button>
        </h2>
      </div>
      <div id={collapse} className="collapse" aria-labelledby={name} data-parent={
        (collapse==="collapseOne" || collapse==="collapseTwo" || collapse==="collapseThree") ? 
          (address==="/wisdom" ? "#wisdom" : 
          address==="/story" ? "#story" :
          address==="/interests" ? "#interests" : 
          address==="/contacts" && "#contacts")
        : collapse==="collapseFour" && "#wisdom"
      }>
        <div className="card-body">
          <ul className="list-group">
            {
              (!(collapse==="collapseFour") || 
              (collapse==="collapseFour" && address==="/wisdom")) 
              && 
              <CardListItem name="li1" collapse={collapse} />
            }
            {
              ((collapse==="collapseOne" && !(address==="/contacts")) || 
              collapse==="collapseTwo" || 
              collapse==="collapse Three" ||
              (collapse==="collapseFour" && address==="/wisdom"))
              &&
              <CardListItem name="li2" collapse={collapse} />
            }
            { 
              ((!(collapse==="collapseFour") && !(address==="/contacts")) || 
              (collapse==="collapseFour" && address==="/wisdom" ))
              &&               
              <>
              <CardListItem name="li3" collapse={collapse} />
              <CardListItem name="li4" collapse={collapse} />
              </>
            }
            {
              (address==="/wisdom" ||
              ((address==="/story" || address==="/interests") && collapse==="collapseOne"))
              &&              
              <CardListItem name="li5" collapse={collapse} />
            }
          </ul>  
        </div>
      </div>
    </div>
  );
}