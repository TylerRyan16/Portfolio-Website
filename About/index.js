import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { faAngular, faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'



const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <>
        <div className = 'container about-page'>
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass = {letterClass}
                        strArray = {['A', 'b', 'o', 'u', 't', ' ', 'm', 'e' ]}
                        idx = {15}
                    />
                </h1>
                <p>
                    I am a very ambitious front-end and back-end developer looking for a role
                    in an established company with the opportunity to work with the lastest 
                    technologies on challenging and diverse projects. 
                </p>

                <p>
                    I am a very confident, curious, and team-oriented developer. I focus on
                    perpetually improivng my programs and designs one step at a time. 
                </p>
                <p>
                    If I could describe myself in one sentence it would be hard-working, ambitious,
                    creative, cooperative, and committed.
                </p>
            </div>

            <div className= 'stage-cube-cont'>
                <div className = 'cubespinner'>
                    <div className = 'face1'>
                        <FontAwesomeIcon icon = {faAngular} color = '#DD0031' />
                    </div>
                    <div className = 'face2'>
                        <FontAwesomeIcon icon = {faHtml5} color = '#F06529' />
                    </div>
                    <div className = 'face3'>
                        <FontAwesomeIcon icon = {faCss3} color = '#28A4D9' />
                    </div>
                    <div className = 'face4'>
                        <FontAwesomeIcon icon = {faReact} color = '#5ED4F4' />
                    </div>
                    <div className = 'face5'>
                        <FontAwesomeIcon icon = {faJsSquare} color = '#EFD81D' />
                    </div>
                    <div className = 'face6'>
                        <FontAwesomeIcon icon = {faGitAlt} color = '#EC4D28' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type = "pacman" />
        </>
    )
}

export default About

