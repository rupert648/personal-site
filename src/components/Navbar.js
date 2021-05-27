import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import {BsFillEnvelopeOpenFill} from "react-icons/bs"
import {AiFillGithub, AiFillLinkedin, AiFillHome} from "react-icons/ai"
import {useHistory} from 'react-router-dom';

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
    padding-left: 3rem;
    text-decoration: none;

    cursor: pointer;
`;


const NavLinks = styled.div`
    height: 65px;
    float: right;
`;

const NavLinkList = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const NavLinkItem = styled.li`
    height: 65px;
    padding: 0;
    padding-right: 3rem;
`;

const NavLinkText = styled.a`
    text-decoration: none;
    color: white;
    line-height:65px;
    font-size: 1.7rem;
    &:hover {
        color: orange;
    }
`;

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;

    return {
        width,
        height
    }
}



function Navbar() {
    const [colorChange, setColorchange] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const history = useHistory();

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])


    const changeNavBarColor = () => {
        if (window.scrollY >= (windowDimensions.width / 2)) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };

    const homeButton = () => {
        if (window.location.pathname !== "/") {
            // redirrect to homepage ('/')
            history.push('/');
        } else {
            scrollToTop();
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    window.addEventListener('scroll', changeNavBarColor);

    return (
        <Nav className={colorChange || window.location.pathname !== "/" ? 'navbar colorChange' : 'navbar'}>
            <Logo onClick={() => homeButton()}>
                <NavLinkText><AiFillHome /></NavLinkText>
            </Logo>
            <NavLinks>
                <NavLinkList>
                    {/* will need to redirrect to email form */}
                    {/* <NavLinkItem><NavLinkText href=""><BsFillEnvelopeOpenFill/></NavLinkText></NavLinkItem> */}
                    <NavLinkItem><NavLinkText href="https://github.com/rupert648/" target="_blank"><AiFillGithub/></NavLinkText></NavLinkItem>
                    <NavLinkItem><NavLinkText href="https://www.linkedin.com/in/rupert-carr-4b88241b6/" target="_blank"><AiFillLinkedin/></NavLinkText></NavLinkItem>
                </NavLinkList>
            </NavLinks>
        </Nav>
    )
}

export default Navbar
