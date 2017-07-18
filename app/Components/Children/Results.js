import React from "react";
import axios from "axios";

<<<<<<< HEAD
/* === form input ===== */
class Search extends React.Component {
  render() {
=======
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

        <td><button onClick={this.handleReserve} id={item._id} type="button" className="btn btn-success">Reserve</button>
        </td>
      </tr>
    });
>>>>>>> 7b3be38ca674a71431e628ac03b4616502f392e6
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

<<<<<<< HEAD
      <form className="form-horizontal" role="form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <input type="text" className="form-control" ref="searchListName" placeholder="Name of Item"/>
        </div>
        <div className="form-group">
          <input type="submit" value="Add" className="btn btn-success btn-block"/>
        </div>
      </form>

    )
  }

  handleSubmit(e) {
    // when form is submitted, send input value to parent component
    e.preventDefault()
    let searchItem = {
      searchItem: this.refs.searchListName.value,
    };

    // only send if value is not empty!
    searchItem && this.props.addSearchItem(searchItem);
    // reset input field to blank
    this.refs.searchListName.value = '';
    // add item to this users's list
    // axios.post('/api/mySearchList', {item}).then(function(result) {
    //   console.log(result);
    });

  }
}

module.exports = Search;
=======
    this.props.reserveItem(item.currentTarget.getAttribute('id'));

  }
}

module.exports = Results;
>>>>>>> 7b3be38ca674a71431e628ac03b4616502f392e6
