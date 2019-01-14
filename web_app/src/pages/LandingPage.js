import React, { Component } from 'react';
//import FluffHeader from '../components/layout/FluffHeader.js';
//import Footer from '../components/layout/footer.js';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import * as routes from '../router/routes';
import {auth} from '../firebase/firebase';
import "../css/LandingPage.css";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { //DARK TURQUOISE
        light: '#39796b',
        main: '#004d40',
        dark: '#00251a',
        contrastText: '#ffffff',
      },
      secondary: { //DARK PINK
        light: '#fa5788',
        main: '#c2185b',
        dark: '#8c0032',
        contrastText: '#ffffff',
      },
  },
});


class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            authUser: this.props.authUser,
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged((authUser) => {
            authUser
                ? this.setState(() => ({ authUser }))
                : this.setState(() => ({ authUser: null }));
        })
    }
    componentWillMount() {
        auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState(() => ({ authUser }))
                : this.setState(() => ({ authUser: null }));
        })
    }
    render(){
        return(
            this.state.authUser
                ? (<Redirect to={routes.HOME}/>)
            : (<div>
                {/*<FluffHeader authUser={this.props.authUser}/>*/}
                <div className="landing_banner">
                    <h1 className="Headline">
                        OfficEye
                    </h1>
                    <p className="line2nd">
                        The IoT solution to workplace unproductivity
                    </p>
                    <p>
                    <div><Link to={routes.SIGN_UP}>
                    <MuiThemeProvider theme={theme}><Button variant="raised" color="primary"
                        id="getStarted"
                        label="Get-Started"
                        value="Get-Started"
                        marginTop="normal"
                    >
                        Get Started

                        </Button></MuiThemeProvider>
                    </Link></div>
                    </p>
                </div>

                <p className="Block2">
                    <p className="line3rd">
                        OfficeEye for learners
                    </p>

                    <p className="line4th">
                    As an employer do you often struggle keeping your employees motivated? <br/>
                    Do you wish you could know what your employees are really upto?  <br/>
                    Do you wish you could know how many hrs a day they really spend working?
                    </p>
                </p>
                    <div className="landing_2ndBanner">
                    <p className="Block3">
                        <p className="line3rd">
                            We are offering...
                        </p>
                        <p className="line5th">
                            OfficeEye is your solution. OfficeEye will keep track of the time your employees spend on their desks and whether they are working on their computers or not. OfficeEye will compile all this information and display it for you in a super easy to use UI for you to manage all your employees, alongside a scoreboard visible to employees to keep them motivated and create a competetive environment encouraging employees to work more.
                        </p>
                    </p>
                    </div>
                    <br/>

                {/*<Footer/>*/}
            </div>)
        )
    }
}

export default LandingPage;
