import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import home from '@/views/home/store';
const reducer = combineReducers({
	home
})

export default createStore(reducer, applyMiddleware(thunk))