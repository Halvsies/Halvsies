// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

import { routeConfig } from './routes';
const routes = routeConfig();

const app = document.getElementById('app')

ReactDOM.render(routes , app)
