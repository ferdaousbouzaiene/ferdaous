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
                                
<p>Natural Language Processing (NLP) is my area of expertise as a skilled Machine Learning Engineer with over three years of experience in startups. </p>

<p>I've created and implemented a number of NLP solutions, such as summarisation and question answering tools, to improve user experiences. </p>

<p>I'm committed to keeping on the cutting edge of this quickly developing discipline, and my knowledge spans the whole NLP pipeline. </p>

<p>I'm a cooperative team player that excels at explaining technical ideas to stakeholders who aren't experts in them. </p>

<p>I'm eager to keep making a difference in cutting-edge AI solutions.</p>

                            <p>    You can take a look at some of my projects in the Projects section. I will link my work to their GitHub repositories. 
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
                                                    
                                                    {/* <a href="tel:+216-9009-7831">  +216-9009-7831 </a> */}

                                                   

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
