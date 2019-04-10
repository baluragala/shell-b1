import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header, { SubHeader } from "./components/Header";
import Footer from "./components/Footer";
import Clock from "./components/Clock";
import List from "./components/List";
import ManageMovie from "./components/ManageMovie";
import Nav from "./components/Nav";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Detail from "./components/Detail";

class App extends Component {
  state = {
    title: "Any movie. Any year. All at one place",
    case: "lower",
    ctr: 0
  };
  handleClick() {
    alert("clicked");
  }

  handleInc() {
    this.setState({ ctr: this.state.ctr + 1 });
  }

  render() {
    return (
      <div>
        <Header />
        <SubHeader title={this.state.title} case={this.state.case} />
        <div className="container">
          <Nav />
          <Switch>
            <Route
              path="/home"
              render={() => <Home prop1={this.state.title} />}
            />
            <Route exact path="/movies" render={props => <List {...props} />} />
            <Route path="/movies/new" component={ManageMovie} />
            <Route exact path="/movies/:id" component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
