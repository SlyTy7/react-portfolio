import React, { Component } from 'react';
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
              
              <Chip label={item} key={index} style={{margin: '3px', padding: '0px', fontSize: '.68rem', backgroundColor: '#424242', color: '#fff'}}/>
              
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