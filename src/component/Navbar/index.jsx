import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Icon, CloseIcon, NavLogoMobile } from './NavbarElements'
import { BrowserRouter as Router } from 'react-router-dom'

const Navbar = ({ toggle, isOpen }) => {
    return (
        <>
            <Router>
                <Nav>
                    <Container>
                        <NavbarContainer>
                            <NavLogo
                                to="home"
                                duration={700}
                                smooth={true}
                                spy={true}
                                exact='true'
                                offset={70}
                            >
                                csy.
                        </NavLogo>
                            <NavLogoMobile
                                to="home"
                                duration={700}
                                smooth={true}
                                spy={true}
                                exact='true'
                                offset={70}
                            >
                                b.
                        </NavLogoMobile>
                            <NavMenu>
                                <NavItem>
                                    <NavLinks to="home"
                                        duration={700}
                                        smooth={true}
                                        spy={true}
                                        exact='true'
                                        offset={-70}>Home
                                    </NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks
                                        to="about"
                                        duration={700}
                                        smooth={true}
                                        spy={true}
                                        exact='true'
                                        offset={-70}
                                    >About Us</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks
                                        to="discover"
                                        duration={700}
                                        smooth={true}
                                        spy={true}
                                        exact='true'
                                        offset={-70}
                                    >Discover</NavLinks>
                                </NavItem>
                            </NavMenu>
                            {/* <SearchBox>
                            <SearchTxt placeholder="Search here..." />
                            <SearchBtn>
                                <IconSearch />
                            </SearchBtn>
                        </SearchBox> */}
                            {/* <SearchResult>
                        <TitleResult>
                            Product
                        </TitleResult>
                        <DescResult>
                            Wardah Beauty Skincare
                        </DescResult>
                    </SearchResult> */}
                            <Icon isOpen={isOpen} onClick={toggle}>
                                <CloseIcon />
                            </Icon>
                            <MobileIcon isOpen={isOpen} onClick={toggle}>
                                <FaBars />
                            </MobileIcon>
                        </NavbarContainer>
                    </Container>
                </Nav>
            </Router>
        </>
    )
}

export default Navbar
