import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import VideoBg from "reactjs-videobg";
import mp4 from "./videos/v.mp4";


function HeroSection() {
    return (
       
        <div className='hero-container'>
        <VideoBg  >
            <VideoBg.Source src={mp4} type="video/mp4" />
        </VideoBg>;


            


            <h1>Hi, I'm Ferdaous
            </h1>
       
            <p class="center" >  I'm a Tunisian-based Junior Data Scientist.</p>  
            <p class="center">  My portfolio reflects what I've learned and accomplished as an ICT engineer and data scientist.  </p>

            <div className='hero-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    href="/resume">
                    My Resume 
                    <i className='far fa-play-circle '/>
                </Button>
                
                
            </div>
            

        </div>
    );
}

export default HeroSection;
