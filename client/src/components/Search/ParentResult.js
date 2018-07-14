import React, { Component } from 'react'
import { Dropdown, NavItem, Button } from 'react-materialize'
import './ParentResult.css';

// import $ from 'jquery';

export class ParentResult extends Component {
  componentDidMount() {
    // $('.parent-result .dropdown-trigger').dropdown();
  }

  render() {
    console.log(this.props.results)
    return (
      <div className="parent-result result-table">        

        <div className="row table-row">
          <div className="data-col left">
            <div className="status-col col s2">
              <div className="active-status inactive">Inactive</div>
              <div className="paid-status unpaid">16 UNPAID</div>
            </div>
            <div className="info-col col s4">
              <div className="name-info"><i className="material-icons">person</i> The Mai</div>
              <div className="id-info"><i className="material-icons">featured_play_list</i> P000001</div>
            </div>
            <div className="contact-col col s6">
              <div className="email-contact"><i className="material-icons">email</i> themai@maicoding.me</div>
              <div className="phone-contact"><i className="material-icons">local_phone</i> 469-226-9946</div>
            </div>
          </div>

          <div className="button-col col left">
            <div className="right-align">
              <Dropdown trigger={
                <Button className="btn-large btn-square open-students"><i className="material-icons">directions_walk</i></Button>
              }>
                <NavItem>one</NavItem>
                <NavItem>two</NavItem>
              </Dropdown>
              <a className="waves-effect waves-light btn-large btn-square open-parent"><i className="material-icons">contacts</i></a>
            </div>
          </div>
        </div>

        <div className="row table-row">
          <div className="data-col left">
            <div className="status-col col s2">
              <div className="active-status active">active</div>
              <div className="paid-status paid">paid</div>
            </div>
            <div className="info-col col s4">
              <div className="name-info"><i className="material-icons">person</i> Andrew Nguyen</div>
              <div className="id-info"><i className="material-icons">featured_play_list</i> P000003</div>
            </div>
            <div className="contact-col col s6">
              <div className="email-contact"><i className="material-icons">email</i> andrewnguyen@jdtkd.com</div>
              <div className="phone-contact"><i className="material-icons">local_phone</i> 281-644-1124</div>
            </div>
          </div>

          <div className="button-col col left">
            <div className="right-align">
              <Dropdown trigger={
                <Button className="btn-large btn-square open-students"><i className="material-icons">directions_walk</i></Button>
              }>
                <NavItem>one</NavItem>
                <NavItem>two</NavItem>
              </Dropdown>
              <a className="waves-effect waves-light btn-large btn-square open-parent"><i className="material-icons">contacts</i></a>
            </div>
          </div>
        </div>

      </div>
    )
  }
};

export default ParentResult;
