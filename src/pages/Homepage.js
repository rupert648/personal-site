import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import image from '../assets/ProfilePhoto.jpg'

import './Homepage.css';

const HomePage = styled.section`
`;

const ImageSection = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0f6908fa5e81286213c7211276e6b3d&auto=format&fit=crop&w=1500&q=80);
    background-position: center top;
	background-size:cover;    

`;

const MainTitle = styled.h1`
    color:white;
    width: 40%;
    position: absolute;
    bottom: 6rem;
    left: -1000px;
    font-size: 15vw;

    -webkit-animation: slide1 0.5s forwards;
    -webkit-animation-delay: 2s;
    animation: slide1 0.5s forwards;
    animation-delay: 0.2s;
`; 

const ProfileImage = styled.img`
    position: absolute;
    bottom: -100px;
    right: -1000px;
    border-radius: 8px;
    width: 30vw;

    -webkit-animation: slide2 1s forwards;
    -webkit-animation-delay: 2s;
    animation: slide2 1s forwards;
    animation-delay: 0.2s
`;

const MobileProfileImage = styled.img`
   position: absolute;
   border-radius: 20px;
   bottom: 20rem;
   left: -1000px;
   width: 40%;
   
   -webkit-animation: slideMobile 1s forwards;
   -webkit-animation-delay: 2s;
   animation: slideMobile 1s forwards;
   animation-delay: 0.2s
  
`;

const About = styled.p`

`;

const Experience = styled.p`

`;

const Projects = styled.p`

`;

const Education = styled.p`

`;

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;

    return {
        width,
        height
    }
}

export default function Homepage() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <HomePage>
            <ImageSection>
                {   windowDimensions.width < 600 &&
                    <MobileProfileImage src={image}></MobileProfileImage>}
                <MainTitle>Rupert Carr</MainTitle>
                { windowDimensions.width >= 1000 &&
                    <ProfileImage src={image}></ProfileImage>
                }
            </ImageSection>
            <About>Some stuff about rupert Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis plac</About>
            <Experience />
            <Projects />
            <Education />
        </HomePage>
    )
}
