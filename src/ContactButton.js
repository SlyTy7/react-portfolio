import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


class ContactButton extends Component {
  render() {
    return (
      <Grid item>
        <a href={this.props.link} target='_blank' style={{ color: '#fff', textDecoration: 'none' }}>
          <Card raised style={{ backgroundColor: '#3f51b5', padding: '7px' }}>
            <Typography align="center" style={{ color: '#fff' }}>      
              <i className={this.props.icon}></i>
            </Typography>
            
            <Typography align="center" style={{ color: '#fff' }}>
              {this.props.name}
            </Typography>
          </Card>
        </a>  
        
      </Grid>
    );
  }
}

export default ContactButton;