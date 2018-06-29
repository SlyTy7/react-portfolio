import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


class ContactForm extends Component {
  render() {
    return (
      <Paper style={{maxWidth: '700px', margin: '25px auto', padding: '25px'}} >

        <form action="https://formspree.io/tyler.j.west.7@gmail.com" method="POST" >
          <FormControl fullWidth margin='normal'>
            <TextField name='Name' label='Name' />
          </FormControl>

          <FormControl fullWidth margin='normal'>
            <TextField name='Email' label='Email' />
          </FormControl>

          <FormControl fullWidth margin='normal'>
            <TextField name='Phone' label='Phone Number' />
          </FormControl>
          
          <FormControl fullWidth margin='normal'>
            <TextField multiline name='Message' label='Message' />
          </FormControl>



          <Button variant="contained" color="primary" type='submit' style={{marginTop: '25px'}}>
            Send
          </Button>
        </form>
      
      </Paper>
    );
  }
}

export default ContactForm;