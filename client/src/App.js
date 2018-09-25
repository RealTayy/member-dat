import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import XNoMatch from "./pages/XNoMatch";
import { Header } from "./components/Header/Header";
import { Sidenav } from "./components/Sidenav/Sidenav";
import { Dashboard } from "./pages/Dashboard";
import { Search } from "./pages/Search";
import { AddParent } from "./pages/AddParent";
import { AddStudent } from "./pages/AddStudent";
import { Pointofsale } from "./pages/Pointofsale";
import { Tabbar } from "./components/Tabbar/Tabbar";
import { Invoices } from "./pages/Invoices";
import { CornerImage } from "./components/CornerImage";
import { TabDetails } from "./components/TabDetails";
import $ from 'jquery';

export class App extends Component {
  state = {
    activeID: '',
    activeTab: 'dashboard-tab',
    tabs: [],
  }

  componentDidUpdate() {
    $('.detail-row').hide();
    $(`#${this.state.activeTab}`).show();
  }

  setActiveTab = (tabID) => {
    this.setState({ activeTab: tabID });
  }

  pushTab = (tabData) => {
    let newTabs = this.state.tabs.slice();
    if (newTabs.filter((e) => e.id === tabData.id).length === 0) newTabs.push(tabData);
    this.setState({ tabs: newTabs });
  }

  removeTab = (tabID) => {
    let newTabs = this.state.tabs.filter((tab) => tab.id !== tabID);
    this.setState({ tabs: newTabs });

  }

  parentOrStudentTabOpen() {
    return (this.state.activeTab.charAt(0) === "S" || this.state.activeTab.charAt(0) === "P")
  }

  render() {
    const activeTab = this.state.activeTab;
    const tabs = this.state.tabs;
    const pushTab = this.pushTab;
    return (
      <Router>
        <div className="app">
          <Header />
          <Sidenav
            activeTab={activeTab}
            setActiveTab={this.setActiveTab}
          />
          <Tabbar
            activeTab={activeTab}
            tabs={tabs}
            pushTab={this.pushTab}
            removeTab={this.removeTab}
            setActiveTab={this.setActiveTab}
          />
          <CornerImage activeTab={activeTab} />
          {/* Hack for showing tabs details cause materialize tabs screwed me */}
          {(this.parentOrStudentTabOpen())
            ?
            <div className="tab-content content-container">
              <div className="content-wrapper">
                <TabDetails
                  tabs={tabs}
                  pushTab={pushTab}
                  setActiveTab={this.setActiveTab}
                />
              </div>
            </div>
            :
            /* Router starts here */
            < div className="main-content content-container">
              <div className="content-wrapper">

                <Switch>
                  {/* Dashboard/Home Route */}
                  <Route exact path="/" render={() => {
                    return (
                      <Dashboard />
                    )
                  }} />
                  {/* Search Route */}
                  <Route exact path="/search" render={() => {
                    return (
                      <Search
                        pushTab={this.pushTab}
                      />
                    )
                  }} />
                  {/* Search Route */}
                  <Route exact path="/invoices" render={() => {
                    return (
                      <Invoices />
                    )
                  }} />
                  {/* Pointofsale Route */}
                  <Route exact path="/pointofsale" render={() => {
                    return (
                      <Pointofsale />
                    )
                  }} />
                  {/* AddParent Route */}
                  <Route exact path="/addparent" render={() => {
                    return (
                      <AddParent />
                    )
                  }} />
                  {/* AddStudent Route */}
                  <Route exact path="/addstudent" render={() => {
                    return (
                      <AddStudent />
                    )
                  }} />
                  {/* detailParent Route */}
                  <Route exact path="/parent/:id" render={() => {
                    return (
                      <div>'Sup bitch'</div>
                    )
                  }} />
                  {/* detailStudent Route */}

                  {/* 404 Route */}
                  <Route component={XNoMatch} />
                </Switch>
              </div>
            </div>
            /* Router ends here */
          }
        </div>
      </Router >
    )
  }
}

export default App;
