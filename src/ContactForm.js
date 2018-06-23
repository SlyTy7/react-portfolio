import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


class ContactForm extends Component {
  render() {
    return (
      <Paper style={{maxWidth: '700px', margin: '25px auto', padding: '25px'}} >

        <FormControl fullWidth margin='normal'>
          <TextField label='Name' />
        </FormControl>

        <FormControl fullWidth margin='normal'>
          <TextField label='Email' />
        </FormControl>

        <FormControl fullWidth margin='normal'>
          <TextField label='Phone Number' />
        </FormControl>
        
        <FormControl fullWidth margin='normal'>
          <TextField label='Message' />
        </FormControl>
      
      </Paper>
    );
  }
}

export default ContactForm;