import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Logo from './compass.png'

class Hero extends Component {
  render() {
    return (
      <div style={{margin: '20px auto', maxWidth: '1000px', padding: '15px' }}>
        <Typography 
          onMouseEnter={this.handleHoverEnter} 
          onMouseLeave={this.handleHoverLeave} 
          variant="display4" 
          color='primary' 
          style={{fontFamily: 'Open Sans, sans-serif', fontWeight: '800', fontSize: '196px', lineHeight: '.85em'}} >
          {this.props.firstName}
        </Typography>
        <Typography 
          onMouseEnter={this.handleHoverEnter} 
          onMouseLeave={this.handleHoverLeave} 
          variant="display4" 
          color='primary' 
          style={{fontFamily: 'Open Sans, sans-serif', fontWeight: '800', fontSize: '196px', lineHeight: '.85em', margin: '0px 0px 15px 10%', display: 'inline-block'}} >
          {this.props.lastName}
        </Typography>

        <img src={Logo} alt='compass rose' style={{display: 'inline-block', width: '220px', height: '250px', position: 'absolute', margin: '-25px 0px 0px 10px'}}/>

        

        <Typography variant="display2" color='primary' style={{fontFamily: 'Open Sans, sans-serif', fontWeight: '800', fontSize: '30px', fontStyle: 'italic'}}>
          {this.props.title}
        </Typography>
      </div>
    );
  }
}

export default Hero;
