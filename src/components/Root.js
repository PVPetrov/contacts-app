import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import App from './App';

const Root = ({store}) => (
    <Provider store={store} >
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
);

export default Root;

Root.propTypes = {
    store: PropTypes.isRequired
}
