import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Project from './Project.js';

class Projects extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects: [
        {
          name: 'placeholder',
          image: 'https://placeimg.com/640/480/any',
          description: 'lorem ipsum lodi dodi we like to party, we dont casue trouble, we dont bother nobody',
          codeLink: '',
          projectLink: '',
          skills: [],
        },
        {
          name: 'placeholder',
          image: 'https://placeimg.com/640/480/any',
          description: 'lorem ipsum lodi dodi we like to party, we dont casue trouble, we dont bother nobody',
          codeLink: '',
          projectLink: ''
        },
        {
          name: 'placeholder',
          image: 'https://placeimg.com/640/480/any',
          description: 'lorem ipsum lodi dodi we like to party, we dont casue trouble, we dont bother nobody',
          codeLink: '',
          projectLink: ''
        },
        {
          name: 'placeholder',
          image: 'https://placeimg.com/640/480/any',
          description: 'lorem ipsum lodi dodi we like to party, we dont casue trouble, we dont bother nobody',
          codeLink: '',
          projectLink: ''
        },
        {
          name: 'placeholder',
          image: 'https://placeimg.com/640/480/any',
          description: 'lorem ipsum lodi dodi we like to party, we dont casue trouble, we dont bother nobody',
          codeLink: '',
          projectLink: ''
        },
        {
          name: 'placeholder',
          image: 'https://placeimg.com/640/480/any',
          description: 'lorem ipsum lodi dodi we like to party, we dont casue trouble, we dont bother nobody',
          codeLink: '',
          projectLink: ''
        },
        {
          name: 'placeholder',
          image: 'https://placeimg.com/640/480/any',
          description: 'lorem ipsum lodi dodi we like to party, we dont casue trouble, we dont bother nobody',
          codeLink: '',
          projectLink: ''
        },
        {
          name: 'placeholder',
          image: 'https://placeimg.com/640/480/any',
          description: 'lorem ipsum lodi dodi we like to party, we dont casue trouble, we dont bother nobody',
          codeLink: '',
          projectLink: ''
        },
        {
          name: 'placeholder',
          image: 'https://placeimg.com/640/480/any',
          description: 'lorem ipsum lodi dodi we like to party, we dont casue trouble, we dont bother nobody',
          codeLink: '',
          projectLink: ''
        },
      ]
    }
  }

  render() {
    return (
      <Grid container spacing={32} justify='center'>
        {
          this.state.projects.map((item, index) => {
            return (
              <Grid item xs={10} sm={6} md={4} xl={3} key={'key' + index}>
                <Project project={item}/>
              </Grid>
            )
          })   
        }
      </Grid>
    );
  }
}

export default Projects;