import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';

// import Home from './pages/Home';
// import Portfolio from './pages/Portfolio';
// import Wisdom from './pages/Wisdom';
// import Story from './pages/Story';
// import Interests from './pages/Interests';
// import Contacts from './pages/Contacts';

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
        <Route path="/">
          <header>
            <Navbar />
          </header>
          <Container />
          <Footer/>      
        </Route>
        <Route path="/portfolio">
          <header>
            <Navbar />
          </header>
          <Container />
          <Footer/>
        </Route>
        <Route path="/wisdom">
          <header>
            <Navbar />
          </header>
          <Container />
          <Footer/>
        </Route>
        <Route path="/story">
          <header>
            <Navbar />
          </header>
          <Container />
          <Footer/>
        </Route>
        <Route path="/interests">
          <header>
            <Navbar />
          </header>
          <Container />
          <Footer/>
        </Route>
        <Route path="/contacts">
          <header>
            <Navbar />
          </header>
          <Container />
          <Footer/>
        </Route>
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