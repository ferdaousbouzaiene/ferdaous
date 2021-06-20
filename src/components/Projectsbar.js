import React from 'react';
import './Projectsbar.css';
import CardItem from './CardItem';


function Projectsbar() {
  return (
    <div className='cards'>
       <div className='cards__container'> <video src="/videos/video-milky-way.mp4" loop autoPlay muted />

      <h1 className='cards_title'> My personal and academic projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/music.jpg'
              text='Music Recommender System'
              label='Recommendation System'
              path='/project1'
            />
            <CardItem
              src='images/fakenews.jpg'
              text='Fake News Detection'
              label='NLP'
              path='/project2'
            />
          </ul>
          <ul className='cards__items' id='option8'>
            <CardItem
              src='images/movies.jpg'
              text='Analyzing IMDb Movie Reviews'
              label='Sentiment Analysis'
              path='/project'
            />
            <CardItem
              src='images/customerchurn.jpg'
              text='Customer Churn Prediction'
              label='Machine Learning'
              path='/products'
            />
            
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Projectsbar;