import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { newsReducer } from './news/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ newsReducer });

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
