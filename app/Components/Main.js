var React = require('react');
var axios = require('axios');
var Router = require('react-router');
var Navbar = require('react-bootstrap').Navbar;
var FormGroup = require('react-bootstrap').FormGroup;
var FormControl = require('react-bootstrap').FormControl;
var Button = require('react-bootstrap').Button;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

var helpers = require('./utils/helpers.js');

var Main = React.createClass({

  render: function(){

    return(

      <Navbar>
       <Navbar.Header>
         <Navbar.Brand>
           <a href="#">Halvsies</a>
         </Navbar.Brand>
         <Navbar.Form pullLeft>
           <FormGroup>
             <FormControl type="text" placeholder="Search" />
           </FormGroup>
           {' '}
           <Button type="submit"><i className="fa fa-search" aria-hidden="true"></i></Button>
         </Navbar.Form>
         <Navbar.Toggle />
       </Navbar.Header>
       <Navbar.Collapse>
       <Nav pullRight>
        <NavItem eventKey={1} href="#">Buy</NavItem>
        <NavItem eventKey={2} href="#">Sell</NavItem>
       </Nav>
       </Navbar.Collapse>
      </Navbar>

    )
  }
});

module.exports = Main;
