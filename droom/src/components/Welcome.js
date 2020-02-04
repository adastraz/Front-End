  import React from "react";
  import {Link} from "react-router-dom"

  function Welcome() {
    return (
        <div className="welcome">
            <h1>Welcome to Droom!</h1>
            <nav>
                <Link to="/signin">Sign in</Link>
                <Link to="/signup">Sign up</Link>
            </nav>
        </div>
    )
  }

  export default Welcome