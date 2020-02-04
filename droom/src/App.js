import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './components/Welcome'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import EmployerRegForm from './components/Employer/EmployerRegForm'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/testing' component={EmployerRegForm} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
          <Route path='/' component={Welcome} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
