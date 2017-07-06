import React from "react";
import axios from "axios";
import AddForm from "./AddForm";
import Items from "./Items";




/* ===== parent component ===== */
class SellView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
  }
  render() {
    // outputting child components while passing state + callback functions
    return (
      <div>
        <AddForm addItem={this.addItem.bind(this)} />
        <Items items={this.state.items} removeItem={this.removeItem.bind(this)} />
      </div>
    )
  }
  addItem(item) {
    // getting input value from child component --> adding it to state items array
    this.setState({
      items: this.state.items.concat(item)
    })
  }
  removeItem(value) {
    // filter method --> taking out item that matches value of clicked item
    let filtered = this.state.items.filter((item) =>{
      return item !== value
    })
    // setting the filtered array as new state --> all items minus clicked item
    this.setState({
      items: filtered
    })
  }
  componentWillMount() {
    // load items array from localStorage, set in state
    let itemsList = localStorage.getItem('items')
    if (itemsList) {
      this.setState({
        items: JSON.parse(localStorage.getItem('items'))
      })
    }
  }
  componentDidUpdate() {
    // on each update, sync our state with localStorage
    localStorage.setItem('items', JSON.stringify(this.state.items))
  }
}




module.exports = SellView;
