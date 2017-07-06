import React from "react";
import axios from "axios";

/* ===== items list ===== */
class Items extends React.Component {
  render() {
    // grab items array from state, map each item in `li`
    let items = this.props.items.map((item, key) => {
      return <li key={key} onClick={this.handleRemove.bind(this)}>Item: {item.name} | Qty: {item.qty} | Split Qty: {item.sQty} | Buy Date: {item.buyDate} </li>
    })
    return (
      <ul>
        {items}
      </ul>
    )
  }
  handleRemove(item) {
    this.props.removeItem(item.currentTarget.innerText) // pass value of item to delete to parent component
  }
}

module.exports = Items;
