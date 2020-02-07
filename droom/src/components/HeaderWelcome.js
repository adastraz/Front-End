import React, {useState} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
 import {Link} from 'react-router-dom'


function HeaderWelcome() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="Navbar" light expand="">
        <NavbarBrand href="/"><img src={require("./img/Icon1.png")} alt='logo'/></NavbarBrand>
        <NavbarToggler className="hamburger" onClick={toggle} />
      </Navbar>
    </div>
  );
}

export default HeaderWelcome;