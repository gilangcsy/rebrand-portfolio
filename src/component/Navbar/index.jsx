import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Icon, CloseIcon, NavLogoMobile, ThemeButton, Moon, Sun } from './NavbarElements'
import { BrowserRouter as Router } from 'react-router-dom'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const Navbar = ({ toggle, isOpen, theme, isDark }) => {
    return (
        <>
            <Router>
                <Nav isDark={isDark}>
                    <Container>
                        <NavbarContainer>
                            <NavLogo
                                to="home"
                                duration={700}
                                smooth={true}
                                spy={true}
                                exact='true'
                                offset={70}
                                isDark={isDark}
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
                                isDark={isDark}
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
                                        offset={-70}
                                        isDark={isDark}>Home
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
                                        isDark={isDark}
                                    >Projects</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks
                                        to="discover"
                                        duration={700}
                                        smooth={true}
                                        spy={true}
                                        exact='true'
                                        offset={-70}
                                        isDark={isDark}>
                                        Contact
                                    </NavLinks>
                                </NavItem>
                                <BootstrapSwitchButton checked={true} width={100} onlabel={<Moon />} offlabel={<Sun />} onstyle='dark' onChange={theme} />
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
                            {/* <Icon isOpen={isOpen} onClick={toggle}>
                                <CloseIcon />
                            </Icon> */}
                            {/* <MobileIcon isOpen={isOpen} onClick={toggle}>
                                <FaBars />
                            </MobileIcon> */}
                        </NavbarContainer>
                    </Container>
                </Nav>
            </Router>
        </>
    )
}

export default Navbar
