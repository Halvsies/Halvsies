import React from "react";
import axios from "axios";
import AddForm from "./AddForm";
import Items from "./Items";

/* ===== parent component ===== */
class SellView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  render() {
    // outputting child components while passing state + callback functions
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Halvsies my Groceries</h3>

              </div>
              <div className="panel-body panel-body-padding">
                <AddForm addItem={this.addItem.bind(this)}/>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Listed Halvsies</h3>

              </div>
              <div className="panel-body">
                <Items items={this.state.items} removeItem={this.removeItem.bind(this)}/>
              </div>
            </div>

          </div>
        </div>
      </div>

    )
  }
  addItem(item) {
    // getting input value from child component --> adding it to state items array
    this.setState({items: this.state.items.concat(item)})

  }
  removeItem(id) {
    // remove item then get the latest state
    axios.delete("/api/mylist/" + id).then(response => {
    
      axios.get("/api/mylist").then(response => {

        this.setState({items: response.data});
      });
    });
  }
  componentWillMount() {
    // load items array from db, set in state

    axios.get("/api/mylist").then(response => {

      this.setState({items: response.data});
    });

  }
  componentWillReceiveProps(nextProps, nextState) {
    //on each update, sync our state with db

    if (this.state.items != nextState.items) {

      this.setState({items: nextState.items});
    }

  }
}

module.exports = SellView;
