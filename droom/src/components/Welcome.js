import React from "react";
import {Link} from "react-router-dom"
import {Jumbotron, Card, CardHeader, CardTitle, Button} from 'reactstrap'

function Welcome() {
  return (
  
      <div className="welcomeContainer">
        <Card className='text-center welcomeCard'>
          <CardTitle className="welcomeTitle" tag="h1">Welcome to Droom!</CardTitle>
          <nav>
            <Button className="welcomeButton"><Link className="welcomeLinks" to="/signin">Sign in</Link></Button>
            <Button className="welcomeButton"><Link className="welcomeLinks" to="/signup">Sign up</Link></Button>
          </nav>
        </Card>
 
      </div>
    
  )
}

export default Welcome
