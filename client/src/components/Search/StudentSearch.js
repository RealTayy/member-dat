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
    // Initializes materialize components and sets handlers
    $('#beltrank').material_select();
    $('#beltrank').on('change', this.handleChange);
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    setTimeout(() => { console.log(this.state) }, 1)
  }

  handleSearch = (e) => {
    let searchQuery = {};
    // If user inputed value in search field then add field's value to searchQuery object
    if (this.state.stuID) searchQuery["idtwo"] = this.state.id;
    if (this.state.stuFirst) searchQuery["info.name.first"] = this.state.stuFirst;
    if (this.state.stuLast) searchQuery["info.name.last"] = this.state.stuLast;
    if (this.state.beltrank) searchQuery["enrollment.beltrank"] = this.state.beltrank;
    // If user didn't fill in any search fields exit handleSearch and display toast
    if ($.isEmptyObject(searchQuery)) return window.Materialize.toast('You must enter in at least one search term', 5000, 'animated bounceInUp');
    // Button goes to "Working" animation
    $('.student-searchbtn i').addClass('animated infinite flip');
    $('.student-searchbtn a').addClass('disabled');
    // Get array of data from API baed on searchQuery
    studentsAPI.getSomeStudents(searchQuery)
      .then((data) => {
        // Button finishes "Working" animation
        $('.student-searchbtn i').removeClass('animated infinite flip');
        $('.student-searchbtn a').removeClass('disabled');
        // If no data returned exit handleSearch and display toast
        if (data.data.length === 0) return window.Materialize.toast(`No students found please redefined search`, 5000, 'animated bounceInUp');
        // Else pass data back to parent component and display toast
        else {          
          this.props.setStuSearchResults(data.data);
          window.Materialize.toast(`Search complete! Returned ${data.data.length} results`, 5000, 'animated bounceInUp green darken-2')
        };
      })
      .catch((err) => {
        if (err.response) console.log(err.response)
        else console.log(err);
        // If error display error toast
        window.Materialize.toast(`Error searching database. Please try again`, 5000, 'animated bounceInUp red darken-2');
        // Button finishes "Working" animation
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
            <span class="helper-text" >Currently not supported in this version</span>

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
