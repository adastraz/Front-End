import React, {useState} from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../actions'


function EmployeeHeader(props) {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Navbar className="Navbar" light expand="">
        <NavbarBrand href="/"><img src={require("../img/Icon1.png")} alt='logo'/></NavbarBrand>
        <NavbarToggler className="hamburger" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto Nav" navbar>
            <NavItem>
              <NavLink>
                <Link className='navLink' to={`/users/${props.user.id}`}>My Profile</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className='navLink' to="/listcompanies">Start Matching</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className='navLink' onClick={props.logout}>Logout</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}

const mapStateToProps = state => {
  return{
    isLoading: state.isLoading,
    user: state.user,
    error: state.error
  }
}

export default connect(mapStateToProps, { logout })(EmployeeHeader)