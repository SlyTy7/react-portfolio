import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


class Skill extends Component {
  render() {
    return (
      <Grid item xs={2}>
        <Card style={{padding: '5px', backgroundColor: '#3f51b5'}}>
          <Typography align='center' style={{color: '#fff'}}>
            <i className={this.props.icon}></i>
          </Typography>
          
          <Typography align='center' style={{color: '#fff'}}>
            {this.props.name}
          </Typography>
        </Card>
        
      </Grid>
    );
  }
}

export default Skill;
