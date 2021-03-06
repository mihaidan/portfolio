import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component {
    render () {
        return(
            <Grid>
                <Cell col={4}>
                    <h5 style={{marginTop: '0px'}}>{this.props.companyName}</h5>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
                    <p>{this.props.jobDescription}</p>

                    <ul>
                        <li>{this.props.item1}</li>
                        <li>{this.props.item2}</li>
                        <li>{this.props.item3}</li>
                    </ul>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;