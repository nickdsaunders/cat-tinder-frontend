import { Component } from "react";
import cats from "./mockCats.js";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catindex" component={CatIndex} />
          <Route path="/catshow/:id" component={CatShow} />
          <Route path="/catnew" component={CatNew} />
          <Route path="/catedit/:id" component={CatEdit} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
