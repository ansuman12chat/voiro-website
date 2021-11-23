import React, {useState, useEffect} from 'react';
import Vlogo from '../../images/Voiro_Logo.png'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo,MoblieIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink  } from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo src= {Vlogo} onClick={toggleHome} to='/' alt="Voiro"/>
                    <MoblieIcon onClick={toggle} >
                        <FaBars/>
                    </MoblieIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >ABOUT US</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="product"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >PRODUCT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="service"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >SERVICES</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="career"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >CAREERS</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/reqademo'>REQUEST A DEMO</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>  
            </Nav>
        </>
    );
};

export default Navbar
