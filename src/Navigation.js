import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact.js';


class Navigation extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: 0,
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <React.Fragment>
        <AppBar position="sticky" >
          <Toolbar>        
            <Typography 
              variant="title" 
              color="inherit" >
              {this.props.name}
            </Typography>
          </Toolbar>
          <Tabs 
            value={this.state.value} 
            onChange={this.handleChange} 
            indicatorColor="secondary"
            centered>
            <Tab label="About" />
            <Tab label="Skills" />
            <Tab label="Recent Work" />
            <Tab label="Contact Me" />
          </Tabs>
        </AppBar>

        { this.state.value === 0 && <About title="About" /> }
        { this.state.value === 1 && <Skills title="Skills" skills={this.props.skills} /> }
        { this.state.value === 2 && <Projects title="Projects" /> }
        { this.state.value === 3 && <Contact title="Contact" /> }
      </React.Fragment>
    );
  }
}

export default Navigation;
