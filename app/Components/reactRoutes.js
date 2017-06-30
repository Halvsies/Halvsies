import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory} from "react-router";

var hashHistory = router.hashHistory;
// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

import {Main} from "Main"
// import {Login} from "main"
// import {Home} from "./components/Home"
// import {Buy} from "./components/Buy"
// import {Sell} from "./components/Sell"

class reactRoutes extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
      return (
        <Router history={browserHistory}>
          <Route path={"/"} component={Main}/>
          // <Route path={"/"} component={Login}/>
          // <Route path={"/Home"} component={Home}/>
          // <Route path={"/Buy"} component={Buy}/>
          // <Route path={"/Sell"} component={Buy}/>
        </Router>
        );
      }
}

export default reactRoutes;
