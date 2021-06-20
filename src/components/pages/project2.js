import React from 'react';  
import './project2.css';
 

 
import VideoBg from "reactjs-videobg";
import mp4 from "./videos/v.mp4";

import Footer from '../../components/Footer';


import missing1 from "./images/missing1.png";
import missing2 from "./images/missing2.png";
import countvect from "./images/countvect.png";
import tfidf from "./images/tfidf.png";
import LR1 from "./images/LR1.png";
import CM1 from "./images/CM1.png";
import LR2 from "./images/LR2.png";
import CM2 from "./images/CM2.png";



function project2 () {
    return (
        <section className='project_container_2'>
             
             {  // <video src="/videos/video-cloud-sky.mp4" loop autoPlay muted />
}

                <VideoBg  >
                     <VideoBg.Source src={mp4} type="video/mp4" />
                </VideoBg>;
                 <div className='cont1'>
                    <h1  className='cont2'>
                        Fake News Classification 
                    </h1>
                   
                </div>     


                <div className='description_container'>
                    <h1>
                    The news media has evolved into a means of conveying information about what is going on in the world to the general public.                    </h1>
                    <br></br> <br></br>
                    <h1>
                    People frequently believe what they hear on the news to be factual.
                    </h1>
                    <br></br><br></br>
                    <h1>
                    However, there have been instances where even news outlets have admitted that their reports are not entirely accurate.                    </h1>
                    <br></br><br></br>
                    <h1>
                    Moreover, certain news has a huge influence on the economy as well as the people and government, thus it is critical to distinguish between fake and factual news.                    </h1>
                </div>



                <div className='description_container'>
                    <h1>
                    Fake news detection is a binary classification problem between real and fake therefore comes the idea of using Logistic regression.
                    
                    </h1>
                    <br></br>
                    <h1>
                    Logistic regression is a classification algorithm. It is used to predict a binary outcome (True/False) based on a set of independent variables.

                    </h1>
                   
                    <br></br>
                    <h1>
                    Logistic Regression is used when the dependent variable (target) is categorical: the article is false (1) or real (0).
                    </h1>


                    <div className='table'>



                    <table class="tg">
                        <thead>
                        <tr>
                            <th class="tg-c3ow">Advantages</th>
                            <th class="tg-c3ow">Disadvantages</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="tg-0pky">Easy to implement, interpret, and very efficient to train.</td>
                            <td class="tg-0pky">May lead to overfitting if  number of observations is lesser than the number of features. (Which is not the case)</td>
                        </tr>
                        <tr>
                            <td class="tg-0pky">Good accuracy for simple datasets and performs well when the dataset is linearly separable.</td>
                            <td class="tg-0pky">Requires average or no multicollinearity between independent variables. (Which is not the case)</td>
                        </tr>
                        </tbody>
                    </table>





                    </div>
                </div>    
                 
                <div className='steps'>
                    <h1>
                        Data 
                    </h1>
                </div>
                
                <div className='description_container'>  
                    <h1>  
                    I used for this project a public dataset provided by a contributor on Kaggle. This dataset contains a list of articles considered as "fake"/"real" news with the attributes: 
                     <br></br>
                        <ul className='list_container'>
                            <li>
                            id: a unique id for each news article
                            </li>
                            <li>
                            title: the title of the news article
                            </li>
                            <li>
                            author: the author of the news article
                            </li>
                            <li>
                            text: the content of the article
                            </li>
                            <li>
                            label: a label that marks the article as potentially unreliable
                            </li>
                        </ul>
                    </h1>
                </div>





                <div className='steps_l'>
                    <h1>
                        Data Preprocessing and Cleaning
                    </h1>
                </div>
                

                <div className='description_container'>  
                    <h1>  
                        Data preprocessing is a data mining technique for transforming raw data into a usable and efficient format.
                        The data can have many irrelevant and missing parts. To handle this part, data cleaning is done. It involves handling of missing data, noisy data etc.
                        <br></br>
                        <br></br>
                        Missing Data: This situation arises when some data is missing in the data.
                        
                        <br></br> 


                        <div className='pic_code'> 
                            <img className='img_container_code' src={missing1}  alt="cosine"  />
                        </div>


<br></br>
                        It can be handled in various ways. Some of them are:
                        <br></br>
                        <br></br>
                        <li>Ignoring the tuples: This approach is suitable only when the dataset we have is quite large and multiple values are missing within a tuple.
                        </li>
                        <br></br>
                        <li>  Filling the Missing values: There are various ways to do this task. You can choose to fill the missing values manually, by attribute mean or the most probable value.                     
                        </li>  
                        <br></br>


                        <div className='pic_code'> 
                            <img className='img_container_code' src={missing2} alt="cosine"  />
                        </div>

                    </h1>
                </div>


                <div className='steps'>
                    <h1>
                    Vectorizing the data 
                    </h1>
                </div>

                <div className='steps_container'>
                    <h1>
                    The raw articles are now transformed into a cleaned format containing only the essential information.
<br></br>
                    The cleaned text is then further transformed into a format that the machine learning model can understand.  This process is known as Vectorizing.
<br></br>
                    In our context, each news article is translated to a numerical vector that represents that article.


                    </h1>
                </div>
<br></br>




                <div className='steps_container'>
                    <div className='list_container'>
                        Count Vectorizer
                    </div>
                    <br></br>
                    <h1>
                        It is used to transform a given text into a vector on the basis of the frequency (count) of each word (token) that occurs in the entire text.
                    </h1>

                    <div className='pic_code'> 
                            <img className='img_container_code' src= {countvect}  alt="cosine"  />
                            <figcaption className='caption'>Source: https://mlwhiz.com/blog/2019/02/08/deeplearning_nlp_conventional_methods/</figcaption>

                        </div>


                    <div className='list_container'>
                        Tf-IDF Vectorizer
                    </div>
                    <br></br>
                    <h1>
                        It is a statistical measure that evaluates how relevant a word is to a document in a collection of documents. This is done by multiplying two metrics: how many times a word appears in a document (TF), and the inverse document frequency of the word across a set of documents (IDF).
                    </h1>

                    <div className='pic_code'> 
                            <img className='img_container_code' src= {tfidf} alt="cosine"  />
                            <figcaption className='caption'>Source: https://mlwhiz.com/blog/2019/02/08/deeplearning_nlp_conventional_methods/</figcaption>
                    </div>

                    
                </div>


                <div className='steps'>
                    <h1>
                    Model
                    </h1>
                </div>



                <div className='steps_container'>
                     
                   
                    <div className='list_container'>
                    <h1>Logistic Regression with CountVectorizer </h1>
                    </div>
                    <br></br>
                     <h1> We use the classifier LogisticRegression provided by the library : sklearn and its methods: fit, predict and then we calculate the accuracy_score in order to evaluate the model  </h1>                 
                    <br></br>

                    <div className='pic_code'> 
                            <img className='img_container_code' src={LR1} alt="cosine"  />
                    </div>


                     <br></br>
                    <h1>  Classification accuracy alone can be misleading if we have an unequal number of observations in each class or if we have more than two classes in the dataset.  </h1>
                    <br></br>
                   <h1>A confusion matrix is a technique for summarizing the performance of a classification algorithm.</h1> 
                   <div className='pic_code'> 
                            <img className='img_container_code_22' src={CM1} alt="cosine" height='300' />
                    </div>
                    
                    
                        
                     <div className='list_container'>
                     <h1>Logistic Regression with TF-IDF Vectorizer </h1>
                    </div>   

                    <div className='pic_code'> 
                            <img className='img_container_code' src= {LR2} alt="cosine"  />
                    </div>

                    <div className='pic_code'> 
                            <img className='img_container_code_22' src= {CM2} alt="cosine"   height='300' />
                    </div>

 
                    <br></br>
<h1>
Logistic Regression with CountVectorizer is the  best model so . Even though the accuracy score is a bit lower, we have less fake news labeled as true news ie. only 44. 
</h1>

                        <div className='list_container'>
                             
                             <h1 ><a   href="https://github.com/blank002/fake-news-detection" target="_blank" >Github Link</a></h1>
                             
                         </div>
 

                </div>
                <div className='steps_container'>

                        <div className='list_container'>
                             
                             <h1 >Next Step:</h1>
                             <h1> Using more complex models such a Long Short-Term Memory - Recurrent Neural Network (LSTM-RNN) </h1>
                             
                         </div>
                </div>
               
        
           
        </section>    
);
}
export default project2;