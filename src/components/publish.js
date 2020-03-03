import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Publish extends Component {
    render () {
        return(
            <Grid>
                <Cell col={5}>
                    <h5 style={{marginTop: '0px'}}>{this.props.paperName}</h5>
                    <p>{this.props.conference}</p>
                    <p>{this.props.authors}</p>
                </Cell>
                <Cell col={7}>
                    <h4 style={{marginTop: '0px'}}>Abstract</h4>
                    <p>{this.props.abstract1}</p>
                    <p>{this.props.abstract2}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Publish;