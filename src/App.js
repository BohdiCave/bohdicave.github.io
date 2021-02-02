import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

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
  // const Home = () => {
  //   return(
  //   <div>
  //   <Navigation address="/" />
  //   <Container />
  //   <Footer/>
  //   </div>)
  // }
  // const Portfolio = () => {
  //   return(
  //   <>
  //   <Navigation address="/portfolio" />
  //   <Container />
  //   <Footer/>
  //   </>
  //   );
  // }
  // const Wisdom = () => {
  //   return(
  //   <>
  //   <Navigation address="/wisdom" />
  //   <Container />
  //   <Footer/>
  //   </>
  //   );
  // }
  // const Story = () => {
  //   return(
  //   <>
  //   <Navigation address="/story" />
  //   <Container />
  //   <Footer/>  
  //   </>
  //   )
  // }
  // const Interests = () => {
  //   return(
  //   <>
  //   <Navigation address="/interests" />
  //   <Container />
  //   <Footer/>  
  //   </>
  //   )
  // }
  // const Contacts = () => {
  //   return(
  //   <>
  //   <Navigation address="/contacts" />
  //   <Container />
  //   <Footer/>  
  //   </>
  //   )
  // }
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => (
          <>
          <Navigation address={props} />
          <Container />
          <Footer />
          </>
        )}/>
        <Route exact path="/portfolio" render={props => (
          <>
          <Navigation address={props} />
          <Container />
          <Footer />
          </>
        )}/>
        <Route exact path="/wisdom" render={props => (
          <>
          <Navigation address={props} />
          <Container />
          <Footer />
          </>
        )} />
        <Route exact path="/story" render={props => (
          <>
          <Navigation address={props} />
          <Container />
          <Footer />
          </>
        )}/>
        <Route exact path="/interests" render={props => (
          <>
          <Navigation address={props} />
          <Container />
          <Footer />
          </>
        )}/>
        <Route exact path="/contacts" render={props => (
          <>
          <Navigation address={props} />
          <Container />
          <Footer />
          </>
        )}/>
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