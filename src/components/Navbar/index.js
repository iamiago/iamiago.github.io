import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>  I   </NavLogo>
                    <MobileIcon onClick ={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"> About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="experience"> Experience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="work"> Work</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"> Contact</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/resume">Resume</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
