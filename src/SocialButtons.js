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
          icon: 'fab fa-linkedin-in fa-3x',
        },
        {
          name: 'GitHub',
          link: 'https://github.com/SlyTy7',
          icon: 'fab fa-github fa-3x',
        },
        {
          name: 'Resume',
          link: 'tyler-west-resume.pdf',
          icon: 'fas fa-file-alt fa-3x',
        },
      ]
    }
  }

  render() {
    return (
      <Grid container spacing={32} justify='center'>
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