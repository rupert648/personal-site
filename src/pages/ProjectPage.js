import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import projectData from '../data/projectData'
import technologyColors from '../data/technologyColors'


const Page = styled.div`
    padding-top: 100px;
`;

const TitleText = styled.h1`
    width: 100%;
    color: black;
`;

const TechnologyItem = styled.div`
    font-size: 2rem;
    display: inline-flex;
    background: #D8D8D8;
    border-radius: 3px;
    margin: 15px 5px; 
    span {
        border-radius: 5px;
        padding: 3px 5px;
    };
`;

const Subtitle = styled.h1`
    font-size: 3rem;
    margin: 3rem 0 1rem 0;
`;

const SkillTitle = styled.h3`
    font-weight: bold;
    font-size: 1.6rem;
    letter-spacing: 3px;
`;

const SkillContent = styled.p`
    font-size: 1rem;
    text-align: justify;
    line-height: 1.8rem;
`;

const GithubButton = styled.a`
    color: white;
    height: 100px;
    padding: 1.5em;
    margin: 1em auto;
    background-color: #00466f;
    border: none;
    border-radius: 3px;
    letter-spacing: 0.5em;
    cursor: pointer;
    text-decoration: none;

    transition: all 0.2s cubic-bezier(.4,0,.2,1);

    &:hover {
        letter-spacing: 0.6em;
        background-color: #002a43;
    }
`;

const TechnologyBlock = styled.span``;



function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;

    return {
        width,
        height
    }
}

function ProjectPage() {
    const [project, setProject] = useState(null);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        
    }, [])

    const {id} = useParams();

    useEffect(() => {
        let currentProject;

        projectData.forEach(project => {
            if (project.id === id) {
                currentProject = project;
            }
        })

        if (currentProject) {
            setProject(currentProject)
        }

        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [id])


    const ImageSection = styled.div`
        width: 100%;
        height: 50vh;
        background-image: url(${project ? project.image : ''});
        background-position: center top;
        background-size:cover;    
    `;

    return (
        <div>
        { project && 
            <Page>
                <ImageSection />
                <hr />
                <div style={{width: windowDimensions.width < 600 ? "80%" : "60%", margin: 'auto'}}>
                <TitleText
                    style={{fontSize: windowDimensions.width < 900 ? "3rem" : "5rem"}}
                >   
                    {project.title}
                </TitleText>
                    {
                        project.technologies.map(technology => {

                            return <TechnologyItem><TechnologyBlock style={{backgroundColor: technologyColors[technology]}}>{technology}</TechnologyBlock></TechnologyItem>

                        })
                    }
                    <Subtitle>Overview</Subtitle>
                    <SkillContent>{project.about}</SkillContent>
                    {
                        project.github && 
                        <div style={{marginTop:"30px"}}><GithubButton href={project.github} target="_blank">Github</GithubButton></div>
                    }
                    <Subtitle>Key Skills Utilised and Developed</Subtitle>
                    <div style={{marginBottom:"20px"}}>
                    {
                        project.skills.map(skill => {
                            let { skillName, aboutSkill } = skill;

                            return (
                                <div style={{width: "100%", margin: "auto", marginTop:"20px"}}>
                                    <SkillTitle>{skillName}</SkillTitle>
                                    <SkillContent>{aboutSkill}</SkillContent>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </Page> 
        }
        </div>
    )
}

export default ProjectPage
