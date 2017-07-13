import React from "react";
import axios from "axios";

/* ===== items list ===== */
class Results extends React.Component {
  constructor(props) {
    super(props);
      this.handleReserve = this.handleReserve.bind(this);

  }
  render() {
    // grab items array from state, map each item in `li`
    let items = this.props.items.map((item, key) => {

      return <tr key={key} >
        <td>{item.item}
        </td>
        <td>{item.bulk_qty}
        </td>
        <td>{item.split_qty}
        </td>
        <td>{item.buy_date}
        </td>

        <td ><button onClick={this.handleReserve} id={item._id} type="button" className="btn btn-success">Reserve</button>
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
          </tr>
        </thead>
        <tbody>
        {items}
      </tbody>
      </table>
    )
  }
  handleReserve(item) {
    console.log(item.currentTarget.getAttribute('id'));
    this.props.reserveItem(item.currentTarget.getAttribute('id'));

  }
}

module.exports = Results;
