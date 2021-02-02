import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Wisdom from './components/pages/Wisdom';
import Story from './components/pages/Story';
import Interests from './components/pages/Interests';
import Contacts from './components/pages/Contacts';

// import HomeUA from './pages/Home-ua';
// import PortfolioUA from './pages/Portfolio-ua';
// import WisdomUA from './pages/Wisdom-ua';
// import StoryUA from './pages/Story-ua';
// import InterestsUA from './pages/Interests-ua';
// import ContactsUA from './pages/Contacts-ua';

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
      </Switch>  
  
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/wisdom" component={Wisdom} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/interests" component={Interests} />
        <Route path="/contacts" component={Contacts} /> */}
        {/* <Route exact path="/home-ua" component={HomeUA} />
        <Route exact path="/portfolio-ua" component={PortfolioUA} />
        <Route exact path="/wisdom-ua" component={WisdomUA} />
        <Route exact path="/story-ua" component={StoryUA} />
        <Route exact path="/interests-ua" component={InterestsUA} />
        <Route path="/contacts-ua" component={ContactsUA} /> */}
      
    </Router>
  );
}