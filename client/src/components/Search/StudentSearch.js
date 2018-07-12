import React, { Component } from 'react';
import { studentsAPI } from '../../utils/api/index';
import $ from 'jquery';

export class StudentSearch extends Component {
  state = {
    stuID: '',
    stuFirst: '',
    stuLast: '',
    beltrank: '',
  }

  beltrankArr = [
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
    $('#beltrank').material_select();
    $('#beltrank').on('change', this.handleChange);
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    setTimeout(() => { console.log(this.state) }, 1)
  }

  handleSearch = (e) => {
    let searchQuery = {};
    if (this.state.stuID) searchQuery["idtwo"] = this.state.id;
    if (this.state.stuFirst) searchQuery["info.name.first"] = this.state.stuFirst;
    if (this.state.stuLast) searchQuery["info.name.last"] = this.state.stuLast;
    if (this.state.beltrank) searchQuery["enrollment.beltrank"] = this.state.beltrank;
    if ($.isEmptyObject(searchQuery)) return window.Materialize.toast('You must enter in at least one search term', 5000, 'animated bounceInUp');
    $('.student-searchbtn i').addClass('animated infinite flip');
    $('.student-searchbtn a').addClass('disabled');
    studentsAPI.getSomeStudents(searchQuery)
      .then((data) => {
        console.log(data.data);
        $('.student-searchbtn i').removeClass('animated infinite flip');
        $('.student-searchbtn a').removeClass('disabled');
        if (data.data.length === 0) return window.Materialize.toast(`No students found please redefined search`, 5000, 'animated bounceInUp');
        else window.Materialize.toast(`Search complete! Returned ${data.data.length} results`, 5000, 'animated bounceInUp green darken-2');
      })
      .catch((err) => {
        console.log(err.response)
        window.Materialize.toast(`Error searching database. Please try again`, 5000, 'animated bounceInUp red darken-2');
        $('.student-searchbtn i').removeClass('animated infinite flip');
        $('.student-searchbtn a').removeClass('disabled');
      })
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
              id="stuFirst" type="text" className="validate"
              value={this.state.stuFirst} onChange={this.handleChange}
            />
            <label htmlFor="stuFirst">First Name</label>
          </div>
          <div className="input-field col s12">
            <input
              id="stuLast" type="text" className="validate"
              value={this.state.stuLast} onChange={this.handleChange}
            />
            <label htmlFor="stuLast">Last Name</label>
          </div>
          <div className="input-field col s12">
            <select
              id="beltrank" className="validate"
              value={this.state.beltrank}>
              <option key="0" value="">None</option>
              {this.beltrankArr.map((beltrank, i) => {
                return <option key={i + 1} value={beltrank}>{beltrank}</option>
              })}
            </select>
            <label htmlFor="beltrank">Belt Rank</label>
          </div>
          <div className="student-searchbtn center-align">
            <a className="waves-effect waves-light btn-large" onClick={this.handleSearch}>Search<i className="material-icons right">search</i></a>
          </div>
        </form>
      </div>
    )
  }
}

export default StudentSearch
