import React, { Component } from 'react';
import { Button } from 'react-materialize';
import './DashSimpleCard.css';

export class DashSimpleCard extends Component {
  handleClick = this.props.action;

  render() {        
    return (
      <div className={`simple-card col s12 trans-card z-depth-2 ${this.props.bgColor} darken-1`}>
        <div className="card-info-col">
          <div className="card-info-preheader">{this.props.preheader}</div>
          <div className="card-info-header">{this.props.header}</div>
          <div className="card-info-number">{this.props.number}</div>
        </div>
        <Button
		  className="card-button btn-large btn-square waves-effect waves-light open-test z-depth-2"
		  onClick={this.handleClick}
		>
          <i className="material-icons">menu</i>
        </Button>
        <i className="simple-card-icon material-icons">{this.props.icon}</i>
      </div>
    )
  }
}

export default DashSimpleCard
