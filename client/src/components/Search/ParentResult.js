import React, { Component } from 'react'

export class ParentResult extends Component {
  render() {
    console.log(this.props.results)
    return (
      <div className="parent-result result-table">
        <div className="row">
          <div className="col s2">a</div>
          <div className="col s2">a</div>
          <div className="col s2">a</div>
          <div className="col s2">a</div>
          <div className="col s2"><a class="waves-effect waves-light btn-large"><i class="material-icons">cloud</i></a></div>
          <div className="col s2"><a class="waves-effect waves-light btn-large"><i class="material-icons">cloud</i></a></div>
        </div>
      </div>
    )
  }
};

export default ParentResult;
