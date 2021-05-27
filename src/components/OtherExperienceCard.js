import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 60%;
    margin: 20px 5px;
    background-color: #003a5d;
    border-radius: 10px;
    color: white;

    box-shadow: 10px 10px black;

    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }
`;

const TextArea = styled.div`
    padding: 20px 20px;
`;

const Date = styled.p`
    color: orange;
    font-size: 1rem;
`;

const Title = styled.h1`
    color: white;
    font-size: 3rem;
`;

const Company = styled.h3`
    color: #90bed1;
    font-weight: lighter;
    font-size: 1rem;
    letter-spacing: 3px;
`;

function OtherExperienceCard(props) {
    return (
        <Card>
            <TextArea>
            <Date>{props.experience.date}</Date>
            <Title>{props.experience.title}</Title>
            <Company>{props.experience.company}</Company>
            </TextArea>
        </Card>
    )
}

export default OtherExperienceCard
