import React, { Component } from 'react';
import Header from './layout/Header.js';
//import Footer from '../components/layout/footer.js';
import Login from '../account/Login.js';
import * as routes from '../router/routes.js';
import { Link, withRouter,} from 'react-router-dom';
import { Button } from 'antd';
import '../css/SignupPage.css';


class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            content : '',
        }
    }
//I have no idea if inherit "authenticated" work here, because this page is called by router.
    render() {
        return (
            <div>
                <Header authUser={this.props.authUser}/>
                <div className="Fluff-content" align="center">
                <div className="Fluff-container">
                <div className="Fluff-insidecontainer">
                    <div className="Fluff-introduction">
                    <h3 className="Fluff-title">Login to your Personal OfficEye Experience</h3>
                    <div className="App-signUpElements">
                        <div className="SignUpPart">
                        <div className="LogInalign">
                            <Login/>
                        </div>
                            <Link to={routes.SIGN_UP}>
                            <Button variant="raised" color="primary"
                            id="getStarted"
                            label="Get-Started"
                            value="Get-Started"
                            marginTop="normal"
                            >
                                Sign up Instead
                            </Button>
                            </Link>
                        </div>
                    </div>
                    </div>
                    
                </div>
                </div>
                </div>
            </div>
        )
    }
}
export default LoginPage;