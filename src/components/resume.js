import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Publish from './publish';
import Skills from './skills';
import {Link} from 'react-router-dom';
import {Button} from 'react-mdl';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src= {require('./images/grad-circle.png')}
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Mihai Dan</h2>
                        <h4 style={{color: 'grey'}}>Software Engineer</h4>
                        <hr style={{borderTop: '3px solid #226A85', width: '50%'}}/>
                        <p>
                            Throughout my education at Oregon State, I was given the opportunity to be immersed in a wide variety of projects, ranging from creating web applications to implementing machine learning algorithms from scratch. This diversity allowed me to yield more attention to the engineering process, while implementing different programming languages. Especially in software engineering, I believe that being actively responsive to constant change is an essential asset.   
                            <br/><br/>
                            As a highly-motivated student, I took every challenge brought forth as a learning opportunity. This meant not allowing failure to demotivate me, but instead push me towards achieving perfection. This attitude has been consistent through my schooling and will guide my professional development. 
                        </p>
                        <hr style={{borderTop: '3px solid #226A85', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>720 Riverdale Dr. Gladstone, OR 97027</p>
                        <h5>Phone</h5>
                        <p>(503) 867-0980</p>
                        <h5>Email</h5>
                        <p>mihaidan418@gmail.com</p>
                        <hr style={{borderTop: '3px solid #226A85', width: '50%'}}/>

                    </Cell>
                    <Cell col={8} className="resume-right-col">

                        <h2>Experience</h2>
                        <Experience 
                            startYear = "September 2017"
                            endYear = "June 2019"
                            jobName = "Graduate Research Assistant"
                            companyName = "Oregon State University"
                            jobDescription = "I have worked closely with Martin Erwig in the field of Programming Languages to conduct research pertinent to creating explanations for languages in different domains. I had the opportunity to delve into the world of functional programming which opened my eyes to a whole new paradigm of programming. I feel that throughout my two years in the Masters program, I have become a more well rounded individual both in my professional and personal life. I was also fortunate to have some of my work published in GPCE '18 with the help of my adviser. My work focused mainly on facilitating creative solutions to various problems and unforeseen roadblocks while conducting research guided by my adviser. Furthermore, I was tasked with managing and delegating responsibilities amongst a team of undergraduate researchers. In short, my responsibilities are highlighted below."
                            item1 = "Work closely with my advisor to further and improve on projects related to programming languages."
                            item2 = "Facilitate creative solutions to various problems and unforeseen roadblocks."
                            item3 = "Manage and delegate responsibilities amongst a team of undergraduate researchers."
                        />
                        <Experience
                            startYear = "June 2017"
                            endYear = "present"
                            jobName = "Engineering Adviser"
                            companyName = "Synkwise"
                            jobDescription = "Synkwise is a cloud-based web application created to help manage residential care businesses. I was fortunate enough to be part of the development and upbringing of this application since its initial stages of development. Working with and observing the life cycle of an application from the ground up taught me several lessons not found within an academic setting. I worked closely with the CEO, helping with a variety of tasks, such as deciding on appropriate frameworks, designing client-facing elements, and introducing new technologies which best fit the problem at hand. My main contributions to Synkwise include the following:"
                            item1 = "Provide technical advice on furthering the development of the application."
                            item2 = "Perform code reviews to assess the state of the application at several phases of development."
                            item3 = "Attend conferences and meetings to promote and discuss upcoming features of the web application."
                        />
                        <Experience 
                            startYear = "November 2011"
                            endYear = "August 2014"
                            jobName = "Courtesy Clerk / Cashier"
                            companyName = "Safeway"
                            //jobDescription = "During my time at Safeway, I provided excellent customer service and assistance to large number of customers by serving a diverse set of needs. I was given the opportunity to learn customer relations and deal with unforeseen problems brought forth by customers. I developed the ability to respond and diffuse hostile environments and provide creative solutions for customers. I also processed high volume number of transactions while ensuring accuracy and efficiency."
                            jobDescription = "During my time in high school and part of my college career, I held a part time job at Safeway. This opportunity exposed me to a diverse set of situations which helped me develop a strong work ethic and tune my soft skills. Furthermore, it created a better sense of time management by forcing me to allocate time for both school and work while maintaining a healthy work-life balance. Responsibilities include, but not limited to, the following:"
                            item1 = "Provide customer service and assistance to large number of customers by serving a diverse set of needs."
                            item2 = "Process high volume number of transactions while ensuring accuracy and efficiency."
                            item3 = "Ability to respond and diffuse hostile environments and provide creative solutions for customers."
                        />
                        <hr style={{borderTop: '3px solid #226A85'}}/>

                        <h2>Education</h2>
                        <Education 
                            degree = "Masters of Science in Computer Science"
                            GPA = "3.92"
                            startYear = "September 2017"
                            endYear = "June 2019"
                            schoolName = "Oregon State University"
                            schoolDescription = "I was fortunate to be given the opportunity to pursue higher learning at Oregon State University by my adviser, Martin Erwig. Besides getting to work closely with my adviser in the field of programming languages, I was exposed to a wide range of classes which furthered my skills as an engineer. I participated in a software engineering class which exposed me to the process of creating a web application in an agile environment. I took part in both the front and back end teams to build a research paper reference engine in hopes of exposing students to a larger corpus of work. I was also enrolled in machine learning courses that helped me better understand the inner workings of the magic behind ML. I implemented machine learning algorithms from scratch and used them to solve interesting problems. My time as a graduate student taught me discipline in balancing several projects at once while also sustaining an active and social lifestyle."
                            class1 = "Software Engineering - Agile Development environment"
                            class2 = "Machine Learning - Theoretical and pratical applications of various algorithms"
                            class3 = "Functional Programming - Studying various use cases of functional languages"
                        />
                        <Education 
                            degree = "Bachelors in Computer Science"
                            GPA = "3.60"
                            startYear = "September 2013"
                            endYear = "June 2017"
                            schoolName = "Oregon State University"
                            schoolDescription = "Throughout my undergraduate years at Oregon State University, I have been exposed to several computer science classes, ranging from managing databases to learning the ins and outs of operating systems. I have developed several working programs in C++, C, Python, SQL, HTML5, PHP, CSS, and Java, as well as worked with Version Control services and the MVC framework. I have developed working websites, able to take user input stored in databases, as well as be formatted to be visually pleasing."
                            class1 = "Fundamentals of Algorithms"
                            class2 = "Operating Systems"
                            class3 = "AI and Machine Learning"
                        />
                        <hr style={{borderTop: '3px solid #226A85'}}/>

                        <h2>Publications</h2>
                        <Publish
                            paperName = "Explaining Spreadsheets with Spreadsheets"
                            conference = "GPCE '18"
                            authors = "Mihai Dan, Martin Erwig, Jacome Cunha, Danila Fedorin, Alex Grejuc"
                            abstract1 = "Based on the concept of explanation sheets, we present an approach to make spreadsheets easier to understand and thus easier to use and maintain. We identify the notion of explanation soundness and show that explanation sheets which conform to simple rules of formula coverage provide sound explanations. We also present a practical evaluation of explanation sheets based on samples drawn from widely used spreadsheet corpora and based on a small user study."
                            abstract2 = "In addition to supporting spreadsheet understanding and maintenance, our work on explanation sheets has also uncovered several general principles of explanation languages that can help guide the design of explanations for other programming and domain-specific languages."
                        />

                        <hr style={{borderTop: '3px solid #226A85'}}/>

                        <h2>Skills</h2>
                        <Skills 
                            skill = "Haskell"
                            progress = {86}/>
                        <Skills 
                            skill = "LaTeX"
                            progress = {85}/>
                        <Skills 
                            skill = "Python"
                            progress = {80}/>
                        <Skills 
                            skill = "Git"
                            progress = {75}/>
                        <Skills 
                            skill = "Django"
                            progress = {50}/>
                        <Skills 
                            skill = "SQL"
                            progress = {50}/>
                        <Skills 
                            skill = "HTML/CSS"
                            progress = {42}/>
                        <Skills 
                            skill = "C/C++"
                            progress = {40}/>
                        <Skills 
                            skill = "Clojure"
                            progress = {25}/>

                        <hr style={{borderTop: '3px solid #226A85'}}/>

                        <div style={{justifyContent: 'center', display: 'flex'}}>
                        <Button style={{border: '2px solid white'}}><Link style={{textDecoration: 'none', color: 'white'}} to="/Resume.pdf" target="_blank" download>Download</Link></Button>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;