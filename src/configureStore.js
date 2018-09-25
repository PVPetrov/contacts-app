/* eslint-disable */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

const configureStore = () => {
    const middleware = [thunk];
    const store = createStore(rootReducer, devToolsEnhancer(applyMiddleware(...middleware)));
    return store;
}

export default configureStore;
