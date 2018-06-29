import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


class Skill extends Component {
  render() {
    return (
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Card raised={true} style={{padding: '5px', backgroundColor: '#2196f3'}}>
          <Typography align='center' style={{color: '#fff'}}>
            <i className={this.props.icon}></i>
          </Typography>
          
          <Typography align='center' variant='body2' style={{color: '#fff'}}>
            {this.props.name}
          </Typography>
        </Card>
        
      </Grid>
    );
  }
}

export default Skill;
