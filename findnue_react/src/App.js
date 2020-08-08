import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from './components/Navbar'
import OtherNavbar from './components/OtherNavbar';
import MainBanner from './components/MainBanner'
import Homeblocks from './components/Homeblocks'
import TwoBlocks from './components/TwoBlocks'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
      <Route path="/mens">
          <OtherNavbar />
        </Route>
        <Route path="/womens">
        <OtherNavbar />
        </Route>
        <Route path="/about">
        <OtherNavbar />
        </Route>
        <Route path="/news">
        <OtherNavbar />
        </Route>
        <Route path="/account">
        <OtherNavbar />
        </Route>
        <Route path="/">
          <Navbar />
          <MainBanner />
          <Homeblocks />
          <TwoBlocks />
          <Footer />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
