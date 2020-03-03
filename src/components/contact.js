import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    {/* Left Side */}
                    <Cell col={6}>
                        <h2>Mihai Dan</h2>
                        <img 
                            src= {require('./images/grad2.jpg')}
                            alt= "avatar"
                            style={{height: '250px'}}
                        />

                        <br/><br/>

                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Thank you for taking the time to look over my website. If you have any questions or would like to discuss possible opportunities, feel free to contact me via phone or email.
                        </p>
                    </Cell>

                    {/* Right Side */}
                    <Cell col={6}>
                        <h2>Contact Me</h2>

                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (503) 867-0980
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        mihaidan418@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                            {/*<Grid>
                                <Cell col={3}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                </Cell>
                                <Cell col={9} style={{fontSize: '30px', fontFamily: 'Anton', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    (503) 867-0980
                                </Cell>
                                <Cell col={2}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                </Cell>
                                <Cell col={10} style={{fontSize: '30px', fontFamily: 'Anton', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    (503) 867-0980
                                </Cell>
                            </Grid>*/}
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;