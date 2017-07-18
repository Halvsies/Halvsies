import React from "react";
import axios from "axios";
import Cart from "./Cart";
import Results from "./Results";

/* ===== parent component ===== */
class SellList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      cart: []
    }
  }
  render() {

    return (

      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Reserved Items</h3>

              </div>
              <div className="panel-body panel-body-padding">
                <Cart items={this.state.items} cart={this.state.cart} unreserveItem={this.unreserveItem.bind(this)}/>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Available Halvsies</h3>

              </div>
              <div className="panel-body">
                <Results items={this.state.items} reserveItem={this.reserveItem.bind(this)}/>
              </div>
            </div>

          </div>
        </div>
      </div>

    )
  }

  reserveItem(id) {

    axios.post("/reserve/" + id).then(response => {
    
      axios.get("/api/available").then(response => {

        this.setState({items: response.data});
        axios.get("/api/unavailable").then(response => {

          this.setState({cart: response.data});

        });
      });
    });

  }
  unreserveItem(id) {

    axios.post("/unreserve/" + id).then(response => {

      axios.get("/api/available").then(response => {

        this.setState({items: response.data});
        axios.get("/api/unavailable").then(response => {

          this.setState({cart: response.data});

        });
      });
    });

  }
  componentWillMount() {
    // load items array from db, set in state

    axios.get("/api/available").then(response => {

      this.setState({items: response.data});

    });

    axios.get("/api/unavailable").then(response => {

      this.setState({cart: response.data});

    });

  }
  componentWillReceiveProps(nextProps, nextState) {
    //on each update, sync our state with db
    console.log("update");
    if (this.state.cart != nextState.cart) {

      this.setState({items: nextState.cart});
    }

  }
}

module.exports = SellList;
