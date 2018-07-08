import React, { Component } from 'react';
import $ from 'jquery';

export class StudentSearch extends Component {
  state = {
    stuID: '',
    firstName: '',
    lastName: '',
    beltRank: '',
  }

  beltRankArr = ['white', 'blue', 'red'];

  componentDidMount = () => {
    // Initialize MaterializeCSS's select
    $('#beltRank').material_select();
    // Add on change listener cause onChange for select won't fire otherwise
    $('#beltRank').on('change', this.handleChange)
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    setTimeout(() => { console.log(this.state) }, 1)
  }

  handleSubmit = (e) => {
    // Builds search object from filled in fields
    let searchObject = {};
    for (let property in this.state) {
      if (this.state[property] != "") { searchObject[property] = this.state[property] }
    }
    console.log(searchObject);
  }

  render() {
    return (
      <div id="student-search" className="row">
        <form className="col s12 ">
          <div className="input-field col s12">
            <input
              id="stuID" type="text" className="validate"
              value={this.state.stuID} onChange={this.handleChange}
            />
            <label htmlFor="stuID">ID #</label>
          </div>
          <div className="input-field col s12">
            <input
              id="firstName" type="text" className="validate"
              value={this.state.firstName} onChange={this.handleChange}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s12">
            <input
              id="lastName" type="text" className="validate"
              value={this.state.lastName} onChange={this.handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="input-field col s12">
            <select
              id="beltRank" className="validate"
              value={this.state.beltRank}>
              <option key="0" value="">None</option>
              {this.beltRankArr.map((beltRank, i) => {
                return <option key={i + 1} value={beltRank}>{beltRank}</option>
              })}
            </select>
            <label htmlFor="student-phonenumber">Belt Rank</label>
          </div>
          <div className="student-searchbtn center-align">
            <a className="waves-effect waves-light btn-large" onClick={this.handleSubmit}>Search<i className="material-icons right">search</i></a>
          </div>
        </form>
      </div>
    )
  }
}

export default StudentSearch
