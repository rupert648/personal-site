import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import image from '../assets/ProfilePhoto.jpg'
import experience from '../data/experienceData'
import ExperienceCard from "../components/ExperienceCard"
import './Homepage.css';
import MobileExperienceCard from '../components/MobileExperienceCard'
import Slide from 'react-reveal/Slide';

import "./FancyButton.scss"

const HomePage = styled.section`
`;

const ImageSection = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0f6908fa5e81286213c7211276e6b3d&auto=format&fit=crop&w=1500&q=80);
    background-position: center top;
	background-size:cover;    

`;

const TitleText = styled.div`
     color:white;
    width: 40%;
    position: absolute;
    left: -1000px;
    bottom: 4rem;   

    -webkit-animation: slide1 0.5s forwards;
    -webkit-animation-delay: 2s;
    animation: slide1 0.5s forwards;
    animation-delay: 0.2s;
`;

const MainTitle = styled.h1`
    font-size: 12vw;
`; 

const SubTitle = styled.h1`
    font-size: 3vw;
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

const ExperienceTitle = styled.h1`
    font-size: 3vw;
    text-align: right;
    padding: 0 10px;
`;

const ExperienceArea = styled.div`
    display: block;
    width:100%;
`;

const FancyButton = styled.div`
    width: 100%;
    margin: auto;
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

    const AboutTitle = styled.h1`
        font-size: 3vw;
        padding: 0 10px;
        margin-top: ${windowDimensions.width < 1000 ? '20px' : '100px'};
    `;
    const About = styled.p`
        font-size: ${windowDimensions.width < 1000 ? '3vw': '1.5vw'};
        text-align: justify;
        padding: 0px 10px;
    `;
    return (
        <HomePage>
            <ImageSection>
                {   windowDimensions.width < 600 &&
                    <MobileProfileImage src={image}></MobileProfileImage>}
                    <TitleText>
                        <MainTitle>Rupert Carr</MainTitle>
                        <SubTitle>Software Engineer • Computer Science Major</SubTitle>
                    </TitleText>
                { windowDimensions.width >= 1000 &&
                    <ProfileImage src={image}></ProfileImage>
                }
            </ImageSection>
            <AboutTitle>About</AboutTitle>
            <About>
                An undergraduate majoring in Computer Science, whilst also having completed modules
in advanced physics and mathematics at The University of St Andrews. I have an enquiring
mind and I am able to quickly grasp complex issues ranging from scientific to interpersonal
issues with students. I am a logical, conscientious and hard worker
pursuing a career in the technology industry.
            </About>
            <ExperienceTitle>Relevant Experience</ExperienceTitle>
            <ExperienceArea>
            {
                experience.relevantExperience.map(experience => {
                    return (
                        windowDimensions.width > 600 ?
                            <Slide left><ExperienceCard experience={experience} /></Slide> :
                            <Slide left><MobileExperienceCard experience={experience} /></Slide>
                    );
                })
            }
            </ExperienceArea>
            {/* much easier to make this fancy in sass :)*/
                // will redirrec to an "Experiences page" (eventually)
            }
            <FancyButton id="container">
                <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Further Experience</span>
                </button>
            </FancyButton>
            <Education>Education</Education>
        </HomePage>
    )
}
