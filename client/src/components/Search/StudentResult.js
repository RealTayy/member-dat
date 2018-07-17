import React, { Component } from 'react';
import './StudentResult.css'
import { StudentTableRow } from '.';

export class StudentResult extends Component {
  render() {
    const results = this.props.results;    
    return (
      <div className="student-result result-table">
        {(results.length > 0)
          ? this.props.results.map((parent, i) => {
            return <StudentTableRow
              key={i} data={parent}
              pushTab={this.props.pushTab}
            />
          })
          : <div className="placeholder center-align valign-wrapper">
            <h2></h2>
          </div>
        }
      </div>
    )
  }
};

export default StudentResult;
