import React from 'react'

import "./EducationTimeline.scss"

// data
import educationData from '../data/educationData.js'


function EducationTimeline(props) {
    return (
        <div id="timeline-content">
            <ul class="timeline">
                {
                    educationData.map(education => {
                        return (
                            <TimeLineCard education={education} />
                        )
                    })   
                }
            </ul>
        </div>
    )
}

function TimeLineCard(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    })
    
    return (
        <li ref={domRef} className={`event ${isVisible ? 'is-visible' : ''}`} data-date={props.education.date}>
            <div class="header">
                <p>{props.education.location}</p>
                <h3>{props.education.title}</h3>
            </div>
            <p>{props.education.about}</p>
        </li>
    )
}

export default EducationTimeline
