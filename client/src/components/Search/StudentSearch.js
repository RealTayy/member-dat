import React, { Component } from 'react';
import $ from 'jquery';

export class StudentSearch extends Component {
  state = {
    stuID: '',
    stuFirstName: '',
    stuLastName: '',
    beltRank: '',
  }

  beltRankArr = [
    'White',
    'Yellow', 'Yellow Stripe',
    'Orange', 'Orange Stripe',
    'Green', 'Green Stripe',
    'Blue', 'Blue Stripe',
    'Brown', 'Brown Stripe',
    'Red', 'Red Stripe',
    'Black Candidate',
    'Black 1', 'Black 2', 'Black 3', 'Black 4', 'Black 5', 'Black 6', 'Black 7', 'Black 8', 'Black 9'
  ];

  componentDidMount = () => {
    $('#beltRank').material_select();
    $('#beltRank').on('change', this.handleChange);
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    setTimeout(() => { console.log(this.state) }, 1)
  }

  handleSubmit = (e) => {
    // Builds search object from filled in fields
    let searchObject = {};
    for (let property in this.state) {
      if (this.state[property] !== "") { searchObject[property] = this.state[property] }
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
              id="stuFirstName" type="text" className="validate"
              value={this.state.stuFirstName} onChange={this.handleChange}
            />
            <label htmlFor="stuFirstName">First Name</label>
          </div>
          <div className="input-field col s12">
            <input
              id="stuLastName" type="text" className="validate"
              value={this.state.stuLastName} onChange={this.handleChange}
            />
            <label htmlFor="stuLastName">Last Name</label>
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
            <label htmlFor="beltRank">Belt Rank</label>
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
