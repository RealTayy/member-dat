import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import XNoMatch from "./pages/XNoMatch";
import { Header } from "./components/Header/Header";
import { Sidenav } from "./components/Sidenav/Sidenav";
import { Dashboard } from "./pages/Dashboard";
import { Search } from "./pages/Search";
import { Pointofsale } from "./pages/Pointofsale";
import { Addnew } from "./pages/Addnew";
import { Tabbar } from "./components/Tabbar/Tabbar";


export class App extends Component {
  state = {
    activeID: '',
    activeTab: 'activeTab',
    tabs: [],
  }

  changeActive

  setActiveTab = (tabID) => {
    console.log('Changing activeTab: ' + tabID);
    this.setState({ activeTab: tabID });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Sidenav
            activeTab={this.state.activeTab}
            setActiveTab={this.setActiveTab}
          />
          <Tabbar />
          {/* Router starts here */}
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
                  <Search />
                )
              }} />
              {/* Pointofsale Route */}
              <Route exact path="/pointofsale" render={() => {
                return (
                  <Pointofsale />
                )
              }} />
              <Route exact path="/addnew" render={() => {
                return (
                  <Addnew />
                )
              }} />
              {/* 404 Route */}
              <Route component={XNoMatch} />
            </Switch>
          </div>
          {/* Router ends here */}
        </div>
      </Router>
    )
  }
}

export default App;
