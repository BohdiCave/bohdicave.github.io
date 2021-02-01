import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Navigation from './components/Navigation';
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
  const Home = () => {
    return(
    <>
    <Navigation address="/" />;
    <Container />;
    <Footer/>;
    </>);
  }
  const Portfolio = () => {
    return(
    <>
    <Navigation address="/portfolio" />
    <Container />
    <Footer/>
    </>
    );
  }
  const Wisdom = () => {
    return(
    <>
    <Navigation address="/wisdom" />
    <Container />
    <Footer/>
    </>
    );
  }
  const Story = () => {
    return(
    <>
    <Navigation address="/story" />
    <Container />
    <Footer/>  
    </>
    )
  }
  const Interests = () => {
    return(
    <>
    <Navigation address="/interests" />
    <Container />
    <Footer/>  
    </>
    )
  }
  const Contacts = () => {
    return(
    <>
    <Navigation address="/contacts" />
    <Container />
    <Footer/>  
    </>
    )
  }
  return (
    <Router basename="/">
      <div>
        <ul style="list-style-type: inline;">
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/wisdom">Cross-Cultural Wisdom</Link></li>
          <li><Link to="/story">My Story</Link></li>
          <li><Link to="/interests">My Interests</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={Home}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/wisdom" component={Wisdom} />
        <Route path="/story" component={Story}/>
        <Route path="/interests" component={Interests}/>
        <Route path="/contacts" component={Contacts}/>
      </div>

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