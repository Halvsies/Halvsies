import React from "react";
import axios from "axios";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

/* ===== parent component ===== */
class Login extends React.Component {

  render() {

    return (

      <div className="container">
        <div className="center">
        <h2>Halvsies</h2>
        <p>noun</p>

        <h4>1. an arrangment to split your groceries with another person</h4>

        <div className="btn-center">
        <Link to="/listings" className="btn btn-success btn-login">Login</Link>
      </div>
      </div>
      </div>

    )
  }

}

module.exports = Login;
