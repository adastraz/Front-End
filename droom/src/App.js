import React from 'react';
import {Router, Route, Switch } from 'react-router-dom'
import Welcome from './components/Welcome'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import EmployerRegForm from './components/Employer/EmployerRegForm'
import EmployeeRegForm from './components/Employee/EmployeeRegForm'
import EmployeeProfile from './components/Employee/EmployeeProfile'
import EmployerProfile from './components/Employer/EmployerProfile'
import EmployerList from './components/Employer/EmployerList'
import EmployeeList from './components/Employee/EmployeeList';
import history from './utils/history'
import PrivateRoute from './components/PrivateRoute'
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route path='/listcompanies' component={EmployeeList} /> 
          <Route path='/list' component={EmployerList} /> {/*Private*/}
          <Route path='/companies/:id' component={EmployerProfile} /> {/*Private*/}
          <Route path='/users/:id' component={EmployeeProfile} /> {/*Private*/}
          <Route path='/employeereg' component={EmployeeRegForm} />
          <Route path='/employerreg' component={EmployerRegForm} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
          <Route path='/' component={Welcome} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
