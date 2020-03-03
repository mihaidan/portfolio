import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component {
    render () {
        return(
            <Grid>
                <Cell col={4}>
                    <h5 style={{marginTop: '0px'}}>{this.props.schoolName}</h5>
                    <p>GPA: {this.props.GPA}</p>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.degree}</h4>
                    <p>{this.props.schoolDescription}</p>

                    <h5>Interesting courses include</h5>
                    <ul>
                        <li>{this.props.class1}</li>
                        <li>{this.props.class2}</li>
                        <li>{this.props.class3}</li>
                    </ul>
                </Cell>
            </Grid>
        )
    }
}

export default Education;