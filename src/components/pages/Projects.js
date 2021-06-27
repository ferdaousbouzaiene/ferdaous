import React from 'react';  
import './Projects.css';
import CardItem from './CardItem';



import VideoBg from "reactjs-videobg";
import mp4 from "./videos/v.mp4";

import musicpic from "./images/music.jpg";
import news from "./images/fakenews.jpg";
import moviespic from "./images/movies.jpg";
import churn from "./images/customerchurn.jpg";
import toxiccomment from "./images/toxiccomment.png";
import emotiondetection from"./images/emotiondetection.png";

import churnUC from "./images/customerchurnUC.png";
import toxiccommentUC from "./images/toxiccommentUC.png";
import emotiondetectionUC from"./images/emotiondetectionUC.png";

import Footer from '../../components/Footer';

function Projects () {
    return (
        <section className='cards__container'>
            {  //<video src="/videos/video-milky-way.mp4" loop autoPlay muted />
}

                <VideoBg  >
                     <VideoBg.Source src={mp4} type="video/mp4" />
                </VideoBg>;

            <div className='titlepadding' >
                <h1>
                Projects I've Worked On</h1>
             </div>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src= {musicpic}
                        text='Music Recommender System'
                        label='Recommendation System'
                        path='/project1'
                        />
                        <CardItem
                        src= {news}
                        text='Fake News Detection'
                        label='NLP'
                        path='/project2'
                        />
                    </ul>

                    <ul className='cards__items' >
                        <CardItem
                        src={moviespic}
                        text='Analyzing IMDb Movie Reviews'
                        label='Sentiment Analysis'
                        path='/project3'
                         
                        />
                        <CardItem
                        src={churnUC}
                        text='Customer Churn Prediction'
                        label='Classification'
                         
                        />
                        
                    </ul>


                    <ul className='cards__items' >
                        <CardItem
                        src={toxiccommentUC}
                        text='Toxic Comments Classification'
                        label='NLP'
                         
                         
                        />
                        <CardItem
                        src={emotiondetectionUC}
                        text='Facial Emotion Recognition '
                        label='Computer Vision'
                         
                        />
                        
                    </ul>
                    </div>
            </div>
        </section>
        
);
}


export default Projects;
