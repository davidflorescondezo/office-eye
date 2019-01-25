import React, { Component } from 'react';
import Sidebar from '../components/layout/Sidebar.js';
import UpcomingList from '../components/UpcomingList.js';
import '../styles/Dashboard.css';
import { Layout, Menu, Icon, Button } from 'antd';
import {Link, Redirect, Route, Switch, Router} from 'react-router-dom';
import 'antd/dist/antd.css';
import * as routes from "../router/routes";
import {auth,database,storage} from '../firebase/firebase';

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
        };
        if(this.state.authUserDir){
            this.userDir = database.ref('/users').child(this.state.authUserDir.uid);
        }
        this.enrolRef = database.ref('/users/'+ this.state.userDir + '/enrollment');
        this.userRef = database.ref('/users').child('Anonymous');
    }

    componentDidMount(){
        auth.onAuthStateChanged((authUser) => {
            authUser
                ? this.setState(() => ({ authUser }))
                : this.setState(() => ({ authUser: null }));
            if (authUser) {
                this.userRef = database.ref('users').child(authUser.uid);
                this.enrolRef.on('value',(snapshot) => {
                    var judgeEnrollment = snapshot.numChildren();
                    this.setState({judgeEnrollment});

                });
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
    }

    render(){
        return(
            this.state.authUser
                ?(
                    <Layout>
                        <Route  render={(props) => (
                            <Sidebar {...props} /> )}/>

                        <Layout>

                            <Content
                                style={{ background: '#fff', padding: '24px 24px 24px 35px', margin: 0, minHeight: 280 }}>
                                <div>
                                    <Switch>
                                        <Route exact path={'/Dashboard'} component={UpcomingList} />

                                    </Switch>
                                </div>
                            </Content>
                        </Layout>
                    </Layout>)
                : (<Redirect to={routes.SIGN_IN}/>)

        )
    }
}

export default Dashboard;
//   <Sidebar grouplist={grouplist}/>
// <Route exact path={'/Dashboard/forum/newPostDetail'} component={NewPostDetail}/>
// <Route exact path={'/Dashboard/forum'} component={forum}/>
// <Route exact path={'/Dashboard/forum/postDetail'} component={PostDetail}/>
