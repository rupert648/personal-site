import React from 'react'
import styled from 'styled-components'
import {AiOutlineDownload} from 'react-icons/ai'

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
    line-height: 1.8;
    text-decoration: none;
    transition: ease .25s;

    &:before {
        content: none;
    }
`;

const Download = styled.a`
    color: white;
    font-size: 2rem;
    margin: 0px;
    line-height: 1.8;
    cursor: pointer;
`;

const DownloadText = styled.p`
    font-size: 1rem;
    display: inline-block;
    padding-left: 10px;
`;

function Footer(props) {
    
    const FooterArea = styled.footer`
        position: relative;
        margin-top: ${props.marginTop};
        width: 100%;
        background-color: #001020; 
        color: white;
        box-sizing: border-box;
        text-align: left;
        padding: 45px 50px;
    `;
    return (
        <FooterArea>
            <FooterLeft>
                <Download href='/files/RupertCarrCV.pdf' target="_blank" download><AiOutlineDownload></AiOutlineDownload><DownloadText>Download my CV</DownloadText></Download>
                <FooterLinks>
                    {/* <FooterLink1 className="link1">Home</FooterLink1>
                    <FooterLink>About</FooterLink>
                    <FooterLink>Experience</FooterLink>
                    <FooterLink>Education</FooterLink>
                    <FooterLink>See CV</FooterLink> */}
                </FooterLinks>
                <Name>Rupert Carr</Name>
            </FooterLeft>
        </FooterArea>
    )
}

export default Footer
