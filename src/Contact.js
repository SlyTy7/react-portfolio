import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ContactForm from './ContactForm.js';
import Grid from '@material-ui/core/Grid';

class Contact extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item>
          <Paper style={{minHeight: '400px', maxWidth: '1000px', padding: '25px', margin: '15px'}}>
            <Typography variant='display2' align='center' component='h2' color='secondary' gutterBottom>
              {this.props.title}
            </Typography>

            <Divider style={{marginBottom: '30px'}}/>
            
            <ContactForm />

          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Contact;