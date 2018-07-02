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
          description: 'Added tracking code, in javascript, to track visitor conversion rate and revenue rate. This allows greater insight into customer behavior and better search engine optimization.',
          codeLink: '',
          projectLink: 'https://www.thegldshop.com/',
          skills: [
            'HTML 5',
            'CSS 3',
            'Javascript',
            'Shopify',
            'Web Development',
            'SEO'
          ],
        },
        {
          name: 'React-Todo',
          image: ReactTodo,
          description: "A basic to-do list application built with ReactJS and CRUD functionality. The app enables you to build a list of to-do items, mark them as finished, edit your items, and delete your to-dos. It was built with create-react-app and Material UI.",
          codeLink: 'https://github.com/SlyTy7/react-todo',
          projectLink: 'https://slyty7.github.io/react-todo/',
          skills: [
            'HTML 5',
            'CSS 3',
            'JavaScript',
            'ReactJS',
            'NPM',
            'Material UI',
            'Yarn',
            'Git'
          ],
        },
        {
          name: 'Adoption Life',
          image: AdoptionLife,
          description: 'I reconfigured the main landing page to be more responsive and larger CTAs, as well as adding "content lockers" that requires visitors to enter their contact info to unlock certain website content.',
          codeLink: '',
          projectLink: 'https://adoptionlife.org/',
          skills: [
            'HTML 5',
            'CSS 3',
            'Javascript',
            'Wordpress',
            'Opt-In Panda'
          ],
        },
        {
          name: 'Coin Rate',
          image: CoinRate,
          description: "A web application that uses the Coin Desk API to show you the current and past USD rate of Bitcoin.  It will show the rate history up to 30 days ago, and also its rate change percentage. The price graph is made with ChartJS; a javascript framework to visualize data.",
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
            'Git'
          ],
        },
        {
          name: 'Movie Find',
          image: MovieFind,
          description: "An app that uses The Movie DB API to find detailed info about a movies, shows current popular movies, and has a search function to find movies. It's mobile-friendly and responsive, so that it functions on all screen sizes.",
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
            'Git'
          ],
        },
        {
          name: 'Tomato Time',
          image: TomatoTime,
          description: "A pomodoro timer built with vanilla JavaScript and Bootstrap 4. This is a one page application that I built to boost productivity. It has been made mobile-friendly and responsive with Bootstrap 4, which gave me a chance to become familiar with Bootstrap's newest features.",
          codeLink: 'https://github.com/SlyTy7/pomodoro',
          projectLink: 'https://slyty7.github.io/pomodoro/',
          skills: [
            'HTML 5',
            'CSS 3',
            'JavaScript',
            'Bootstrap',
            'Font Awesome',
            'Google Fonts',
            'Git'
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