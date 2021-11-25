import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/Home';
import Foot from './Components/Foot';
import Nav from './Components/Nav';
import Client from './Components/Client';
import About from './Components/About';
import Count from './Components/Count';
import Service from './Components/Service';
import CTA from './Components/CTA';
import Testimonial from './Components/Testimonial';

import Portfolio from './Components/Portfolio';
import Team from './Components/Team';
import Price from './Components/Price';
import FAQ from './Components/FAQ';
import Contact from './Components/Contact';


import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'; 

import './assets/img/apple-touch-icon.png';
import './assets/img/favicon.png';
import './assets/img/team/team-2.jpg';


import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';




ReactDOM.render(
  <React.StrictMode>
    
    <Router>
    
      <Switch>
        <Route exact path="/">
            <Nav/>
            <Home/>
           <Client/>
            <About/>
            <Count/>
            <Service/>
            <CTA/>
            <Portfolio/>
            <Testimonial/>
            <Team/>
            <Price/>
            <FAQ/>
            <Contact/>
            <Foot/>
           

        </Route>
      </Switch>
    </Router>
    
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();