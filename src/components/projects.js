import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import {Link} from 'react-router-dom';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://deskbright-media.s3.amazonaws.com/static/cms/images/articles/excel/what-is-excel/image1.jpg) center / cover'}}>
                            Spreadsheet Explanations Through Table Abstraction
                        </CardTitle>
                        <CardText>
                            Spreadsheet Explanations Through Table Abstraction is the project I completed as my thesis. In my thesis, I explain the concept of explanation sheets, which are themselves a type of spreadsheets, but abstract from the low level computation and provide an overview of the computational structure. Furthermore, I describe the process of inferring explanation sheets from a spreadsheet by assessing real world spreadsheets and creating a set of inference rules.
                            <br/><br/>
                            Due to copyright restrictions, I cannot provide the code, but additional information can be found in the thesis.
                        </CardText>
                        <CardActions border>
                            <Button><a href="https://ir.library.oregonstate.edu/concern/graduate_thesis_or_dissertations/z316q720n" style={{textDecoration: 'none', color: 'darkblue'}} target="_blank" rel="noopener noreferrer">Scholars Archive</a></Button>
                        </CardActions>
                    </Card>
                    
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://deskbright-media.s3.amazonaws.com/static/cms/images/articles/excel/what-is-excel/image1.jpg) center / cover'}}>
                            Tiled Spreadsheet Query Language
                        </CardTitle>
                        <CardText>
                            In collaboration with a colleague, I created a query language for spreadsheets. This language allows the user to define sections of a spreadsheet which contains data that is similar. For example, an "tile" found on a gradebook spreadsheet could be "Semester 1 Grades". The user can then perform various query operations on these tiles such as aggregation or selection. For more details, please see the attached research paper.
                            <br/> <br/>
                            Due to copyright restrictions, I cannot provide the code, but additional information can be found in the attached paper.
                        </CardText>
                        <CardActions border>
                            <Button><Link style={{textDecoration: 'none', color: 'darkblue'}} to="/tiled-spreadsheet-query.pdf" target="_blank" download>Research Paper</Link></Button>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://deskbright-media.s3.amazonaws.com/static/cms/images/articles/excel/what-is-excel/image1.jpg) center / cover'}}>
                            Typed Table Transformations
                        </CardTitle>
                        <CardText>
                            Spreadsheets present data and computation with those data in tabular form. The Typed Table Transformations project aims at exploiting that fact and using it to define types for the data found in the spreadsheet. The types are extracted from the headers which label data and later used in performing operations on the spreadsheet. The operations range from selecting certain data to reshaping the structure of the spreadsheet, depending on the user's needs.
                            <br/><br/>
                            Due to copyright restrictions, I cannot provide the code, but feel free to ask me for additional information.
                        </CardText>
                        {/*<CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>*/}
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    {/* PaperGene */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://www.sciencedocs.com/wp-content/uploads/2017/01/close-up-sci-papers-500x374.gif) center / cover'}}>
                            PaperGene
                        </CardTitle>
                        <CardText>
                            PaperGene is a research paper reference engine which uses the power of graph databases to create a network of papers based on related works. This project was created in collaboration with peers from Oregon State University and was used by a small group of graduate students. The front end of PaperGene is written in React, while the back end is written in Python using the Django framework. Later in the project's life cycle, we decided to migrate the back end into Clojure.
                            <br/><br/>
                            I spent most of my time working on this project on the back end team and as project manager.
                        </CardText>
                        {/*<CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>*/}
                    </Card>

                    {/* ACPS */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://ichef.bbci.co.uk/news/660/cpsprodpb/20D7/production/_104270480_gettyimages-943878650-1.jpg) center / cover'}}>
                            ALS Credibility Prediction Software
                        </CardTitle>
                        <CardText>
                            ACPS is the Capstone project I completed in my 4th year of school, along with a team of 2 other peers. We created prediction software aimed at assisting professionals in spotting scam websites which could potentially create harm to ALS patients. The front end was written in Ruby on Rails, while the back end was written in Python. I was tasked with data collection and back end algorithm creation. Initially, we implemented a Naive Bayes algorithm from scratch, but after the results were not what we had hoped for, we moved on to using the Scikit-learn library which gave us access to several algorithms. We settled on the Random Forest algorithm as it worked best with our dataset.
                        </CardText>
                        <CardActions border>
                        <Button colored><a href="https://acps2017.herokuapp.com/" style={{textDecoration: 'none', color: 'darkblue'}} target="_blank" rel="noopener noreferrer">Web</a></Button>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://img.etimg.com/thumb/height-450,width-800,msid-71434543,imgsize-490456/stocks-up-3.jpg) center / cover'}}>
                            Quantop: Stock Market Prediction
                        </CardTitle>
                        <CardText>
                            Quantop is a stock prediction model using Deep Neural Networks, specifically the Long Short-Term Memory model. I joined the Quantop project in its later stages of development for a Deep Learning course. My main contributions to the project consisted of data collection and preparation for the training and testing phases. I created several Python scripts to extract data from the IEXchange database and tailor it to the task at hand.
                        </CardText>
                        <CardActions border>
                        <Button colored><a href="https://github.com/DeqingQu/Quantop" style={{textDecoration: 'none', color: 'darkblue'}} target="_blank" rel="noopener noreferrer">GitHub</a></Button> 
                        </CardActions>
                    </Card>
                    
                    {/* Discord Bots */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://pmcvariety.files.wordpress.com/2018/05/discord-logo.jpg?w=1000&h=563&crop=1) center / cover'}}>
                            Discord Bots
                        </CardTitle>
                        <CardText>
                            As a fun side project, I started creating bots which can be used on Discord, a modern voice and text chat app. The initial idea transformed into a fun bot that connected to the Markov Chain Text Generator I had created, as well as allowed for a few other features like pulling images from Google.
                            <br/><br/>
                            The more interesting bot is used for collecting and displaying stock market data. Using IEXchange data and PyPlot, the bot is able to display charts of varying time ranges based on a ticker input by the user.
                        </CardText>
                        <CardActions border>
                        <Button colored><a href="https://github.com/mihaidan/DiscordBots" style={{textDecoration: 'none', color: 'darkblue'}} target="_blank" rel="noopener noreferrer">GitHub</a></Button> 
                        </CardActions>
                    </Card>
                </div>
            )
        }else if (this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://heavyeditorial.files.wordpress.com/2018/11/uppercase-ghostcover.jpg?quality=65&strip=all&w=425) center / cover'}}>
                            Markov Chain Text Generator
                        </CardTitle>
                        <CardText>
                            Random text generator from a set of pre-defined sentences. The text is generated using the Markov Chain algorithm.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/mihaidan/TextGenerator" style={{textDecoration: 'none', color: 'darkblue'}} target="_blank" rel="noopener noreferrer">GitHub</a></Button> 
                        </CardActions>
                    </Card>
                </div>
            )
        }else if (this.state.activeTab === 3){
            return(
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                            Portfolio Website
                        </CardTitle>
                        <CardText>
                            I created this website as an opportunity to learn React. As I discover and get comfortable with more interesting features, they will be added to the website.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/mihaidan/" style={{textDecoration: 'none', color: 'darkblue'}} target="_blank" rel="noopener noreferrer">GitHub</a></Button> 
                        </CardActions>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Haskell</Tab>
                    <Tab>Python</Tab>
                    <Tab>Clojure</Tab>
                    <Tab>React</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;