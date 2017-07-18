var React = require('react');
var axios = require('axios');
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

var helpers = require('./utils/helpers');
var SellView = require('./Children/SellView');
<<<<<<< HEAD
var Home = require('./Children/Home');
=======
var SellList= require('./Children/SellList');
>>>>>>> 7b3be38ca674a71431e628ac03b4616502f392e6

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                <Link to="/listings" className="navbar-brand" >Halvsies</Link>
                </div>
                <div id="navbar" className="navbar-collapse collapse">

                  <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/listings">List Groceries</Link></li>
                  <li><Link to="/find">Find Available Halvsies</Link></li>
                  </ul>

                </div>

              </div>

            </nav>



          {/* <Route exact path="/" component={Home}/> */}

          <Route exact path="/" component={SellView}/>
<<<<<<< HEAD
          <Route path="/about" component={Home}/>
          <Route path="/SellView" component={SellView}/>
=======
          <Route path="/find" component={SellList}/>
          <Route path="/listings" component={SellView}/>
>>>>>>> 7b3be38ca674a71431e628ac03b4616502f392e6
        </div>
      </Router>
    );
  }
}
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

const About = () => (
  <div>
    <h2>About</h2>
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
