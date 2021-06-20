import React from 'react';
import '../App.css';
import './Aboutme.css'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import VideoBg from "reactjs-videobg";
import mp4 from "./videos/v.mp4";
import mepic from "./images/ferdaousbz.jpg";
import cv from "./images/CV_Ferdaous_Bouzaiene.pdf";

function AboutMe() {
    return (
    
    <section id="about">
            <div className ="content">
                <VideoBg  >
                     <VideoBg.Source src={mp4} type="video/mp4" />
                </VideoBg>;
            
                        <div className="row">

                            <div className="three columns">
                                <img className="profile-pic"  src={mepic} alt="Ferdaous Bouzaiene's  Profile Pic" />
                            </div>
                            <div className="nine columns main-col">
                                <h2>About Me</h2>
                                <p> I have an engineering degree in ICT with a Data Science and Management focus from the Higher School of Communication of Tunis. I attribute my success as a Data Scientist in large part to this extensive and in-depth education.</p>
                                <p>I have had a variety of internships, in both industry and research,  where I got to learn the basics of designing and coding machine learning algorithms.
                                I learned to write clean and maintainable code as well as to adapt quickly to the research environment and the new technologies. </p>
                                
                                <p>
                                You can take a look at some of my projects in the Projects section. I will link my work to their GitHub repositories. 
                                </p>
                                
                                <p>I'm an analytically minded person with excellent communication, dedicated, ambitious, and highly open-minded. </p>
                                <br></br>
                                <br>
                                </br>
                                <br>
                                </br>
                                <div className="row">
                                    <div className="columns contact-details">
                                        <h2>Contact Details</h2>
                                        <p className="address">
                                                <br /><span>
                                                    
                                                    <a href="tel:+216-9009-7831">  +216-9009-7831 </a>

                                                   

                                                </span><br /><span> 
                                                    
                                                    < a href="mailto:ferdaous.bouzaiene@gmail.com">ferdaous.bouzaiene@gmail.com </a>  </span>
                                        </p>
                                    </div>
                                    <div className="columns download">
                                        <p> 
                                            <a href={cv} download="CV_Ferdaous_Bouzaiene.pdf" className="button"> Download My Resume</a>
                                        </p>

                                        

                                    </div>

                                </div>
                            </div>
                        </div>

              

            </div>
        
   </section>


    );
}

export default AboutMe;
