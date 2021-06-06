import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Slide from 'react-reveal/Slide';

// components
import ExperienceCard from '../components/ExperienceCard'
import MobileExperienceCard from '../components/MobileExperienceCard'
import OtherExperienceCard from '../components/OtherExperienceCard'
import MobileOtherExperienceCard from '../components/MobileOtherExperienceCard'

// data
import experience from '../data/experienceData'

const RelevantExperience = styled.h1`
    padding: 5rem 2rem 0 2rem;
    color: black;
    font-size: 3rem;
`;

const RelevantExperienceArea = styled.div`
    padding-left: 2rem;
`;

const OtherExperience = styled.h1`
    padding: 5rem 2rem 0 2rem;
    color: black;
    font-size: 3rem;
`;

const OtherExperienceArea = styled.div`
    padding-left: 2rem;
`;

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;

    return {
        width,
        height
    }
}

function Experience() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <div>
            <RelevantExperience>Relevant Experience</RelevantExperience>
            <RelevantExperienceArea>
            {    experience.relevantExperience.map(experience => {
                    return (
                        windowDimensions.width > 600 ?
                            <Slide left><ExperienceCard float="left" experience={experience} /></Slide> :
                            <Slide left><MobileExperienceCard experience={experience} /></Slide>
                    );
                })
            }
            </RelevantExperienceArea>
            <OtherExperience>Other Experience</OtherExperience>
            
            <OtherExperienceArea>
            {
                experience.otherExperience.map(experience => {
                    return (
                        windowDimensions.width > 800 ? 
                            <Slide left><OtherExperienceCard experience={experience} /></Slide> :
                            <Slide left><MobileOtherExperienceCard experience={experience} /></Slide>
                    )
                })
            }
            </OtherExperienceArea>
        </div>
    )
}

export default Experience
