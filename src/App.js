import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Wisdom from './pages/Wisdom';
import Story from './pages/Story';
import Interests from './pages/Interests';
import Contacts from './pages/Contacts';

import HomeUA from './pages/Home-ua';
import PortfolioUA from './pages/Portfolio-ua';
import WisdomUA from './pages/Wisdom-ua';
import StoryUA from './pages/Story-ua';
import InterestsUA from './pages/Interests-ua';
import ContactsUA from './pages/Contacts-ua';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/wisdom" render={Wisdom} />
        <Route exact path="/story" render={Story}/>
        <Route exact path="/interests" render={Interests}/>
        <Route exact path="/contacts" render={Contacts}/>
        <Route exact path="/home-ua" component={HomeUA}/>
        <Route exact path="/portfolio-ua" component={PortfolioUA}/>
        <Route exact path="/wisdom-ua" component={WisdomUA}/>
        <Route exact path="/story-ua" component={StoryUA}/>
        <Route exact path="/interests-ua" component={InterestsUA}/>
        <Route exact path="/contacts-ua" component={ContactsUA}/>
      </Switch>  
      
    </Router>
  );
}