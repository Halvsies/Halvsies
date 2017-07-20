var React = require('react');
var axios = require('axios');
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

var helpers = require('./utils/helpers');
var SellView = require('./Children/SellView');
var SellList = require('./Children/SellList');

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-blue">
            <div className="container">
              <div className="navbar-header navbar-header-white">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to="/listings" className="navbar-brand">Halvsies</Link>
              </div>
              <div id="navbar" className="navbar-collapse collapse">

                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/listings">List Groceries</Link>
                  </li>
                  <li>
                    <Link to="/find">Find Available Halvsies</Link>
                  </li>
                </ul>

              </div>

            </div>

          </nav>

          {/* <Route exact path="/" component={Home}/> */}
          <div className="main">
          <Route exact path="/" component={SellView}/>
          <Route path="/find" component={SellList}/>
          <Route path="/listings" component={SellView}/>
          </div>
          <div id="footer">
            <div className="container">
              {/* <p className="footer-block">Made with &lt;&gt; and <span className="red">&hearts;</span>
              </p> */}
              <p className="footer-block">Made with <i className="glyphicon glyphicon-chevron-left"></i><i className="glyphicon glyphicon-chevron-right"></i> and &nbsp;<i className="glyphicon glyphicon-headphones"></i>
              </p>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

module.exports = Main;
