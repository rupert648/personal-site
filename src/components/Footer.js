import React from 'react'
import styled from 'styled-components'

const FooterArea = styled.footer`
   position: relative;
   margin-top: 1050px;
   width: 100%;
   background-color: #001020; 
   color: white;
   box-sizing: border-box;
   text-align: left;
   padding: 45px 50px;
`;

const FooterLeft = styled.div`
    font-size: 14px;
    margin: 0;
`;

const Name = styled.p`
    color: #8f9296;
    font-size: 14px;
    margin: 0px;
`;

const FooterLinks = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 10px;
    padding: 0;
    transition: ease .25s;
`;

const FooterLink = styled.a`
    display; inline-block;
    line-height: 1.8;
    text-decoration: none;
    transition: ease .25s;

    &:before {
        content: "•";
        padding-left: 5px;
        display: inline-block;
        padding-right: 5px;
    }
`;

const FooterLink1 = styled.a`
    display; inline-block;
    line-height: 1.8;
    text-decoration: none;
    transition: ease .25s;

    &:before {
        content: none;
    }
`;

function Footer() {
    return (
        <FooterArea>
            <FooterLeft>
                <FooterLinks>
                    <FooterLink1 className="link1">Home</FooterLink1>
                    <FooterLink>About</FooterLink>
                    <FooterLink>Experience</FooterLink>
                    <FooterLink>Education</FooterLink>
                </FooterLinks>
                <Name>Rupert Carr</Name>
            </FooterLeft>
        </FooterArea>
    )
}

export default Footer
