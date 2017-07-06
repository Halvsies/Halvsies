import React from "react";
import axios from "axios";

/* === form input ===== */
class AddForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref="listItem" placeholder="I need to..." />
        <input type="submit" value="Add" />
      </form>
    )
  }
  handleSubmit(e) {
    // when form is submitted, send input value to parent component
    e.preventDefault()
    let val = this.refs.listItem.value
    val && this.props.addItem(val) // only send if value is not empty!
    this.refs.listItem.value = '' // reset input field to blank
  }
}

module.exports = AddForm;
