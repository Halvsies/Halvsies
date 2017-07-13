import React from "react";
import axios from "axios";

/* === form input ===== */
class AddForm extends React.Component {
  render() {
    return (

      <form className="form-horizontal" role="form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <input type="text" className="form-control" ref="listName" placeholder="Name of Item"/>
        </div>
        <div className="form-group">
          <input type="number" className="form-control" min="1" ref="listQty" placeholder="Quantity to buy"/>
        </div>
        <div className="form-group">
          <input type="number" className="form-control" min="1" ref="listSqty" placeholder="Quantity to split"/>
        </div>
        <div className="form-group">
          <input id="buyDate" type="date" onClick={this.minDate.bind(this)} className="form-control" ref="listDate" placeholder="Grocery Date"/>
        </div>
        <div className="form-group">
          <input type="submit" value="Add" className="btn btn-success btn-block"/>
        </div>

      </form>

    )
  }
  minDate(e) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("buyDate").setAttribute("min", today);
  }

  handleSubmit(e) {
    // when form is submitted, send input value to parent component
    e.preventDefault()
    let item = {
      item: this.refs.listName.value,
      bulk_qty: this.refs.listQty.value,
      split_qty: this.refs.listSqty.value,
      buy_date: this.refs.listDate.value,
      reserved: "false"
    };

    // only send if value is not empty!
    if(item.item != "" && item.bulk_qty != "" && item.split_qty != "" && item.buy_date != "" && item.reserved != "" ){
      this.props.addItem(item);

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
}

module.exports = AddForm;
