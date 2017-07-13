import React from "react";
import axios from "axios";

/* ===== carts list ===== */
class Cart extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    // grab carts array from state, map each cart in `li`
    let cart = this.props.cart.map((cart, key) => {

      return <tr key={key} >
        <td>{cart.item}
        </td>
        <td>{cart.split_qty}
        </td>
        <td>{cart.buy_date}
        </td>

      </tr>
    });
    return (
      <table id="listedcarts" className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Halvsies</th>
            <th>Buy Date</th>
          </tr>
        </thead>
        <tbody>
        {cart}
      </tbody>
      </table>
    )
  }

}

module.exports = Cart;
