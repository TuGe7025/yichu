import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/layout/App';
import Carts from '@/layout/Carts';
import DetailApp from '@/layout/detailApp';
import { Provider } from 'react-redux';
// import ReactSVG from 'react-svg';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'antd-mobile/dist/antd-mobile.css';
import './main.scss';
// import './mock';

ReactDOM.render(
	<Provider store = { store }>
		<Router>
			<Switch>
				<Route path='/carts' component= { Carts } />
				<Route path='/detailApp' component= { DetailApp } />
				<Route path='/' component= { App } />
			</Switch>
		</Router>
	</Provider>
	, document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
