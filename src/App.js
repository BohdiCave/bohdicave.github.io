import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Wisdom from './components/pages/Wisdom';
import Story from './components/pages/Story';
import Interests from './components/pages/Interests';
import Contacts from './components/pages/Contacts';

import HomeUA from './components/pages/Home-ua';
import PortfolioUA from './components/pages/Portfolio-ua';
import WisdomUA from './components/pages/Wisdom-ua';
import StoryUA from './components/pages/Story-ua';
import InterestsUA from './components/pages/Interests-ua';
import ContactsUA from './components/pages/Contacts-ua';

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