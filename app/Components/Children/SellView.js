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
      <div>
        <AddForm addItem={this.addItem.bind(this)}/>
        <Items items={this.state.items} removeItem={this.removeItem.bind(this)}/>
      </div>
    )
  }
  addItem(item) {
    // getting input value from child component --> adding it to state items array
    this.setState({items: this.state.items.concat(item)})

  }
  removeItem(value) {}
  componentWillMount() {
    // load items array from localStorage, set in state

    axios.get("/api/mylist").then(response => {

      this.setState({items: response.data});
    });

  }
  componentDidUpdate(prevProps, prevState) {
    //on each update, sync our state with db
    // need to fix this to not constantly call db


    if (prevState.items != this.state.items) {
      console.log("UPDATED");
      axios.get("/api/mylist").then(response => {
        this.setState({items: response.data});
      });
    }

  }
}

module.exports = SellView;
