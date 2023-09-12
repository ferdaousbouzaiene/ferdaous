import React from 'react';  
import '../../App.css';
import './Resume.css';

import VideoBg from "reactjs-videobg";
import mp4 from "./videos/v.mp4";

import Footer from '../../components/Footer';

function Resume () {
    return (
        <section  id="resume" className='resume'>
            <div className='resume-container'> 
            <VideoBg  >
                     <VideoBg.Source src={mp4} type="video/mp4" />
                </VideoBg>;
                
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work Experience</span></h1>
                    </div>
                    <div className="nine columns main-col">


                    <div >
                                                                        <p className="infotitle2">Machine Learning Engineer</p>
                                                                        <p className="info"> Tucan.ai GmbH - Meeting Assistant Software
                                                                        
                                                                        <br></br>
                                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                                        <span>&bull;</span> <em className="date"> August 2021 &ndash; Present</em>
                                                                        
                                                                        </p>
                                                                        <p className="info">
                                                                            <ul >
                                                                                <li className="info">
                                                                                Developed and deployed a translation model from German to English and vice versa thus, enabling ecient and accurate language translation for diverse applications needed to create meeting report such as summarisation and question answering. We used TensorFlow as main framework and Transformer models through HuggingFace.                             </li >
                                                                                <li className="info">
                                                                                Implemented a meeting summarization model with NLP techniques using data from meeting transcripts, extracting relevant information and generating concise summaries, improving productivity and facilitating decision-making processes and achieving a 90% accuracy rate.
                                                                                </li>
                                                                                <li className="info"> Worked on a question detection model that detects questions raised during meetings along with a question-answering model tailored for meeting data to answer raised questions with 70% accuracy. </li>
                                                                                <li className="info"> Created an automated pipeline tool using MLops, Nodered, Python, Sql and Rabbitmq that connects machine learning models and establishes a streamlined flow for text processing across downstream tasks including translation to summarisation to translation to original language </li>
                                                                                



                                                                            </ul>
                                                                        </p>
                                                                    </div>  <br></br>


                        <div >
                            <p className="infotitle">Undergraduate Research Assistant</p>
                            <p className="info">ICube Laboratory, University of Strasbourg
                                
                            <br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>&bull;</span> <em className="date"> May 2020 &ndash; December 2020</em>
                                
                            </p>
                            <p className="info">
                                <ul >
                                    <li className="info">
                                    Explored, analyzed and interpreted large datasets (aerial and satellite remote sensing data) along with preparing regularreports on the choice of classes and features.                                </li >
                                    <li className="info">
                                    Implemented and presented deep learning pipelines for domain adaptation (transfer learning) tasks that achieved 78% accurate results  which were used in the ongoing research publication.                                </li>
                                    <li className='info'>
                                    Successfully improved the accuracy by 3% by developing and documenting the model’s architecture and the datapre-processing.
                                    </li>
                                    <li className="info">
                                    Contributed to making study direction decisions with the research team.                                </li>
                                </ul>
                            </p>
                        </div><br></br>
                        <div >
                            <p className="infotitle2">Machine Learning Intern</p>
                            <p className="info">SFM Technologies
                            
                            <br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>&bull;</span> <em className="date"> June 2019 &ndash; September 2019</em>
                            
                            </p>
                            <p className="info">
                                <ul >
                                    <li className="info">
                                    Focused on building a model to detect, evaluate and forecast the behavior of the company’s customers to improve customerservice and enhance business efficiency.                             </li >
                                     <li className="info">
                                     Designed a data visualization dashboard to track the model’s output and generate reports which subsequently boosted theproject’s intelligibility.
                                    </li>
                                </ul>
                            </p>
                        </div><br></br>


                                                                   


                    </div>
                </div>



                <div className="row education">
                    <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">    
                            <div >
                                <p className="infotitle" > Higher School of Communication of Tunis </p>
                                <p className="info-title"> Masters of Engineering in ICT, Data Science Specialization
                                <br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>&bull;</span><em className="date"> &nbsp;September 2017 &ndash; January 2021  </em></p>
                                <p className="info"> Focus Area: Machine Learning, Deep Learning, Image processing, Data structures.</p>
                                <p className='info'> Selected from among 90 (from a total of 500+) participants in a project development competition.
                                </p>
                            </div>
                            <div >
                                <p className="infotitle2" > Faculty of Science of Monastir </p>
                                <p className="info-title"> Diploma of the preparatory cycle for engineering studies  (rank: 98/700)  
                                <br></br>      &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>&bull;</span><em className="date" > &nbsp;September 2015 &ndash; July 2017 </em></p>
                                <p className='info'> Focus Area: Calculus and Linear Algebra.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="row skills">
                    <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">    
                            <ul class="skills">
                            <li>Python</li>
                            <li>C++</li>
                            <li>SQL</li>
                            <li>Pandas </li> 
                            <li> NumPy </li>
                            <li> Scikt-Learn </li>
                            <li> Matplotlib </li> 
                            <li> Tensorflow </li>
                            <li> Keras</li><li> Flask</li>
                            <li>Git/Github</li>
                            <li>Linux</li>

                            <li>HuggingFace</li>
                            <li>Docker</li>
                            <li>AWS</li>
                            <li>Kubernetes</li>
                            
                            
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
               
           </div>
           

        </section>
        
);
}


export default Resume;
