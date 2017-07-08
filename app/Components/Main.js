var axios = require('axios');

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import React from 'react';

import Buy from './Children/BuyView.js';

var helpers = require('./utils/helpers');
var SellView = require('./Children/SellView');

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/SellView">SellView</Link></li>
          </ul>

          <hr/>


          {/* <Route exact path="/" component={Home}/> */}
          <Route exact path="/" component={SellView}/>
          <Route path="/about" component={About}/>
          <Route path="/SellView" component={SellView}/>
        </div>
      </Router>
    );
  }
}
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
        <li>
        <Link to={`${match.url}/new-topic`}>
          Brand new topic
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

module.exports = Main;
