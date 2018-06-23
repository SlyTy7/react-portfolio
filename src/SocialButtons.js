import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import SocialButton from './SocialButton.js';

class SocialButtons extends Component {
  constructor(props){
    super(props);

    this.state = {
      buttons: [
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/tylerjwest/',
          icon: 'fab fa-linkedin fa-4x',
        },
        {
          name: 'GitHub',
          link: 'https://github.com/SlyTy7',
          icon: 'fab fa-github-square fa-4x',
        },
        {
          name: 'Email',
          link: 'tyler.j.west.7@gmail.com',
          icon: 'fas fa-envelope-square fa-4x',
        },
      ]
    }
  }

  render() {
    return (
      <Grid container spacing={16} justify='center'>
        {
          this.state.buttons.map((button, index) => {
            return(
              <SocialButton key={index} name={button.name} link={button.link} icon={button.icon} />
            );
            
          })
        }
      </Grid>
    );
  }
}

export default SocialButtons;