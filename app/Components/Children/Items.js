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

      return <tr key={key}>
        <td>{item.item}
        </td>
        <td>{item.bulk_qty}
        </td>
        <td>{item.split_qty}
        </td>
        <td>{item.buy_date}
        </td>
        <td>{item.reserved}
        </td>
        <td>
          <button onClick={this.handleRemove} id={item._id} type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    });
    return (
      <table id="listedItems" className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Buy Quantity</th>
            <th>Halvsies</th>
            <th>Buy Date</th>
            <th>Reserved</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    )
  }
  handleRemove(item) {
  
    this.props.removeItem(item.currentTarget.getAttribute('id'));

  }
  handleReserved(item) {
    console.log(user);
  }
}

module.exports = Items;
