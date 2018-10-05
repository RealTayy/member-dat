import React, { Component } from 'react';
import { Button } from 'react-materialize';
import './DashSimpleCard.css';

export class DashSimpleCard extends Component {
  render() {
    return (
      <div>
        <div className="simple-card col s12 trans-card z-depth-2 blue darken-1">
          <div className="card-info-col">
            <div className="card-info-preheader">ACTIVE</div>
            <div className="card-info-header">PARENTS</div>
            <div className="card-info-number">18</div>
          </div>
          <Button className="card-button btn-large btn-square waves-effect waves-light open-test z-depth-2">
            <i className="material-icons">menu</i>
          </Button>
          <i className="simple-card-icon material-icons">directions_walk</i>
        </div>
        <div className="simple-card col s12 trans-card z-depth-2 green darken-1">
          <div className="card-info-col">
            <div className="card-info-preheader">ACTIVE</div>
            <div className="card-info-header">PARENTS</div>
            <div className="card-info-number">18</div>
          </div>
          <Button className="card-button btn-large btn-square waves-effect waves-light open-test z-depth-2">
            <i className="material-icons">menu</i>
          </Button>
          <i className="simple-card-icon material-icons">directions_walk</i>
        </div>
        <div className="simple-card col s12 trans-card z-depth-2 red darken-1">
          <div className="card-info-col">
            <div className="card-info-preheader">ACTIVE</div>
            <div className="card-info-header">PARENTS</div>
            <div className="card-info-number">18</div>
          </div>
          <Button className="card-button btn-large btn-square waves-effect waves-light open-test z-depth-2">
            <i className="material-icons">menu</i>
          </Button>
          <i className="simple-card-icon material-icons">directions_walk</i>
        </div>
      </div>
    )
  }
}

export default DashSimpleCard
