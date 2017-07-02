// Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Import Components Here
import Main from "./Components/Main.js"

const app = document.getElementById('app')

ReactDOM.render(<Main /> ,app)
