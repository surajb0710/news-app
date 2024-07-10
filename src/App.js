import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize = 20;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          {/* <News pageSize={2} pageUrl="" country="In" category="science" /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  pageUrl=""
                  country="In"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={this.pageSize}
                  pageUrl=""
                  country="In"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.pageSize}
                  pageUrl=""
                  country="In"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  pageUrl=""
                  country="In"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={this.pageSize}
                  pageUrl=""
                  country="In"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={this.pageSize}
                  pageUrl=""
                  country="In"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={this.pageSize}
                  pageUrl=""
                  country="In"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={this.pageSize}
                  pageUrl=""
                  country="In"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
