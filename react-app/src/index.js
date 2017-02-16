import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './App'
import {Provider, connect} from 'react-redux'
import store from './store'

let App = connect((store) => store )(WeatherApp)

ReactDOM.render(
	<Provider store={store}><App/></Provider>, 
	document.getElementById('root')
);