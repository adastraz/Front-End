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
 


function Header() {
        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => setIsOpen(!isOpen);
      
        return (
          <div>
            <Navbar style={{display: 'flex', padding: '.5rem 3rem .5rem 3rem', backgroundColor: '#ff00f0'}} light expand="">
              <NavbarBrand href="/"><img src={require("./img/Icon1.png")} alt='logo'/></NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav style={{display: 'flex', alignItems: 'flex-end'}}className="mr-auto" navbar>
                  <NavItem>
                    <NavLink style={{color:'white'}}href="">My Profile</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{color:'white'}}href="">Start Matching</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
}

export default Header;