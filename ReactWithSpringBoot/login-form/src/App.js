import React, { Component } from 'react';
import './App.css';
import {Route, HashRouter} from 'react-router-dom';
import LoginForm from './loginForm/LoginForm.js';
import RegisterForm from './registerForm/RegisterForm.js'

class App extends Component {
  render() {
    return (
      <HashRouter>
          <div className="pageContainer">
            <Route exact path = "/" component={LoginForm}/>
            <Route  path = "/register" component={RegisterForm}/>
          </div>
      </HashRouter>
    );
  }
}
export default App;
