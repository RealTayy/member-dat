import React, { Component } from 'react';

export class ParentSearch extends Component {
  render() {
    return (
      <div id="parent-search" className="row">
        <form className="col s12 ">
          <div className="input-field col s12">
            <input id="parent-id" type="text" className="validate" />
            <label htmlFor="parent-id">ID #</label>
          </div>
          <div className="input-field col s12">
            <input id="parent-firstname" type="text" className="validate" />
            <label htmlFor="parent-firstname">First Name</label>
          </div>
          <div className="input-field col s12">
            <input id="parent-lastname" type="text" className="validate" />
            <label htmlFor="parent-lastname">Last Name</label>
          </div>
          <div className="input-field col s12">
            <input id="parent-phonenumber" type="text" className="validate" />
            <label htmlFor="parent-phonenumber">Phone Number</label>
          </div>
          <div className="parent-searchbtn center-align">
            <a className="waves-effect waves-light btn-large">Search<i className="material-icons right">search</i></a>
          </div>
        </form>
      </div>
    )
  }
}

export default ParentSearch
