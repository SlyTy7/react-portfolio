import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


class SocialButton extends Component {
  render() {
    return (
      <Grid item>
        <a href={this.props.link} target='_blank' rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>
          {/* ICON */}
          <Typography align="center" color="primary" gutterBottom>      
            <i className={this.props.icon}></i>
          </Typography> 

          {/* DESCRIPTION */}
          <Typography align="center" variant="body1" >
            {this.props.name}
          </Typography>
        </a>  
        
      </Grid>
    );
  }
}

export default SocialButton;