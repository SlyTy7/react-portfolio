import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ProjectList from './ProjectList.js';
import Grid from '@material-ui/core/Grid';

class Projects extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item>
          <Paper style={{minHeight: '400px', maxWidth: '1000px', padding: '25px', margin: '15px'}}>
            <Typography variant='display3' align='center' component='h2' color='secondary' gutterBottom>
              {this.props.title}
            </Typography>

            <Divider style={{marginBottom: '30px'}}/>

            <ProjectList />

          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Projects;