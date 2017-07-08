import React from "react";
import axios from "axios";

/* === form input ===== */
class AddForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref="listName" placeholder="Name of Item"/>
        <input type="number" ref="listQty" placeholder="Quantity to buy"/>
        <input type="number" ref="listSqty" placeholder="Quantity to split"/>
        <input type="date" ref="listDate" placeholder="Grocery Date"/>
        <input type="submit" value="Add"/>
      </form>
    )
  }
  handleSubmit(e) {
    // when form is submitted, send input value to parent component
    e.preventDefault()
    let item = {
      item: this.refs.listName.value,
      bulk_qty: this.refs.listQty.value,
      split_qty: this.refs.listSqty.value,
      buy_date: this.refs.listDate.value
    };

    // only send if value is not empty!
    item && this.props.addItem(item);
    // reset input field to blank
    this.refs.listName.value = '';
    this.refs.listQty.value = '';
    this.refs.listSqty.value = '';
    this.refs.listDate.value = '';
    // add item to this users's list
    axios.post('/api/mylist', {item}).then(function(result) {
      console.log(result);


    });

  }
}

module.exports = AddForm;
