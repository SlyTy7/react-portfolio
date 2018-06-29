import React, { Component } from 'react';
import SocialButtons from './SocialButtons.js';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import AboutImg from './imgs/me.jpg'

class About extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item>
          <Paper style={{minHeight: '400px', maxWidth: '1000px', padding: '25px', margin: '15px'}}>
            <Typography variant='display3' align='center' component='h2' color='secondary' gutterBottom>
              {this.props.title}
            </Typography>

            <Divider style={{marginBottom: '30px'}}/>

            <Grid container>
              <Grid item xs={12} md={4}>
                <img src={AboutImg} alt='placeholder' style={{margin: '0px auto', display: 'block', borderRadius: '50%'}}/>
              </Grid>
              <Grid item xs={12} md={8} style={{ padding: '0px 20px' }}>
                <Typography variant="body1" component='p' gutterBottom>
                  I'm a front-end web developer who lives and works in San Francisco and specializes in creating fully responsive websites and applications. With a background in marketing and web development, I strive to build innovative solutions with technology.
                </Typography>
                <br />
                <Typography variant="body1" component='p'>
                  Are you looking for a front-end developer? Take a look at some of my work and send me a message. I'm always open to new opportunities!
                </Typography>
              </Grid>
            </Grid>

            <SocialButtons />

            <Divider style={{margin: '30px 0px'}}/>

          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default About;