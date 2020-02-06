import React, {useState} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
 import { Link } from 'react-router-dom'
 import { connect } from "react-redux"



function EmployerHeader(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="Navbar" light expand="">
        <NavbarBrand href="/"><img src={require("../img/Icon1.png")} alt='logo'/></NavbarBrand>
        <NavbarToggler className="hamburger" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto Nav" navbar>
            <NavItem>
              <NavLink >
                  <Link className="navLink" to={`/companies/${props.user.id}`}>My Profile</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                  <Link className="navLink" to="/list">Start Matching</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        state: state.user,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(EmployerHeader);