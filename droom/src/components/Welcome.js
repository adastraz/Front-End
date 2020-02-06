import React from "react";
import {Link} from "react-router-dom"
import {Jumbotron, Card, CardHeader, Button} from 'reactstrap'
import HeaderWelcome from './HeaderWelcome'

function Welcome() {
  return (
    <div className="welcome">
      <HeaderWelcome />
      <Jumbotron className="Jumbotron">
        <Card body inverse color="info" className='text-center welcomeCard'>
          <CardHeader tag="h1">Welcome to Droom!</CardHeader>
          <nav>
            <Button className="welcomeButton"><Link className="welcomeLinks" to="/signin">Sign in</Link></Button>
            <Button className="welcomeButton"><Link className="welcomeLinks" to="/signup">Sign up</Link></Button>
          </nav>
        </Card>
 
      </Jumbotron>
    </div>
  )
}

export default Welcome
