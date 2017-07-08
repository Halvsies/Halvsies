import React from "react";
import axios from "axios";

/* ===== items list ===== */
class Items extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);

  }
  render() {
    // grab items array from state, map each item in `li`
    let items = this.props.items.map((item, key) => {
      return <li key={key} onClick={this.handleRemove}>
        <span>Item: {item.item} </span>
        <span>| Qty: {item.bulk_qty} </span>
        <span>| Split Qty: {item.split_qty} </span>
        <span>| Buy Date: {item.buy_date} </span>
        <span>| Reserved: {item.reserved} </span>
      </li>
    })
    return (
      <ul>
        {items}
      </ul>
    )
  }
  handleRemove(item) {

    this.props.removeItem();
  }
}

module.exports = Items;
