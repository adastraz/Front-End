import React from 'react';
import {Router, Route, Switch } from 'react-router-dom'
import Welcome from './components/Welcome'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import EmployerRegForm from './components/Employer/EmployerRegForm'
import EmployeeRegForm from './components/Employee/EmployeeRegForm'
import EmployeeProfile from './components/Employee/EmployeeProfile'
//import EmployeeProfile from './components/Employer/EmployerProfile'
import history from './utils/history'
import EmployerProfile from './components/Employer/EmployerProfile';
import Header from './components/Header';


function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/company/:companyid' component={EmployerProfile} /> {/*Private*/}
          <Route path='/user/:userid' component={EmployeeProfile} /> {/*Private*/}
          <Route path='/employeereg' component={EmployeeRegForm} />
          <Route path='/employerreg' component={EmployerRegForm} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
          <Route path='/' component={Welcome} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
