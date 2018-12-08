import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Header extends Component {

  state = {
    headerShow: false
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if(window.scrollY > 0){
      this.setState({
        headerShow: true
      })
    } else {
      this.setState({
        headerShow: false
      })
    }
  }

  render(){
    return (
      <AppBar
        position = "fixed"
        style = {{
          backgroundColor: this.state.headerShow ? 'transparent' : '#ffffff',
          boxShadow: 'none',
          padding: '10px 0px'
        }}
      >

      <Toolbar>
        <div className="header_logo">
          <div id="site_name">DL News</div>
        </div>

      </Toolbar>
      </AppBar>
    );
  }


}

export default Header;
