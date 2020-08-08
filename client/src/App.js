import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from './components/JS/Navbar';
import OtherNavbar from './components/JS/OtherNavbar';
import MainBanner from './components/JS/MainBanner';
import Homeblocks from './components/JS/Homeblocks';
import TwoBlocks from './components/JS/TwoBlocks';
import Footer from './components/JS/Footer';
import Account from './components/JS/Account';
import BlackNavBar from './components/JS/BlackNavBar';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""}
  }

  callAPI(){
    fetch("http://localhost:1739/")
      .then( res => res.text())
      .then(res => this.setState({apiResponse: res}))
  }

  componentWillMount(){
    this.callAPI()
  }

render(){
  return (
    <Router>
      <div className="App">
      <p>{this.state.apiResponse}</p>
      <Switch>
      <Route path="/mens">
          <BlackNavBar />
          <MainBanner />
          <Footer />
        </Route>
        <Route path="/womens">
        <BlackNavBar />
          <TwoBlocks />
          <Footer />
        </Route>
        <Route path="/about">
        <BlackNavBar />
          <MainBanner />
          <Footer />
        </Route>
        <Route path="/news">
        <BlackNavBar />
          <MainBanner />
          
          <Footer />
          </Route>
        <Route path="/account">
        <BlackNavBar />
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
}

export default App;
