import React, { Component } from 'react'
import { Dropdown, NavItem, Button } from 'react-materialize'

// import $ from 'jquery';

export class ParentResult extends Component {
  componentDidMount() {
    // $('.parent-result .dropdown-trigger').dropdown();
  }

  render() {
    console.log(this.props.results)
    return (
      <div className="parent-result result-table">
    
        <div className="row">
          <div className="col s3">The Mai</div>
          <div className="col s1">Inactive</div>
          <div className="col s3">469-226-9681</div>
          <div className="col s2">a</div>
          <div className="col s3">
            <div className="col s12 right-align">
              <Dropdown trigger={
                <Button className="btn-large btn-square"><i class="material-icons">directions_walk</i></Button>
              }>
                <NavItem>one</NavItem>
                <NavItem>two</NavItem>
              </Dropdown>
              <a class="waves-effect waves-light btn-large btn-square"><i class="material-icons">contacts</i></a>
            </div>
          </div>
        </div>

                <div className="row">
          <div className="col s3">Andrew Nguyen</div>
          <div className="col s2">Active</div>
          <div className="col s2">469-112-1234</div>
          <div className="col s2">andrewngasdfuyen@something.com</div>
          <div className="col s3">
            <div className="col s12 right-align">
              <Dropdown trigger={
                <Button className="btn-flat btn-flat"><i class="material-icons">directions_walk</i></Button>
              }>
                <NavItem>one</NavItem>
                <NavItem>two</NavItem>
              </Dropdown>
              <a class="waves-effect waves-light btn-flat btn-square"><i class="material-icons">contacts</i></a>
            </div>
          </div>
        </div>

      </div>
    )
  }
};

export default ParentResult;
