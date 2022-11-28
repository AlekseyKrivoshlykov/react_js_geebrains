import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import { profileReducer } from './Profile/profileReducer';
import { initialState } from './initialState';
import { composeWithDevTools } from 'redux-devtools-extension'

// export const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(profileReducer, composeEnhancers());

export const store = createStore(
    rootReducer, initialState, composeWithDevTools(applyMiddleware())
);
