import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

      const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'tjremailservice1616',
            'template_v10k7qo',
            refForm.current,
            'rCV8dNVzO1H9LJ2-y'
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
      }

    return (
        <>
            <div className = 'container contact-page'> 
                <div className = 'text-zone'>
                    <h1>
                        <AnimatedLetters  
                        letterClass={letterClass}
                        strArray = {['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx = {15}
                        />
                    </h1>
                    <p>
                        I am interested in any opportunities - especially job opportunities or internships.
                        If you have any other question or concern, please feel free to contact me
                        using the below form. 
                    </p>
                    <div className = 'contact-form'>
                        <form ref = {refForm} onSubmit = {sendEmail}>
                            <ul>
                                <li className = 'half'>
                                    <input 
                                    type = "text"  
                                    name = "name" 
                                    placeholder = "Name" 
                                    required 
                                    />
                                </li>
                                <li className = 'half'>
                                    <input 
                                    type = "email"  
                                    name = "email" 
                                    placeholder = "Email" 
                                    required 
                                    />
                                </li>
                                <li>
                                    <input 
                                    placeholder = "Subject" 
                                    type = "text" 
                                    name = "subject" 
                                    required
                                    />
                                </li>
                                <li>
                                    <textarea 
                                    placeholder = "Message" 
                                    name = "message" 
                                    required 
                                    ></textarea>
                                </li>
                                <li>
                                    <input 
                                    type = "submit" 
                                    className = 'flat-button' 
                                    value = "SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type = "pacman" />
        </>
    )
}
export default Contact