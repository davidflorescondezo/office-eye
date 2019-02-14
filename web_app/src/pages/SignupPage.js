import React, { Component } from 'react';
import Header from './layout/Header.js';
//import Footer from '../components/layout/footer.js';
import SignUp from '../account/SignUp.js';
import * as routes from '../router/routes.js';
import { Link, withRouter,} from 'react-router-dom';
import { Button } from 'antd';
import '../css/SignupPage.css';


class SignupPage extends Component {
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
                    <h3 className="Fluff-title">Sign Up to your Personal OfficEye Experience</h3>
                    <div className="App-signUpElements">
                        <div className="SignUpPart">
                        <div className="LogInalign">
                            <SignUp/>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="logo">
                        <img src="http://gdurl.com/e_S5"/*"http://gdurl.com/nG0G"*/ className="Header-logo" alt="logo" style={{width:230, height:"auto"}}/>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>

                    </div><br/>
                    <span style={{fontFamily: 'sans-serif'}} className="Signcontent">
                    Collaboration, coursework discussion and study groups amongst likeminded people
                    </span>
                    <p></p>
                    <Link to={routes.SIGN_IN}>
                        <Button variant="raised" color="primary"
                        id="getStarted"
                        label="Get-Started"
                        value="Get-Started"
                        marginTop="normal"
                        >
                            Sign in Instead
                        </Button>
                    </Link>
                    
                </div>
                </div>
                </div>
            </div>
        )
    }
}
export default SignupPage;