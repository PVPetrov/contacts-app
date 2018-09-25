import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LogInForm from './forms/LogInForm';

const LoginPage = () => (
    <div>
        <h2>LoginPage</h2>
        <Switch>
            <Route path="/login" component={LogInForm} />
        </Switch>
    </div>
);

export default LoginPage;
