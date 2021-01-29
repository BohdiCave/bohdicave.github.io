import React from 'react';

export default function Card(props) {
    return(
        <div className="card">
            <div className="card-header" id={props.name}>
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed " type="button" data-toggle="collapse" data-target={props.collapse} aria-expanded="true" aria-controls={props.collapse}>
                    {props.headerBtn}
                </button>
              </h2>
            </div>
            <div id={props.collapse} className="collapse" aria-labelledby={props.name} data-parent={props.page}>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">{props.listItem1}</li>
                  <li className="list-group-item">{props.listItem2}</li>
                  <li className="list-group-item">{props.listItem3}</li>
                  <li className="list-group-item">{props.listItem4}</li>
                  <li className="list-group-item">{props.listItem5}</li>
                </ul>  
              </div>
            </div>
          </div>

    );
}