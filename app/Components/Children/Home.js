import React from "react";
import axios from "axios";
import AddForm from "./AddForm";
import Items from "./Items";
import Search from "./Search";

/* ===== parent component ===== */
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      searchItems: []
    }
  }
  render() {
    // outputting child components while passing state + callback functions
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Halvsies my Groceries</h3>

              </div>
              <div className="panel-body panel-body-padding">
                <Search addSearchItem={this.addSearchItem.bind(this)} searchResults={this.searchResults.bind(this)} />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Listed Halvsies</h3>

              </div>
              <div className="panel-body">

                <Items items={this.state.items} removeItem={this.removeItem.bind(this)} s/>
              </div>
            </div>

          </div>
        </div>
      </div>

    )
  }
  addItem(item) {
    // getting input value from child component --> adding it to state items array
    this.setState({items: this.state.items.concat(item)})

  }
  addSearchItem(searchItem) {
    this.setState({searchItems: this.state.searchItems.concat(searchItem)})
    console.log("---searchItem in AddSearchItem function---");
    console.log(searchItem);
  }
  removeItem(id) {
    // remove item then get the latest state
    axios.delete("/api/mylist/" + id).then(response => {
      console.log(response);
      axios.get("/api/mylist").then(response => {

        this.setState({items: response.data});
      });
    });
  }
  componentWillMount() {
    // load items array from db, set in state]

    axios.get("/api/mylist").then(response => {
      this.setState({items: response.data});
      console.log("---Component will mount---")
    });

  }

  searchResults(searchItems) {
    console.log("hello");
    console.log(searchItems);
    axios.get('/api/mylist', {
      params: {
        item: searchItems
      }
    }).then(response => {
      let searchItems = response.map((item, key))
      console.log(response.data[0].item);
      console.log(response.data[0].bulk_qty);
      console.log(response.data[0].split_qty);
      console.log(response.data[0].buy_date);
      console.log(response.data[0].reserved);
      console.log(response.data[0]._id);
      var searchedItem = response.data[0].item;
      console.log(searchedItem);
      console.log('searchResults ----')
      this.setState({items: searchItems});
      console.log(this.state.items);
    })
  }

  componentWillReceiveProps(nextProps, nextState) {
    //on each update, sync our state with db

    if (this.state.items != nextState.items) {

      this.setState({items: nextState.items});
    }

  }
}

module.exports = Home;

