import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsFillEnvelopeOpenFill} from "react-icons/bs"
import {AiFillGithub, AiFillLinkedin, AiFillHome} from "react-icons/ai"

import './Navbar.css'

const Nav = styled.nav`
    width: 100%;
    height: 65px;
    position: fixed;
    line-height: 65px;
    text-align: center;
    z-index: 100; 
`;

const Logo = styled.div`
    float: left;
    width: auto;
    height: auto;
    padding-left: 3rem;font-style: italic;
    text-decoration: none;
`;


const NavLinks = styled.div`
    height: 65px;
    float: right;
`;

const NavLinkList = styled.ul`
    width:100%;
    height:65px;
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const NavLinkItem = styled.li`
    width: auto;
    height: 65px;
    padding: 0;
    padding-right: 3rem;
`;

const NavLinkText = styled.a`
    text-decoration: none;
    color: white;
    line-height:65px;
    font-size: 2rem;
    &:hover {
        color: orange;
    }
`;

function Navbar() {
    const [colorChange, setColorchange] = useState(false);

    const changeNavBarColor = () => {
        if (window.scrollY >= 1000) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    window.addEventListener('scroll', changeNavBarColor);

    return (
        <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
            <Logo onClick={() => scrollToTop()}>
                <NavLinkText><AiFillHome /></NavLinkText>
            </Logo>
            <NavLinks>
                <NavLinkList>
                    {/* will need to redirrect to email form */}
                    <NavLinkItem><NavLinkText href=""><BsFillEnvelopeOpenFill/></NavLinkText></NavLinkItem>
                    <NavLinkItem><NavLinkText href="https://github.com/rupert648/"><AiFillGithub/></NavLinkText></NavLinkItem>
                    <NavLinkItem><NavLinkText href="https://www.linkedin.com/in/rupert-carr-4b88241b6/"><AiFillLinkedin/></NavLinkText></NavLinkItem>
                </NavLinkList>
            </NavLinks>
        </Nav>
    )
}

export default Navbar
