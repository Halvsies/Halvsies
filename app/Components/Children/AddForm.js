import React from "react";
import axios from "axios";

/* === form input ===== */
class AddForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref="listName" placeholder="Name of Item"/>
        <input type="text" ref="listQty" placeholder="Quantity to buy"/>
        <input type="text" ref="listSqty" placeholder="Quantity to split"/>
        <input type="text" ref="listDate" placeholder="Grocery Date"/>
        <input type="submit" value="Add"/>
      </form>
    )
  }
  handleSubmit(e) {
    // when form is submitted, send input value to parent component
    e.preventDefault()
    let item = {
      name: this.refs.listName.value,
      qty: this.refs.listQty.value,
      sQty: this.refs.listSqty.value,
      buyDate: this.refs.listDate.value,
      reserved: false
    };

    // only send if value is not empty!
    item && this.props.addItem(item);
    // reset input field to blank
    this.refs.listName.value = '';
    this.refs.listQty.value = '';
    this.refs.listSqty.value = '';
    this.refs.listDate.value = '';

  }
}

module.exports = AddForm;
