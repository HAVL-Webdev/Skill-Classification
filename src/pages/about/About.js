import React from 'react'
import './style.css'

export default function About() {
  return (
    <div id="home_wrapper">
      <h2>About the Project</h2>
      <div className="about">
        <p>This project is a demo site only. It is part of the requirements for completing our Diploma course at TAFE. </p>
        <p>We adopted part of the basic framework and selected a few data from the Australian Skills Classification (ASC). </p>
        <p>
          See:
          <a href="https://www.nationalskillscommission.gov.au/our-work/australian-skills-classification">
            https://www.nationalskillscommission.gov.au/our-work/australian-skills-classification
          </a>
        </p>
        <p>It is attributed to Australian Skills Classification, National Skills Commission, and Commonwealth of Australia. </p>
        <p>Used under Creative Commons BY 4.0 licence.</p>
      </div>
    </div>
  )
}
