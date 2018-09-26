import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import LogInForm from './forms/LogInForm';
import SignUpForm from './forms/SignUpForm';

const LoginPage = ({match}) => (
    <div>
        <Switch>
            <Route path={`${match.url}/signup`} render={() => <SignUpForm />} />
            <Route path={`${match.url}/login`} component={LogInForm} />
            <Route exact strict path="/auth" render={() => (<p><Button><Link to={`${match.url}/login`}>Log In</Link></Button> or <Button><Link to={`${match.url}/signup`}>Sign Up</Link></Button></p>)}/>
        </Switch>
    </div>
);

export default LoginPage;

LoginPage.propTypes = {
    match: PropTypes.shape({
        isExact: PropTypes.bool,
        params: PropTypes.object,
        path: PropTypes.string,
        url: PropTypes.string
    }).isRequired
}
