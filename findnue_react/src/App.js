import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from './components/JS/Navbar'
import OtherNavbar from './components/JS/OtherNavbar';
import MainBanner from './components/JS/MainBanner'
import Homeblocks from './components/JS/Homeblocks'
import TwoBlocks from './components/JS/TwoBlocks'
import Footer from './components/JS/Footer'
import Account from './components/JS/Account'

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
      <Route path="/mens">
      <Navbar />
          <MainBanner />
          
          <Footer />
        </Route>
        <Route path="/womens">
        <Navbar />
          
          <TwoBlocks />
          <Footer />
        </Route>
        <Route path="/about">
        <Navbar />
          <MainBanner />
          
          <Footer />
        </Route>
        <Route path="/news">
        <Navbar />
          <MainBanner />
          
          <Footer />
          </Route>
        <Route path="/account">
        <Navbar />
          <Account />
          <Footer />
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
