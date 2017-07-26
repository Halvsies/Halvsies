import React from 'react';
import {
  Redirect,
  Route,
  Link,
  BrowserRouter as Router } from 'react-router-dom';

import Main from './Main'
import SellView from './SellView/SellView';
import BuyView from './BuyView/BuyView';

export const routeConfig = () => {
  return (
    <Router>
      <div>
        <hr/>
          <Route exact path="/" component={Main}/>
          <Route path="/SellView" component={SellView}/>
          <Route path="/BuyView" component={BuyView}/>
      </div>
    </Router>
  )
}
