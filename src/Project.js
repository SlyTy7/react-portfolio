import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ProjectSkills from './ProjectSkills.js';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Project extends Component {
  constructor(props){
    super(props);

    this.state = {
      hovered: false,
      scale: 1,
    }
  }

  handleHoverEnter = () => {
    this.setState({
      hovered: true,
      scale: 'scale(1.03)',
    })
  }

  handleHoverLeave = () => {
    this.setState({
      hovered: false,
      scale: 'scale(1)',
    })
  }



  render() {
    
    return (
      <Card 
        onMouseEnter={this.handleHoverEnter} 
        onMouseLeave={this.handleHoverLeave} 
        raised={this.state.hovered} 
        style={{transition: '.8s', transform: this.state.scale }} >
        
        {/*Project Thumbnail*/}
        <CardMedia component='img' src={this.props.project.image} />
        
        <CardContent>
          {/*Project Title*/}
          <Typography gutterBottom variant='headline'>
            {this.props.project.name}
          </Typography>

          {/*Project Description*/}
          <Typography gutterBottom>
            {this.props.project.description}
          </Typography>

          {/*Project Skills*/}
          <ProjectSkills skills={this.props.project.skills} />

        </CardContent>

        {/*Project Links*/}
        <CardActions>
          <Button size="small" color="primary">
            See It Live
          </Button>
          <Button size="small" color="primary">
            View Code
          </Button>
        </CardActions>

      </Card>
    );
  }
}

export default Project;