import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom';

import technologyColors from '../data/technologyColors'

import "./ProjectCard.css"

const TechnologiesArea = styled.div`
    display: block-inline;
    margin-left: 10px;
`;

const TechnologyItem = styled.div`
    font-size: .9rem;
    display: inline-flex;
    background: #D8D8D8;
    border-radius: 3px;
    margin: 15px 5px; 
    span {
        border-radius: 5px;
        padding: 3px 5px;
    };
`;

const TechnologyBlock = styled.span``;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: light;
    color: light-grey;
    margin: 0px 15px;
    padding-top: 20px;
`;

const GithubButton = styled.div`
    margin: 5px 15px;
    font-weight: 300;
`

const CannotLink = styled.div`
    margin: 5px 15px;
    font-weight: light;
    color: red;
`;

const Status = styled.p`
    margin-left: 5px;
    font-weight: 300;
    text-transform: uppercase;
    color: orange;
`;

const AboutSection = styled.p`
    font-size: 0.9rem;
    margin: 5px 15px;
    margin-bottom: 20px;
`;


function ProjectCard(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();

    const history = useHistory();

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);

    const ImageSection = styled.section`
        width: 100%;
        height: 30vh;
        background-image: url(${props.project.image});
        background-position: center top;
        background-size:cover;   
    `;

    const redirr = () => {
        history.push(`/project/${props.project.id}`)
    }

    return (
        <div onClick={redirr} className={`project-card ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            <div className="card-front">
            <ImageSection/>
            <TechnologiesArea>
                {
                    props.project.technologies.map(technology => {

                        return <TechnologyItem><TechnologyBlock style={{backgroundColor: technologyColors[technology]}}>{technology}</TechnologyBlock></TechnologyItem>
                        
                    })   
                }
                <Status style={{color:props.project.completed ? "green": "orange"}}>{props.project.status}</Status>
            </TechnologiesArea>
            <Title>{props.project.title}</Title>
            <div>
            {
                props.project.github !== "" ? 
                    <GithubButton><a style={{color:"green", textDecoration:"none"}} href={props.project.github} rel="noreferrer" target="_blank"><p>Github</p></a></GithubButton> :
                    <CannotLink><p>Github Unavailable</p></CannotLink>
            }</div>
            </div>
               <AboutSection>{props.project.about}</AboutSection> 
        </div>
    )
}


export default ProjectCard
