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

export class App extends Component {
  state = {
    activeID: '',
    activeTab: 'dashboard-tab',
    tabs: ['sdf', 'asdf'],
  }

  setActiveTab = (tabID) => {
    console.log('Changing activeTab: ' + tabID);
    this.setState({ activeTab: tabID });
  }

  pushTab = (tabData) => {
    let newTabs = this.state.tabs.slice();
    console.log(tabData);
    newTabs.push(tabData);
    this.setState({ tabs: newTabs });
  }

  removeTab = (tabID) => {
    // let newTabs = this.state.tabs.filter(tabID);

  }

  render() {
    console.log(this.state);
    const activeID = this.state.activeID;
    const activeTab = this.state.activeTab;
    const tabs = this.state.tabs;
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
          />
          <CornerImage activeTab={activeTab} />
          {/* Router starts here */}
          <div className="content-container">
            <div className="content-wrapper">

              {/* // DELETE ME DELETE ME */}
              <a className="waves-effect waves-light btn-large" onClick={this.pushTab}>PUSH<i className="material-icons right">person_add</i></a>
              <a className="waves-effect waves-light btn-large" onClick={this.removeTab}>REMOVE<i className="material-icons right">person_add</i></a>

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
                {/* 404 Route */}
                <Route component={XNoMatch} />
              </Switch>
            </div>
          </div>
          {/* Router ends here */}
        </div>
      </Router>
    )
  }
}

export default App;
