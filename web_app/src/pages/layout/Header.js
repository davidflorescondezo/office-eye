import React, { Component } from 'react';
import '../../css/LandingPage.css'
//import { Layout, Menu } from 'antd';
import HeaderRightpart from './HeaderRightPart';
//const { Header } = Layout;

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

  render() {
    return (
        <header className="Header-logo-Bar">
            <div className="logo">
                <img src="http://gdurl.com/0Yllm" className="Header-logo-1" alt="logo" />
            </div>

            <div className="Right-part-2"><HeaderRightpart authUser={this.props.authUser}/></div>
        </header>
    );
  }
}

export default Header;
