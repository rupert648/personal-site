import React from 'react'
import styled from 'styled-components'

// data
import educationData from '../data/educationData.js'

const EducationSection = styled.div`
    margin: 20px 10px auto;
    color: white;
    background-color: #002a43;
    border-radius: 10px;
    padding: 10px;
`;

const Date = styled.h3`
    color: #bdbdbd;
    font-weight: 100;
    padding: 10px 0px;
`;

const Location = styled.h3`
    color: orange;
    font-weight: 100;
    padding: 10px 0px;
`;

const About = styled.p`
    font-size: 1rem;
    font-weight: 10;
`;

function EducationTimelineMobile() {
    return (
        <div>
            {
                educationData.reverse().map(education => {
                    return (
                        <EducationSection>
                            <h1>{education.title}</h1>
                            <Date>{education.date}</Date>
                            <About>{education.about}</About>
                            <Location>{education.location}</Location>
                        </EducationSection>
                    )
                })
            }    
        </div>
    )
}

export default EducationTimelineMobile
