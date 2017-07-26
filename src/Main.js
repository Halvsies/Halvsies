import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SellView from './SellView/SellView';
import BuyView from './BuyView/BuyView';

class Main extends React.Component {
  render() {
    return (

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
                <Link to="/SellView" className="navbar-brand">Halvsies</Link>
              </div>
              <div id="navbar" className="navbar-collapse collapse">

                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/SellView">List Groceries</Link>
                  </li>
                  <li>
                    <Link to="/BuyView">Find Available Halvsies</Link>
                  </li>
                </ul>

              </div>

            </div>

          </nav>

          <div id="footer">
            <div className="container">
              <p className="footer-block">Made with <i className="glyphicon glyphicon-chevron-left"></i><i className="glyphicon glyphicon-chevron-right"></i> and &nbsp;<i className="glyphicon glyphicon-headphones"></i>
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default Main;
