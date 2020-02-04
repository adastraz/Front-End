import React from 'react';
import {Router, Route, Switch } from 'react-router-dom'
import Welcome from './components/Welcome'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import EmployerRegForm from './components/Employer/EmployerRegForm'
import history from './utils/history'

function App() {
  return (
    <Router history={history}>
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
