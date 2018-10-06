import React, { Component } from 'react';
import './DashNewsCard.css';

export class DashNewsCard extends Component {
  render() {
    return (
      <div className="news-card col s12 trans-card z-depth-2">
        <div className="news-header">I am a Header</div>
        <div className="news-contect">I am some Content</div>
      </div>
    )
  }
}

export default DashNewsCard
