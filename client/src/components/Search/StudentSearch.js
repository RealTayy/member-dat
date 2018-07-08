import React, { Component } from 'react';
import $ from 'jquery';

export class StudentSearch extends Component {
  componentDidMount() {
    $('select').material_select();
  }
  render() {
    return (
      <div id="student-search" className="row">
        <form className="col s12 ">
          <div className="input-field col s12">
            <input id="student-id" type="text" className="validate" />
            <label htmlFor="student-id">ID #</label>
          </div>
          <div className="input-field col s12">
            <input id="student-firstname" type="text" className="validate" />
            <label htmlFor="student-firstname">First Name</label>
          </div>
          <div className="input-field col s12">
            <input id="student-lastname" type="text" className="validate" />
            <label htmlFor="student-lastname">Last Name</label>
          </div>
          <div className="input-field col s12">
            <select className="validate">
              <option value="" disabled selected>Choose Belt Rank</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label htmlFor="student-phonenumber">Belt Rank</label>
          </div>
          <div className="student-searchbtn center-align">
            <a class="waves-effect waves-light btn-large">Search<i class="material-icons right">search</i></a>
          </div>
        </form>
      </div>
    )
  }
}

export default StudentSearch
