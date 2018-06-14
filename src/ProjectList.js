import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Project from './Project.js';

class Projects extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects: [
        {
          name: 'Project Title',
          image: 'https://placeimg.com/640/480/any',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta.',
          codeLink: '',
          projectLink: '',
          skills: [
            'ReactJS',
            'HTML 5',
            'CSS 3',
            'NodeJS',
            'Material UI'
          ],
        },
        {
          name: 'Project Title',
          image: 'https://placeimg.com/640/480/any',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta.',
          codeLink: '',
          projectLink: '',
          skills: [
            'ReactJS',
            'HTML 5',
            'CSS 3',
            'NodeJS',
            'Material UI'
          ],
        },
        {
          name: 'Project Title',
          image: 'https://placeimg.com/640/480/any',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta.',
          codeLink: '',
          projectLink: '',
          skills: [
            'ReactJS',
            'HTML 5',
            'CSS 3',
            'NodeJS',
            'Material UI'
          ],
        },
        {
          name: 'Project Title',
          image: 'https://placeimg.com/640/480/any',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta.',
          codeLink: '',
          projectLink: '',
          skills: [
            'ReactJS',
            'HTML 5',
            'CSS 3',
            'NodeJS',
            'Material UI'
          ],
        },
        {
          name: 'Project Title',
          image: 'https://placeimg.com/640/480/any',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta.',
          codeLink: '',
          projectLink: '',
          skills: [
            'ReactJS',
            'HTML 5',
            'CSS 3',
            'NodeJS',
            'Material UI'
          ],
        },
        {
          name: 'Project Title',
          image: 'https://placeimg.com/640/480/any',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta.',
          codeLink: '',
          projectLink: '',
          skills: [
            'ReactJS',
            'HTML 5',
            'CSS 3',
            'NodeJS',
            'Material UI'
          ],
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
              <Grid item xs={12} sm={10} md={6} lg={4} xl={3} key={'key' + index}>
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