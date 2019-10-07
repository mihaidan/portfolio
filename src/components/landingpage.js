import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                            src= {require('./images/grad-circle.png')}
                            alt= "avatar"
                            className= "avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Computer Science Masters Graduate</h1>

                            <hr/>

                            <p>Python | Haskell | Git | C/C++ | SQL | LaTeX | Agile Development</p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/mihai-dan-6734b9ab/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/mihaidan" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* Thesis */}
                                <a href="https://ir.library.oregonstate.edu/concern/graduate_thesis_or_dissertations/z316q720n" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-graduation-cap" aria-hidden="true" />
                                </a>
                                {/* Published Paper */}
                                <a href="https://dl.acm.org/citation.cfm?id=3278136" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-file-text-o" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;