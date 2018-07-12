import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import XNoMatch from "./pages/XNoMatch";
import { Header } from "./components/Header/Header";
import { Sidenav } from "./components/Sidenav/Sidenav";
import { Dashboard } from "./pages/Dashboard";
import { Search } from "./pages/Search";
import {AddParent} from "./pages/AddParent";
import {AddStudent} from "./pages/AddStudent";
import { Pointofsale } from "./pages/Pointofsale";
import { Tabbar } from "./components/Tabbar/Tabbar";
import { Invoices } from "./pages/Invoices";

export class App extends Component {
  state = {
    activeID: '',
    activeTab: 'activeTab',
    tabs: [],
  }

  setActiveTab = (tabID) => {
    console.log('Changing activeTab: ' + tabID);
    this.setState({ activeTab: tabID });
  }

  render() {
    const activeTab = this.state.activeTab;
    return (
      <Router>
        <div className="app">
          <Header />
          <Sidenav
            activeTab={activeTab}
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
          {/* Router ends here */}
        </div>
      </Router>
    )
  }
}

export default App;
