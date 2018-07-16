import React, { Component } from 'react';
import { parentsAPI } from '../../utils/api/index';
import $ from 'jquery';

export class ParentSearch extends Component {
  state = {
    parID: '',
    parFirst: '',
    parLast: '',
    parPhone: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    setTimeout(() => { console.log(this.state) }, 1)
  }

  handleSearch = (e) => {
    let searchQuery = {};
    // If user inputed value in search field then add field's value to searchQuery object
    if (this.state.parID) searchQuery["idtwo"] = this.state.parID;
    if (this.state.parFirst) searchQuery["info.name.first"] = this.state.parFirst;
    if (this.state.parLast) searchQuery["info.name.last"] = this.state.parLast;
    if (this.state.parPhone) searchQuery["info.contact.phone"] = this.state.parPhone;
    // If user didn't fill in any search fields exit handleSearch and display toast
    if ($.isEmptyObject(searchQuery)) return window.Materialize.toast('You must enter in at least one search term', 5000, 'animated bounceInUp');
    // Button goes to "Working" animation
    $('.parent-searchbtn i').addClass('animated infinite flip');
    $('.parent-searchbtn a').addClass('disabled');
    // Get array of data from API based on searchQuery
    parentsAPI.getSomeParents(searchQuery)
      .then((data) => {
        console.log(data.data);
        // Button finishes "Working" animation
        $('.parent-searchbtn i').removeClass('animated infinite flip');
        $('.parent-searchbtn a').removeClass('disabled');
        // If no data returned exit handleSearch and display toast
        if (data.data.length === 0) return window.Materialize.toast(`No parents found please redefined search`, 5000, 'animated bounceInUp');
        // Else pass data back to parent component and display toast
        else {
          this.props.setParSearchResults(data.data);
          window.Materialize.toast(`Search complete! Returned ${data.data.length} results`, 5000, 'animated bounceInUp green darken-2')
        };
      })
      .catch((err) => {
        if (err.response) console.log(err.response)
        else console.log(err);
        // If error display error toast
        window.Materialize.toast(`Error searching database. Please try again`, 5000, 'animated bounceInUp red darken-2');
        // Button finishes "Working" animation
        $('.parent-searchbtn i').removeClass('animated infinite flip');
        $('.parent-searchbtn a').removeClass('disabled');
      })
  }

  render() {
    return (
      <div id="parent-search" className="row parent-search">
        <form className="col s12 ">
          <div className="input-field col s12">
            <input id="parID" type="text" className="validate"
              value={this.state.parID} onChange={this.handleChange}
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
            <a className="waves-effect waves-light btn-large" onClick={this.handleSearch}>Search<i className="material-icons right">search</i></a>
          </div>
        </form>
      </div>
    )
  }
}

export default ParentSearch
