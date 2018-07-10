import React, { Component } from 'react';
import { parentsAPI } from '../../utils/api/index';

export class ParentSearch extends Component {
  state = {
    id: '',
    parFirst: '',
    parLast: '',
    parPhone: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    setTimeout(() => { console.log(this.state) }, 1)
  }

  handleSubmit = (e) => {
    // Builds search object from filled in fields
    let searchQuery = {};
    if (this.state.parFirst) searchQuery["info.name.first"] = this.state.parFirst;
    if (this.state.parLast) searchQuery["info.name.last"] = this.state.parLast;
    if (this.state.parPhone) searchQuery["info.contact.phone"] = this.state.parPhone;
    parentsAPI.getSomeParents(searchQuery)
      .then((data) => { console.log(data) })
      .catch((error) => { console.log(error.response) })
  }

  render() {
    return (
      <div id="parent-search" className="row">
        <form className="col s12 ">
          <div className="input-field col s12">
            <input id="id" type="text" className="validate"
              value={this.state.id} onChange={this.handleChange}
            />
            <label htmlFor="id">ID #</label>
          </div>
          <div className="input-field col s12">
            <input id="parFirst" type="text" className="validate"
              value={this.state.parFirst} onChange={this.handleChange}
            />
            <label htmlFor="parFirst">First Name</label>
          </div>
          <div className="input-field col s12">
            <input id="parLast" type="text" className="validate"
              value={this.state.parLast} onChange={this.handleChange}
            />
            <label htmlFor="parLast">Last Name</label>
          </div>
          <div className="input-field col s12">
            <input id="parPhone" type="text" className="validate"
              value={this.state.parPhone} onChange={this.handleChange}
            />
            <label htmlFor="parPhone">Phone Number</label>
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
