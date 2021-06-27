import React from 'react';  
import './project3.css';
import VideoBg from "reactjs-videobg";
import mp4 from "./videos/v.mp4";

import testing from "./images/testing.png";
import trainedmodel from "./images/trainedmodel.png";
import model from "./images/model.png";
import paddingresults from "./images/paddingresults.png";
import padding from "./images/padding.png";
import vectorization from "./images/vectorization.png";
import cleandataresults from "./images/cleandataresults.png";
import cleaningdata from "./images/cleaningdata.png";
import stopwords from "./images/stopwords.png";
import data from "./images/data.png";
import missingdata from "./images/missingdata.png";
import vectorizationresults from "./images/vectorizationresults.png";


function project3 () {
    return (
        <section className='project_container_3'>
                <VideoBg  >
                     <VideoBg.Source src={mp4} type="video/mp4" />
                </VideoBg>;
                 <div className='title_border_3'>
                    <h1  className='title_3'>
                        Analyzing IMDb Movie Reviews 
                    </h1>
                </div>  

                <div className='description_container'>
                    <h1>
                    Sentiment analysis is the process of detecting positive or negative sentiment in text. It’s often used by businesses to detect sentiment in social data, gauge brand reputation, and understand customers.
                    </h1>
                    <br></br>
                    <h1>
                    Customers are expressing their ideas and sentiments more openly than ever before, and sentiment analysis is quickly becoming an indispensable tool for monitoring and understanding that sentiment. 
                    Automatically evaluating customer feedback, such as survey answers and social media conversations, enables companies to understand what makes consumers happy or unhappy, allowing them to adjust products and services to their customers' requirements.
                    </h1>
                    <br></br>
                    <h1>
                    Sentiment analysis is important since it allows businesses to rapidly assess their consumers' overall opinions. 
                    They can make faster and more accurate judgments by automatically categorizing the sentiment behind reviews, social media conversations, and other sources.
                    </h1>
                </div>   
                <div className='description_container'>
                    <h1>
                    To learn more about sentiment analysis, I will be using the IMDB movie reviews dataset for this project to study the different reviews. 
                    </h1>
                    <br></br>
                    <h1>
                    This dataset contains 2 columns:
                    <br></br>
                    <ul>
                        <li> the first column is the list of movie reviews  </li>
                        <li> the second column is the list of sentiments (positive and negative) </li>
                    </ul>
                    <br></br>
                    It is split equally, 25k positve reviews and 25k negative reviews :
                    </h1>
                    <br></br>
                    <img className='img_container_code1' src={data} width='200' />
                </div>
                <div className='mini_title_2'>
                    <h1 className='mini_title_h'>  Data Cleaning and Pre-processing </h1>
                </div>
                <div className='description_container'>
                    <h1>
                    Before I feed the data to the model, I will first fill in the missing data if there's any and remove unncessary formatting that might distrurb the results.
                    </h1>
                    <br></br>
                    <h1 className='mini_subtitle'> Missing Data</h1>
                    <br></br>
                    <img className='img_container_code2' src={missingdata}  />
                    <br></br>
                    <h1>There is no missing values in the dataset.</h1>
                    <br></br>
                    <h1 className='mini_subtitle'>Removing unnecessary formatting</h1>
                    <br></br>
                    <h1>
                    Search engines have been programmed to ignore stopwords, these words take up space in the database and/or take up valuable processing time. 
                    Therefore, we remove them, by storing a list of words that we consider as stop words. 
                    NLTK (Natural Language Toolkit) in python has a list of stopwords stored in 16 different languages.
                    </h1>
                    <br></br>
                    <h1>  <i></i> is a function that will split the datatset into a review column and a sentiment (target) column.
                        The pre-processing perfomed on the reviews: Removing html tags, non alphabet values and stop words, and changin the text to lower case.
                        Also, the target column is coded into 1 for positive review and 0 for negative ones. </h1>
                        <br></br>
                    <img className='img_container_code3' src={stopwords} />
                    <br></br>
                    <img className='img_container_code3' src={cleaningdata}/>
                    <br></br>
                    <img className='img_container_code3' src={cleandataresults}/>
                    <h1 className='mini_subtitle'>Vectorization</h1>
                    <br></br>
                    <h1>In order to feed text data into neural networks, we need to transform them into numeric data. This step is called Vectorization.

                    I used tensorflow.keras.preprocessing.text.Tokenizer to encode the reviews into integers, where each unique word is automatically indexed (using fit_on_texts method) based on x_train.
                    x_train and x_test is converted into integers using texts_to_sequences method. 
                    ( it is also necessary for the Keras offers an Embedding layer that the input is integer encoded)</h1>
                    <br></br>
                    <img className='img_container_code3' src={vectorization}/>
                    <br></br>
                    <br></br>
                    <img className='img_container_code3' src={vectorizationresults}/>
                    <br></br>
                    
                    <h1 className='mini_subtitle'> Padding and truncation</h1>
                    <br></br>
                    <h1>Since each review has a different length, we need to add a padding (by adding 0) or truncating the words to the same length 
                    ( in this case, it is the mean of all reviews length using the function  <i>get_max_length</i> ) using tensorflow.keras.preprocessing.sequence.pad_sequences.
                        </h1>
                    <br></br>
                    <img className='img_container_code3' src={padding}/>
                    <br></br>
                    <img className='img_container_code3' src={paddingresults}/>
                    <br></br>
                    
                </div>
                <div className='mini_title'>
                    <h1 className='mini_title_h'>Building the model</h1>
                </div>
                <div className='description_container'>
                    <h1>Long short-term memory (LSTM) is an artificial recurrent neural network (RNN) architecture used in the field of deep learning. </h1>
                    <br></br>
                    <h1> <li> The embedding layer is initialized with random weights and will learn an embedding for all of the words in the training dataset.  </li> </h1>
                    <br></br>
                    <h1> <li>The next layer is the LSTM layer with 64 memory units (LSTM_OUT = 64) </li></h1>
                    <br></br>
                    <h1><li>Since this is a classification problem we use a Dense output layer with a single neuron and a sigmoid activation function to make 0 or 1 
                        predictions for the two classes (positive and negative)</li></h1>
                    <br></br>
                    <img className='img_container_code3' src={model}/>
                    <br></br>
                    <h1 className='mini_subtitle'>Training</h1>
                    <br></br>
                    <h1>For training, we need to fit our x_train and y_train data. For this training, I used a mini-batch learning method with a batch_size of 128 and 5 epochs.
                    </h1>
                    <br></br>
                    <img className='img_container_code3' src={trainedmodel} />
                    <br></br>
                    <h1 className='mini_subtitle'>Testing</h1>
                    <br></br>
                    <h1>To evaluate the model, we need to predict the sentiment using our x_test data and comparing the predictions with y_test (expected output) data. Then, we calculate the accuracy of the model by dividing numbers of correct prediction with the total data.</h1>
                    <br></br>
                    <img className='img_container_code3' src={testing}/>
                    <br></br>
                </div>


                
           
        </section>    
);
}
export default project3;
