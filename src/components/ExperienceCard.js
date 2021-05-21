import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    background-color: #002a43;
    color: white;
    margin: 5px 0px;
    border-radius: 10px;
    width:90%;
    float:right;

    display: flex;
`;

const TitleArea = styled.div`
    padding: 5px 20px;
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
    font-size: 3vw;
`;

const Date = styled.h2`
    margin: 0 0 3px 0;
    font-weight: 200;
    color: orange;
`;

const VDivider = styled.div`
    border-left: 2px solid  #BDBDBD;
`;

const DescriptionArea = styled.div`
    padding: 2px 20px;
    width:100%;
`;

const Description = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 1.5vw;
    text-align: left;
`;

function ExperienceCard(props) {
    return (
       <Card>
           <TitleArea>
               <CompanyName>{props.experience.company}</CompanyName>
               <RoleTitle>{props.experience.title}</RoleTitle>
               <Date>{props.experience.date}</Date>
           </TitleArea>
           <VDivider />           
           <DescriptionArea>
               <Description>{props.experience.about}</Description>
           </DescriptionArea>         
       </Card> 
    )
}

export default ExperienceCard
