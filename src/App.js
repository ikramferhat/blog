import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Layout } from './components/Layout/layout';
import Home from "./Pages/HomePage/home";
import Contact from "./Pages/ContactPage/contact";
import Signup from "./Pages/SignUpPage/signUp";
import Login from "./Pages/LoginPage/login";
import Write from "./Pages/WritePage/write";
import About from './Pages/AboutPage/about';
import './App.css';


function App() { 
  return (  
    <div className="App">
    <Router>
    <Layout> 
    <Switch>
      <Route path="/" component={Home} exact>
        <Home />
      </Route>
      <Route path="/contact" component={Contact} exact>
        <Contact />
      </Route>
      <Route path="/write" component={Write} exact>
        <Write />
      </Route>
      <Route path="/about" component={About} exact>
        <About />
      </Route>
      <Route path="/signup" component={Signup} exact>
        <Signup />
      </Route>
      <Route path="/login" component={Login} exact>
        <Login />
      </Route>
    </Switch>
    </Layout>
    </Router>
    </div>
    
    
  );
}

export default App;

