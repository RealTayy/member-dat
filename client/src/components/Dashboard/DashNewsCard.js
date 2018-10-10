import React, { Component } from 'react';
import './DashNewsCard.css';
import $ from 'jquery';

export class DashNewsCard extends Component {
  handleCollapse(e) {
    const $header = $(e.target).parent();
    if ($header.hasClass('expanded')) {
      $header.removeClass('expanded');
      $header.addClass('collapsed');
    } else {
      $header.removeClass('collapsed');
      $header.addClass('expanded');
    }
  }

  render() {
    return (
      <div className="news-card col s12 trans-card z-depth-2 expanded">
        <div className="news-header blue darken-1 expanded">
          <div className="news-header-text col">
            Upcoming Features
		      </div>
          <div className="news-header-collapse right waves-effect waves-light" onClick={this.handleCollapse}>
            <i className="material-icons"></i>
          </div>
        </div>
        <div className="news-context ">1. This Dashboard's functionality</div>
      </div>
    )
  }
}

export default DashNewsCard;
