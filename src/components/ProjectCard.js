import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import "./ProjectCard.css"

const Card = styled.div`
   
`;

const ImageSection = styled.section`
    width: 100%;
    height: 30vh;
    background-image: url(https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0f6908fa5e81286213c7211276e6b3d&auto=format&fit=crop&w=1500&q=80);
    background-position: center top;
	background-size:cover;   
`;

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

const GithubButton = styled.a`
    margin: 15px;
    font-weight: light;
    color: light-grey;
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

const technologyColors = {
    Actix: "#BAD5F5",
    VueJS: "#F2C986",
    Postgres: "#E1C1C1",
    Haskell: "#EADD86",
    React: "#AFEAE5",
    NodeJS: "#BAD5F5",
    MongoDB: "#F2C986",
    MariaDB: "#F2C986",
    SemanticUI: "#AFEAE5",
    StyledComponents: "#E1C1C",
    SASS: "#F2C986",
}

function ProjectCard(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);

    return (
        <div className={`project-card ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            <div class="card-front">
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
                    <GithubButton></GithubButton> :
                    <CannotLink><p>Cannot link to github</p></CannotLink>
            }</div>
            </div>
               <AboutSection>{props.project.about}</AboutSection> 
        </div>
    )
}


export default ProjectCard
