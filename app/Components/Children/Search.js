import React from "react";
import axios from "axios";

/* === form input ===== */
class Search extends React.Component {
  render() {
    return (

      <form className="form-horizontal" role="form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <input type="text" className="form-control" ref="searchListName" placeholder="Name of Item"/>
        </div>
        <div className="form-group">
          <input type="submit" value="Search" className="btn btn-success btn-block"/>
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
    searchItem && this.props.searchResults(searchItem); 


    // console.log('searchItem');
    // console.log(searchItem);
    // console.log('this.props.addSearchItem')
    // console.log(this.props.addSearchItem)
    // console.log('this.props.addSearchItem(searchItem)')
    // console.log(this.props.addSearchItem(searchItem))
    // console.log('this.props.searchResults')
    // console.log(this.props.searchResults)
    // console.log('this.props.searchResults(searchItem)')
    // console.log(this.props.searchResults(searchItem))
    // reset input field to blank
    this.refs.searchListName.value = '';


    // add item to this users's list
    // axios.post('/api/mySearchList', {searchItem}).then(function(result) {
    //   console.log(result);
    // }

}
}

module.exports = Search;