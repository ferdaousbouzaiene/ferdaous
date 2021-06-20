import React from 'react';  
import './project1.css';
 

 
import VideoBg from "reactjs-videobg";
import mp4 from "./videos/v.mp4";


import ContentBased  from "./images/ContentBased.jpg" ;

import kkbox  from  "./images/kkbox.png";
import jupyter1  from "./images/jupyter1.png";
import cosine from "./images/cosine.png";
import jupyter2  from  "./images/jupyter2.png";
import jupyter3 from "./images/jupyter3.png";
import jupyter4  from "./images/jupyter4.png";
import jupyter5  from "./images/jupyter5.png";
import jupyter6  from "./images/jupyter6.png";
import jupyter8  from "./images/jupyter8.png";
import jupyter9  from "./images/jupyter9.png";




function project1 () {
    return (
        <section className='project_container'>
             
             {  //   <video src="/videos/video-cloud-sky.mp4" loop autoPlay muted />  
              }

                <VideoBg  >
                     <VideoBg.Source src={mp4} type="video/mp4" />
                </VideoBg>;
         
              <div className='cont1_project1'>
                    <h1  className='cont2_project1'>
                        Music Recommendation system 
                    </h1>
                </div>  


                <div className='description_container'>
                    <h1>
                    Recommendation systems are particularly essential in various businesses as they may generate a great amount of revenue when they are efficient or could be a means to distinguish out greatly from rivals. 
                    </h1>
                    <br></br> <br></br>
                    <h1>
                        Netflix and Spotify are classic examples for prosperous Recommendation Systems.
                    </h1>
                    <br></br><br></br>
                    <h1>
                    While competitors like Apple Music, Amazon Prime Music, and Google Music rely on a mix of paid humans and community-created playlists, Spotify’s main differentiating factor is the level of customization and expansion of music knowledge offered to customers.
                    </h1>
                    <br></br><br></br>
                    <h1>
                    Netflix's recommender algorithm accounts for 80 percent of stream time, which is an outstanding figure. Furthermore, Netflix believes in building a user experience that aims to increase retention rates, which correlates to lower customer acquisition costs (estimated at $1 billion per year in 2016).
                    </h1>
                </div>
                <div className='steps_container'>
                    <h1>
                    For this project, I used content-based recommendation approach.
Content-based recommenders approach recommendation as a user-specific classification problem, learning a classifier for a user's likes and dislikes based on the features of an item. Keywords are utilized to define the items in this system, and a user profile is created to identify the sort of item this user enjoys.
                    </h1>
                </div>    
                <div className='pics'>
                    <h1> </h1>
                    <img className='img_container' src={ContentBased} alt="ContentBasedFiltering" width="250" height="350"/>
                </div>
                <div className='steps'>
                    <h1>
                        Data 
                    </h1>
                </div>
                
                <div className='Datainfo'>  
                    <p> <img src={kkbox} alt="image" />
                    For this project  I used a public dataset provided by a competition on Kaggle.
KKBOX provides a training data set consists of information of the first observable listening event for each unique user-song pair within a specific time duration. Metadata of each unique user and song pair is also provided.  
The train and the test data are selected from users listening history in a given time period. 
                    </p>
                </div>


                <div className='steps'>
                    <h1>
                    Steps 
                    </h1>
                </div>



                <div className='steps_container'>
                    
                    <div className='list_container'>
                    <ul className=''>
                        <li>
                            Text Preprocessing:  Cleaning the data
                        </li>
                        <br></br>
                        <h1>
                        In any machine learning task, cleaning or preprocessing the data is as important as model building if not more. 
                        And when it comes to unstructured data like text, this process is even more important.
                        For this dataset, I removed the new lines present in the song text.

                        </h1>
                        <br></br>
                        <li>
                            TF-IDF : a statistical measure that evaluates how relevant a word is to a document in a collection of documents
                        </li>
                        <br></br>
                        <h1>
                        TF-IDF is a statistical measure that evaluates how relevant a word is to a document in a collection of documents. 
                        This is done by multiplying two metrics: how many times a word appears in a document, and the inverse document frequency of the word across a set of documents (how common or rare a word is in the entire document set).
                        <br></br>
                        TfidfVectorizer will return a matrix of the TF-IDF score for each song lyric.
                        


                         

                        <div className='pic_code_55'> 
                            <img className='img_container_code_55' src={jupyter1} alt="cosine" height='60' />
                         </div>






                        </h1>
                        <br></br>
                        <li>
                            Calculating similarities: Cosine Similarity
                        </li>
                        <br></br>
                        <h1>
                        Cosine similarity is a metric used to measure how similar two items are. 
                        Mathematically, it measures the cosine of the angle between two vectors projected in a multi-dimensional space. The output value ranges from 0–1.
                        <br></br>
                        <div className='pics2'>
                            
                            <img className='img_container2' src={cosine} alt="cosine"  />
                        </div>
                        <br>
                        </br>
                        We want to calculate the cosine similarity of each item with every other item in the dataset. 
                        So we'll pass the lyrics_matrix as argument.


                        <div className='pic_code_55'> 
                            <img className='img_container_code_55' src={jupyter2} alt="cosine" height='40' />
                         </div>


                        </h1>
                        <br>
                        </br>
                        <h1>
    Next, we sort each element in cosine_similarities and we get the indexes of the songs.  Next, we store in similarities each name of the 50 most similar songs.
                        </h1>

                        <div className='pic_code_55'> 
                            <img className='img_container_code_55' src={jupyter3} alt="cosine" height='40' />
                         </div>

                         <div className='pic_code_55'> 
                            <img className='img_container_code_55' src={jupyter4} alt="cosine" height='100' />
                         </div>


                        

                       


<br></br>
                        <li>

                            Recommendation: Content-Based
                        </li>
                        <h1>
                        We will use that similarity scores to access the most similar songs to recommend them.


                        </h1>
                        <div className='pic_code_55'> 
                            <img className='img_container_code_55' src={jupyter5} alt="cosine" height='320' />
                         </div>


                        



<br></br>
                        <h1>
                        Now, we instantiate the  class and choose the song to find similar songs for.
                        </h1>

                        <div className='pic_code_55'> 
                            <img className='img_container_code_55' src= {jupyter6}  alt="cosine" height='40' />
                         </div>

                         <div className='pic_code_55'> 
                            <img className='img_container_code_55' src= {jupyter8}  alt="cosine" height='90' />
                         </div>

                         <div className='pic_code_55'> 
                            <img className='img_container_code_55' src= {jupyter9}  alt="cosine" height='200' />
                         </div>

                         <div className='list_container'>
                             
                             <h1 ><a   href="https://github.com/blank002/Music-recommendation" target="_blank" >Github Link</a></h1>
                             
                         </div>
 



                   


                     

                    </ul>
                    </div>

                </div>
               
        
           
        </section>    
);
}
export default project1;