import React, { Component } from 'react';
import { parentsAPI } from '../../utils/api/index';
import $ from 'jquery';

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
    let searchQuery = {};
    if (this.state.id) searchQuery["idtwo"] = this.state.id;
    if (this.state.parFirst) searchQuery["info.name.first"] = this.state.parFirst;
    if (this.state.parLast) searchQuery["info.name.last"] = this.state.parLast;
    if (this.state.parPhone) searchQuery["info.contact.phone"] = this.state.parPhone;
    if ($.isEmptyObject(searchQuery)) return window.Materialize.toast('You must enter in at least one search term', 5000, 'animated bounceInUp');
    $('.parent-searchbtn i').addClass('animated infinite flip');
    $('.parent-searchbtn a').addClass('disabled');
    parentsAPI.getSomeParents(searchQuery)
      .then((data) => {
        console.log(data.data);
        $('.parent-searchbtn i').removeClass('animated infinite flip');
        $('.parent-searchbtn a').removeClass('disabled');
        if (data.data.length === 0) return window.Materialize.toast(`No parents found please redefined search`, 5000, 'animated bounceInUp');
        else window.Materialize.toast(`Search complete! Returned ${data.data.length} results`, 5000, 'animated bounceInUp green darken-2');
      })
      .catch((err) => {
        console.log(err.response)
        window.Materialize.toast(`Error searching database. Please try again`, 5000, 'animated bounceInUp red darken-2');
        $('.parent-searchbtn i').removeClass('animated infinite flip');
        $('.parent-searchbtn a').removeClass('disabled');
      })
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
