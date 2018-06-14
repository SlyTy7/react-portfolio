import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

class About extends Component {
  render() {
    return (
      <Paper style={{minHeight: '400px', maxWidth: '1000px', padding: '25px', margin: '30px auto'}}>
        <Typography variant='display3' align='center' component='h2' color='secondary' gutterBottom>
          {this.props.title}
        </Typography>

        <Divider style={{marginBottom: '30px'}}/>

        <Grid container>
          <Grid item xs={12} md={4}>
            <img src='https://placeimg.com/200/200/any' alt='placeholder' style={{margin: '0px auto', display: 'block', borderRadius: '50%'}}/>
          </Grid>
          <Grid item xs={12} md={8} style={{ padding: '0px 20px' }}>
            <Typography variant="body2" component='p' gutterBottom>
              I'm front-end web developer who lives and works in San Francisco, CA and specializes in creating fully responsive and beautiful websites and applications. My background and education in marketing translates into a greater SEO and branding experience overall.
            </Typography>
            <br />
            <Typography variant="body2" component='p'>
              I love to code and I'm always open to new opportunities, so send me a message on <a href='https://www.linkedin.com/in/tylerjwest/' target='_blank' rel='noopener noreferrer'>linkedin</a>. Also, feel free to check out my projects on <a href='https://github.com/SlyTy7' target='_blank' rel='noopener noreferrer'>github</a> or in the projects section.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default About;