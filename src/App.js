import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from './Navigation.js'
/*import Hero from './Hero.js'
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact.js';*/
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] }, // Purple and green play nicely together.
    secondary: { main: grey[800] }, // This is just green.A700 as hex.
  },
});

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      user: {
        firstName: 'TYLER',
        lastName: 'WEST',
        fullName: 'Tyler West',
        title: 'Front-End Web Developer',
        skills: [
          {
            name: 'HTML',
            iconClass: 'fab fa-html5 fa-6x'
          },
          {
            name: 'CSS',
            iconClass: 'fab fa-css3-alt fa-6x'
          },
          {
            name: 'Javascript',
            iconClass: 'fab fa-js fa-6x'
          },
          {
            name: 'ReactJS',
            iconClass: 'fab fa-react fa-6x'
          },
          {
            name: 'NodeJS',
            iconClass: 'fab fa-node-js fa-6x'
          },
          {
            name: 'AngularJS',
            iconClass: 'fab fa-angular fa-6x'
          },
          {
            name: 'Bootstrap',
            iconClass: 'fab fa-twitter-square fa-6x'
          },
          {
            name: 'jQuery',
            iconClass: 'fab fa-js fa-6x'
          },
          {
            name: 'Git',
            iconClass: 'fab fa-git-square fa-6x'
          },
          {
            name: 'AJAX & APIs',
            iconClass: 'fab fa-js fa-6x'
          },
          {
            name: 'Wordpress',
            iconClass: 'fab fa-wordpress fa-6x'
          },
        ],
      }
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">

          <Navigation name={this.state.user.fullName} skills={this.state.user.skills} />

        {/*
        TODO: 
          Refactor this code so its not all nested into the nav bar
          Create component for subsections
        */}

          {/*
          MOVED COMPS TO NAVIGATION.JS; MIGHT CHANGE THIS UP LATER FOR A BETTER DATA FLOW

          <Hero firstName={this.state.user.firstName} lastName={this.state.user.lastName} title={this.state.user.title} />

          <About title="About" />

          <Skills title="Skills" skills={this.state.user.skills} />

          <Projects title="Projects" />

          <Contact title="Contact" />
          */}

        </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
