import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, hashHistory, IndexRoute} from "react-router";

import {Main} from "./Main.js"

// import {Login} from "main"
// import {Home} from "./components/Home"
// import {Buy} from "./components/Buy"
// import {Sell} from "./components/Sell"

class reactRoutes extends React.Component {

    render() {
      return (
        <Router history={browserHistory}>
          <Route path={"/"} component={Main}/>
        </Router>
        );
      }
}

export default reactRoutes;
