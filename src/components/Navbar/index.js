import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavbarElements';

const Navbar = () => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='/'>title of site</NavLogo>
                  <MobileIcon>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="about">About</NavLinks>
                      </NavItem>
                  </NavMenu>
              </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar;
