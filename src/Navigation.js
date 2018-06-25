import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

class Navigation extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  handleClick = (event) => {
    this.setState({ 
      anchorEl: event.currentTarget,
    });
  }

  handleClose = () => {
    this.setState({
      anchorEl: null,
    })
  }


  render() {
    return (
      <AppBar position="sticky" >
        <Toolbar>
          <IconButton 
            color="inherit" 
            aria-label="Menu"
            aria-owns={this.state.anchorEl ? "nav-menu" : null} 
            aria-haspopup="true"
            onClick={this.handleClick} >

            <MenuIcon />  

          </IconButton>

          <Menu 
            id="nav-menu" 
            open={Boolean(this.state.anchorEl)} 
            anchorEl={this.state.anchorEl}
            onClose={this.handleClose} >

            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>

          </Menu>

          <Typography 
            variant="title" 
            color="inherit" >
            {this.props.name}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navigation;
