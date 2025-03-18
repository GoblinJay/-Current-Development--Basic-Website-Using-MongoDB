import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import TwoFactorAuth from '../components/Auth/TwoFactorAuth';

const LoginRegister = () => {
    return (
        <Router>
            <div>
                <h1>Login or Register</h1>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/two-factor-auth" component={TwoFactorAuth} />
                </Switch>
            </div>
        </Router>
    );
};

export default LoginRegister;