import React, { Component } from 'react';

import Headers from './layout/Header.js';

import '../css/Dashboard.css';
import { Layout, Menu, Icon, Button } from 'antd';
import {Link, Redirect, Route, Switch, Router} from 'react-router-dom';
import 'antd/dist/antd.css';
import * as routes from "../router/routes";
import {auth,database,storage} from '../firebase/firebase';

import Graph from "../account/graph"
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const { Sider, Content, Header} = Layout;
class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            thekey : this.props.key,
            //authUser : auth.currentUser,
            authUser: this.props.authUser,
            selectedKey: '',
            collapsed: false,
            authUserDir: auth.currentUser,
            graphRef: [],
            employee: '',
        };
        if(this.state.authUserDir){
            this.userDir = database.ref('/users').child(this.state.authUserDir.uid);
        }
        this.userRef = database.ref('/users').child('Anonymous');
    }

    componentDidMount(){
        auth.onAuthStateChanged((authUser) => {
            authUser
                ? this.setState(() => ({ authUser }))
                : this.setState(() => ({ authUser: null }));
            if (authUser) {
                this.userRef = database.ref('users').child(authUser.uid);

                this.state.employee = authUser.email;
            }
        })

        if (this.state.authUserDir === null){

        }

    }

    componentWillMount() {
        auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState(() => ({ authUser }))
                : this.setState(() => ({ authUser: null }));
        })

        //graphRef
        let _this = this;
        //if(this.state.authUserDir && (this.state.judgeEnrollment != 0)) {
            //let postsRef1 = database.ref('/arduinoData').orderByValue().limitToLast(1);//ONLY FOR ETHERNET
            let postsRef1 = database.ref('/arduinoData').orderByChild("value").limitToLast(1); //ONLY FOR WIFI
            console.log(postsRef1);

            postsRef1.on("value", function(snapshot) {
                snapshot.forEach(function(child) {
                  console.log(child.val().value);
                  _this.setState({graphRef: child.val()});
                });
              }); //ONLY FOR WIFI

            /*postsRef1.on('value', (snapshot) => {
                this.setState({graphRef: snapshot.val().value})
                console.log(snapshot.val().value);
            });*/ //ONLY FOR ETHERNET
       // }
    }

    render(){
        let graphRef = this.state.graphRef;
        if (graphRef){
            var graphList = Object.keys(graphRef).map(function(key, index) {
                return  graphRef[key]
            });
        }
        else var graphList = [];

        var fullData = [
            {
                employeeName: this.state.employee,
                currentTime: graphList
            },
            {
                employeeName: "employeeNo2@gmail.com",
                currentTime: 20
            },
            {
                employeeName: "employeeNo3@gmail.com",
                currentTime: 5
            },
            {
                employeeName: "employeeNo4@gmail.com",
                currentTime: 40
            },
            {
                employeeName: "employeeNo5@gmail.com",
                currentTime: 70
            }
        ]

        if((Math.floor((Math.floor((graphList)/60))/60)) == 0){
            var hoursLeft = 0;
        }
        else 
            var hoursLeft = (8/(Math.floor((Math.floor((graphList)/60))/60)))*100;
        
        var percentage = hoursLeft

        return(
            this.state.authUser
                ?(
                    <div className="boxContainer">
                        <Headers authUser={this.props.authUser}/>
                        <div className="selfContainer">
                        <h2>Current Employee Working Time <span className="dateStyle">{Date()}</span></h2>
                        <div className="tableBStyle">
                        <table>
                            <tr>
                                <th><h3>&nbsp;<Icon type="clock-circle" />&nbsp;Total hours spent working</h3></th>
                                <th><h3>&nbsp;<Icon type="clock-circle" />&nbsp;Total minutes spent working</h3></th>
                                <th><h3>&nbsp;<Icon type="clock-circle" />&nbsp;Total seconds spent working</h3></th>
                            </tr>
                            <tr>
                                <td className="tableStyle" width="35%"><h1>&nbsp; {Math.floor((Math.floor((graphList)/60))/60)/*HOURS*/}</h1></td>
                                <td className="tableStyle" width="35%"><h1>&nbsp; {Math.floor((graphList)/60)/*MINUTES*/}</h1></td> 
                                <td width="40%"><h1>&nbsp; {graphList/*SECONDS*/}</h1></td>
                                <td></td>
                            </tr>
                        </table>
                        </div>
                    </div>
                    <div className="graphBg">
                    <table>
                        <tr>
                            <td width="90%">
                                <Graph
                                    times={fullData}
                                    graphTitle="Current Monitoring"
                                />
                            </td>
                            <td width="10%">
                                <div className="circleGraph">
                                <CircularProgressbar
                                    percentage={percentage}
                                    text={`${percentage}%`}
                                    styles={{
                                        path: { stroke: `rgba(0, 153, 51, ${percentage / 100})` },
                                        text: { fill: '#003300', fontSize: '26px' },
                                    }}
                                /> <div className="circleFont"> Hours left to finish work day </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    </div>
                    </div>
)
                : (<Redirect to={routes.SIGN_IN}/>)

        )
    }
}

export default Dashboard;
