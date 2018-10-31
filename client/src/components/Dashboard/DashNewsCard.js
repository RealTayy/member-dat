import React, { Component } from 'react';
import './DashNewsCard.css';
import $ from 'jquery';

export class DashNewsCard extends Component {
  handleCollapse(e) {
    const $card = $(e.target).parent().parent();
    const $header = $(e.target).parent();
    const $context = $card.find('.news-context');
    const initHeight = ($context[0].scrollHeight);
    $context.height(`${initHeight}px`);
    if ($card.hasClass('expanded')) {
      $card.removeClass('expanded');
      $card.addClass('collapsed');
      $context.height('0px');
    } else {
      $card.removeClass('collapsed');
      $card.addClass('expanded');
      $context.height(`${initHeight}px`);
    }
  }

  render() {
    return (
      <div className="news-card col s12 trans-card z-depth-2 expanded">
        <div className="news-header blue darken-1">
          <div className="news-header-text col">
            Upcoming Features
		  </div>
          <div className="news-header-collapse right waves-effect waves-light" onClick={this.handleCollapse}>
            <i className="material-icons"></i>
          </div>
        </div>
        <div className="news-context ">
          <div>1. This Dashboard's functionality</div>
          <div>1. This Dashboard's functionality</div>
          <div>1. This Dashboard's functionality</div>
          <div>1. This Dashboard's functionality</div>
          <div>1. This Dashboard's functionality</div>
          <div>1. This Dashboard's functionality</div>
          <div>1. This Dashboard's functionality</div>
          <div>1. This Dashboard's functionality</div>
          <div>1. This Dashboard's functionality</div>
          <div>1. This Dashboard's functionality</div>
        </div>
      </div>
    )
  }
}

export default DashNewsCard;