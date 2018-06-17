import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from './Navigation.js'
import Hero from './Hero.js'
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import './App.css';

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
            iconClass: 'fab fa-html5 fa-9x'
          },
          {
            name: 'CSS',
            iconClass: 'fab fa-css3-alt fa-9x'
          },
          {
            name: 'Javascript',
            iconClass: 'fab fa-js fa-9x'
          },
          {
            name: 'ReactJS',
            iconClass: 'fab fa-react fa-9x'
          },
          {
            name: 'NodeJS',
            iconClass: 'fab fa-node-js fa-9x'
          },
          {
            name: 'AngularJS',
            iconClass: 'fab fa-angular fa-9x'
          },
          {
            name: 'Bootstrap',
            iconClass: 'fab fa-twitter-square fa-9x'
          },
          {
            name: 'jQuery',
            iconClass: 'fab fa-js fa-9x'
          },
          {
            name: 'Git',
            iconClass: 'fab fa-git-square fa-9x'
          },
          {
            name: 'AJAX & APIs',
            iconClass: 'fab fa-js fa-9x'
          },
          {
            name: 'Wordpress',
            iconClass: 'fab fa-wordpress fa-9x'
          },
        ],
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">

          <Navigation name={this.state.user.fullName} />

          <Hero firstName={this.state.user.firstName} lastName={this.state.user.lastName} title={this.state.user.title} />

          <About title="About" />

          <Skills title="Skills" skills={this.state.user.skills} />

          <Projects title="Projects" />

          <Contact title="Contact" />

        </div>
      </React.Fragment>
      
    );
  }
}

export default App;
