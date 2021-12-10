import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './cmps/Header/Header'
import { Home } from './pages/Home/Home'
import { Contact } from './pages/Contact/Contact';
import { ContactDetails } from './pages/ContactDetails/ContactDetails';
import { ContactEdit } from './pages/ContactEdit/ContactEdit';
import { Signup } from './pages/Signup/Signup';
import { Stats } from './pages/Stats/Stats'
import './App.scss'
import userService from './services/userService.js'
function App() {
  
  function logout() {
    userService.logout()
    this.history.push('signup')
  }

  return (
    <Router>
      <Header logout={logout} />
      <div className="app ">
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={ContactEdit} path="/contact/edit/:id" />
          <Route component={ContactEdit} path="/contact/edit" />
          <Route component={ContactDetails} path="/contact/:id" />
          <Route component={Contact} path="/contact" />
          <Route component={Signup} path="/signup" />
          <Route component={Stats} path="/stats" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
