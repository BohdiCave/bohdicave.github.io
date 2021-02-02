import React from 'react';
import Project from './Project.js';
import './styles/portfolio-style.css';

export default function Figure({name}) {
    return(
        <div className="showcase" id={name}>
            <Project content="showcase" name={name} />
            <Project content="screenshot" name={name} />
        </div>
    );
}