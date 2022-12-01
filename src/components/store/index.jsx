import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import { profileReducer } from './Profile/profileReducer';
import { initialState } from './initialState';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// export const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
   
export const store = createStore(
    persistedReducer, initialState, composeWithDevTools(applyMiddleware(thunk))
)

export const persistor = persistStore(store);
