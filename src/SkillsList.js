import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Skill from './Skill.js';

class SkillsList extends Component {
  render() {
    return (
      <Grid container spacing={16} justify='center'>
        {
          this.props.skills.map((skill, index) => {
            return(
              <Skill key={index} name={skill.name} icon={skill.iconClass}/>
            );
            
          })
        }
      </Grid>
    );
  }
}

export default SkillsList;
