import React, { Component } from 'react'
import { Dropdown, NavItem, Button } from 'react-materialize'
import './ParentResult.css';
import { ParentTableRow } from '.';

// import $ from 'jquery';

export class ParentResult extends Component {
  componentDidMount() {
    // $('.parent-result .dropdown-trigger').dropdown();
  }

  render() {
    const results = this.props.results;
    return (
      <div className="parent-result result-table">
        {(results.length > 0)
          ? this.props.results.map((parent, i) => {
            return <ParentTableRow key={i} data={parent} />
          })
          : <div className="placeholder center-align valign-wrapper">
            <h2>Hey dawg make this look nice</h2>
          </div>
        }
      </div>
    )
  }
};

export default ParentResult;
