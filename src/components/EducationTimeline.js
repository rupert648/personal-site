import React from 'react'
import styled from 'styled-components'

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
                            <li class="event" data-date={education.date}>
                                <div class="header">
                                    <p>{education.location}</p>
                                    <h3>{education.title}</h3>
                                </div>
                                <p>{education.about}</p>
                            </li>
                        )
                    })   
                }
            </ul>
        </div>
    )
}

export default EducationTimeline
