import React, { Component } from 'react';
import HeaderRightPart from './layout/HeaderRightPart';
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
                <div className="landing_banner">
                    <div className="Right-part"><HeaderRightPart authUser={this.props.authUser}/></div>
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
                        Find Out More

                        </Button></MuiThemeProvider>
                    </Link></div>
                    </p>
                </div>

                <p className="Block3">
                    <p className="line3rd">
                        OfficeEye for Employers
                    </p>
                </p>

                <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <th>
                        <img className="landing_img" src="http://gdurl.com/Dz-O" alt="Businness Photo"/>
                        <p className="line4th">
                        As an employer do you often struggle keeping employees motivated? </p>
                    </th>
                    <th>
                        <img className="landing_img" src="http://gdurl.com/G8gX" alt="Businness Photo"/>
                        <p className="line4th">
                        Do you wish you could know what all your employees are really upto?  </p>
                    </th>
                    <th>
                        <img className="landing_img" src="http://gdurl.com/B1un" alt="Businness Photo"/>
                        <p className="line4th">
                        Do you wish you could know how many hrs a day they spend working?</p>
                    </th>
                </tr>
                </table>
                    <div className="landing_2ndBanner">
                    <p className="Block3">
                        <p className="line3rd">
                            We are Offering...
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
