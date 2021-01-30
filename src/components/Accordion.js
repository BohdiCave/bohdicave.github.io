import React from 'react';
import {useLocation} from 'react-router-dom';
import Card from "./Card.js";

export default function Accordion() {
  const location = useLocation;
  const address = location.pathname;

  return(
    <div className="accordion" 
      id={address==="/wisdom" ? "wisdom" :
          address==="/story" ? "story" :
          address==="/interests" ? "interests" : 
          address==="/contacts" && "contacts"
      }>
      <Card name="headingOne" collapse="collapseOne" />
      <Card name="headingTwo" collapse="collapseTwo" />
      <Card name="headingThree" collapse="collapseThree" />
      {address==="/wisdom" && <Card name="headingFour" collapse="collapseFour" />}
      {address==="/story" && <><br></br> <br></br></>}
    </div>
  );
}
