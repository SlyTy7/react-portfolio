import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Project from './Project.js';
import GldShop from './imgs/gldshop.png';
import AdoptionLife from './imgs/adoptionlife.png';
import CoinRate from './imgs/coinrate.png';
import ReactTodo from './imgs/reacttodo.png';
import MovieFind from './imgs/moviefind.png';
import TomatoTime from './imgs/tomatotime.png';

class Projects extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects: [
        {
          name: 'The GLD Shop',
          image: GldShop,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta.',
          codeLink: '',
          projectLink: 'https://www.thegldshop.com/',
          skills: [
            'HTML 5',
            'CSS 3',
            'Javascript',
            'Shopify'
          ],
        },
        {
          name: 'Adoption Life',
          image: AdoptionLife,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta.',
          codeLink: '',
          projectLink: 'https://adoptionlife.org/',
          skills: [
            'HTML 5',
            'CSS 3',
            'Javascript',
            'Wordpress'
          ],
        },
        {
          name: 'Coin Rate',
          image: CoinRate,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta.',
          codeLink: 'https://github.com/SlyTy7/CoinRate',
          projectLink: 'https://slyty7.github.io/CoinRate/',
          skills: [
            'HTML 5',
            'CSS 3',
            'JavaScript',
            'jQuery',
            'Bootstrap',
            'Bootswatch',
            'ChartJS',
            'Coin Desk API',
          ],
        },
        {
          name: 'React-Todo',
          image: ReactTodo,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta.',
          codeLink: 'https://github.com/SlyTy7/react-todo',
          projectLink: 'https://slyty7.github.io/react-todo/',
          skills: [
            'HTML 5',
            'CSS 3',
            'JavaScript',
            'ReactJS',
            'NPM',
            'Material UI',
            'Yarn'
          ],
        },
        {
          name: 'Movie Find',
          image: MovieFind,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta.',
          codeLink: 'https://github.com/SlyTy7/MovieFind',
          projectLink: 'https://slyty7.github.io/MovieFind/',
          skills: [
            'HTML 5',
            'CSS 3',
            'JavaScript',
            'Bootstrap',
            'Bootswatch',
            'Axios',
            'The Movie DB API',
            'LogoMakr',
          ],
        },
        {
          name: 'Tomato Time',
          image: TomatoTime,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta.',
          codeLink: 'https://github.com/SlyTy7/pomodoro',
          projectLink: 'https://slyty7.github.io/pomodoro/',
          skills: [
            'HTML 5',
            'CSS 3',
            'JavaScript',
            'Bootstrap',
            'Font Awesome',
            'Google Fonts'
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