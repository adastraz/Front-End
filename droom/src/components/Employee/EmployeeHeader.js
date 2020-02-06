import React, {useState} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  import {connect} from 'react-redux'
import {Link} from 'react-router-dom'



function EmployeeHeader(props) {
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
                    <NavLink style={{color:'white'}}href="">
                        <Link to={`/users/${props.user.id}`}>My Profile</Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{color:'white'}}href="">
                        <Link to="/listcompanies">Start Matching</Link>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
}

const mapStateToProps = state => {
    return{
        isLoading: state.isLoading,
        user: state.user,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(EmployeeHeader);