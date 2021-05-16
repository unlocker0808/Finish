import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import Login from '../UserReact/Login';
import SignUp from '../UserReact/SignUp';

import Forgot from '../UserReact/Forgot';


export default class MyRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signUp" component={SignUp}/>
                    <Route exact path="/forgot" component={Forgot}/>

                </div>
            </Router>
        )
    }
}
