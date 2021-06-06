import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
   background-color: #002a43;
   color: white;
   margin: auto;
   margin-top: 20px;
   border-radius: 10px;
   width: 80%;
   float: center;
   
`;

const TitleArea = styled.div`
    padding: 10px 20px;
    width: 100%;
`;

const CompanyName = styled.h1`
    font-style: normal;
    font-weight: normal;
    color: #BDBDBD;    
`;

const RoleTitle = styled.h1`
    margin: 0;
    font-weight: bold;
    font-size: 1rem;
`;

const Date = styled.h2`
    margin: 0 0 3px 0;
    font-weight: 200;
    color: orange;
`;

const DescriptionArea = styled.div`
    padding: 20px 20px;
`;

const Description = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    text-align: left;
`;

function MobileExperienceCard(props) {
    return (
        <Card>
           <TitleArea>
            <CompanyName>{props.experience.company}</CompanyName>
            <RoleTitle>{props.experience.title}</RoleTitle>
            <Date>{props.experience.date}</Date>
           </TitleArea> 
           <hr></hr>
           <DescriptionArea>
               <Description>{props.experience.about}</Description>
           </DescriptionArea>
        </Card>
    )
}

export default MobileExperienceCard
