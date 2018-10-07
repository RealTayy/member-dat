import React, { Component } from 'react';
import './DashNewsCard.css';
import $ from 'jquery';

export class DashNewsCard extends Component {
  handleCollapse(e) {	  
	  const icon = $(e.target).children('.material-icons');
	  //if ()
	  icon.text('expand_more');
  }
  
  render() {
    return (
      <div className="news-card col s12 trans-card z-depth-2 expanded">
        <div className="news-header blue darken-1">
		  <div className="news-header-text col">
		    Info about Demo mode
		  </div>
		  <div className="news-header-collapse right waves-effect waves-light" onClick={this.handleCollapse}>
		    <i className="material-icons">expand_less</i>
		  </div>
		</div>
        <div className="news-context row">I am some Content</div>
      </div>
    )
  }
}

export default DashNewsCard;
