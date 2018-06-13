import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

class ProjectSkills extends Component {
  constructor(props){
    super(props);

    this.state = {
 
    
    }
  }

  render() {
    return (
      <div style={{paddingTop: '15px'}}>
        {
          this.props.skills.map((item, index) => {
            return (
              
                <Chip label={item} style={{margin: '3px', padding: '0px', fontSize: '.68rem', backgroundColor: '#f50057', color: '#fff'}}/>
              
            );
          })
        }
      </div>
    );
  }
}

ProjectSkills.defaultProps = {
  skills: [],
};

export default ProjectSkills;