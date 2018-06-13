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
        title: 'Front-End Web Developer'
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

          <Skills title="Skills" />

          <Projects title="Projects" />

          <Contact title="Contact" />

        </div>
      </React.Fragment>
      
    );
  }
}

export default App;
