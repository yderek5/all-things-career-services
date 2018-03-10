import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';

// import components
import Navbar from './components/Navbar';
import TitleBanner from './components/TitleBanner';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/ContactUs';
import Individual from './components/ServicesIndividual';
import Training from './components/ServicesTraining';
import Consulting from './components/ServicesConsulting';
import Articles from './components/ResourcesArticles';
import Worksheets from './components/ResourcesWorksheets';
import Prep from './components/ResourcesPrep';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('jwtToken');
  }

  render() {
    return (
      <MuiThemeProvider>
      <Router>
        <div className='root'>
          <Navbar />

          <Switch>
            <Route exact path='/'>
            <div className="wrapper">
              <TitleBanner>
                All Things Career Services
              </TitleBanner>
              <Home />
            </div>
            </Route>

            <Route exact path ='/about'>
              <div className="wrapper">
              <TitleBanner>
                About
              </TitleBanner>
              <About />
              </div>
            </Route>

            <Route exact path='/contact'>
              <div className="wrapper">
                <TitleBanner>
                  Contact
                </TitleBanner>
                <Contact />
              </div>
            </Route>

            <Route exact path='/services/individual'>
              <div className="wrapper">
                <TitleBanner>
                  Individual Services
                </TitleBanner>
                <Individual />
              </div>
            </Route>

            <Route exact path='/services/training'>
              <div className="wrapper">
                <TitleBanner>
                  The Leadership Learning Series
                </TitleBanner>
                <Training />
              </div>
            </Route>

            <Route exact path='/services/consulting'>
              <div className="wrapper">
                <TitleBanner>
                  Consulting Services
                </TitleBanner>
                <Consulting />
              </div>
            </Route>


            <Route exact path='/resources/articles'>
              <div className="wrapper">
                <TitleBanner>
                  Articles & Video
                </TitleBanner>
                <Articles />
              </div>
            </Route>

            <Route exact path='/resources/worksheets'>
              <div className="wrapper">
                <TitleBanner>
                  Worksheets
                </TitleBanner>
                <Worksheets />
              </div>
            </Route>

            <Route exact path='/resources/prep'>
              <div className="wrapper">
                <TitleBanner>
                  Prep
                </TitleBanner>
                <Prep />
              </div>
            </Route>

            <Route exact path='/register'>
              <div className="wrapper">
                <TitleBanner>
                  Register
                </TitleBanner>
                <Register />
              </div>
            </Route>

            <Route exact path='/login'>
              <div className="wrapper">
                <TitleBanner>
                  Login
                </TitleBanner>
                <Login />
              </div>
            </Route>

         </Switch>

         <Footer />
        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
