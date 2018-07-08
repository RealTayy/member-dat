import React, { Component } from 'react';

export class ParentSearch extends Component {
  state = {
    parID: '',
    parFirstName: '',
    parLastName: '',
    parPhoneNumber: ''
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
      <div id="parent-search" className="row">
        <form className="col s12 ">
          <div className="input-field col s12">
            <input id="parID" type="text" className="validate"
            value={this.state.parID} onChange={this.handleChange}
            />
            <label htmlFor="parID">ID #</label>
          </div>
          <div className="input-field col s12">
            <input id="parFirstName" type="text" className="validate"
            value={this.state.parFirstName} onChange={this.handleChange}
            />
            <label htmlFor="parFirstName">First Name</label>
          </div>
          <div className="input-field col s12">
            <input id="parLastName" type="text" className="validate"
            value={this.state.parLastName} onChange={this.handleChange}
            />
            <label htmlFor="parLastName">Last Name</label>
          </div>
          <div className="input-field col s12">
            <input id="parPhoneNumber" type="text" className="validate"
            value={this.state.parPhoneNumber} onChange={this.handleChange}
            />
            <label htmlFor="parPhoneNumber">Phone Number</label>
          </div>
          <div className="parent-searchbtn center-align">
            <a className="waves-effect waves-light btn-large" onClick={this.handleSubmit}>Search<i className="material-icons right">search</i></a>
          </div>
        </form>
      </div>
    )
  }
}

export default ParentSearch
