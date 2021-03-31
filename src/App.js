import { Component } from "react";
import "./App.css";
import cats from './mockCats.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import CatEdit from "./pages/CatEdit.js";
import CatIndex from "./pages/CatIndex.js";
import CatNew from "./pages/CatNew.js";
import CatShow from "./pages/CatShow.js";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      catss: cats
    };
  }
  render() {
    return (
      <Router>
        <Header />
          <Switch>
            <div>
              <h2>Cats: { this.state.catss.map(value =>{ return value.name}) }</h2>
            </div>
            <Route exact path="/" component={Home} />
            <Route path="/catindex" component={CatIndex} />
            <Route path="/catshow/:id" component={CatShow} />
            <Route path="/catnew" component={CatNew} />
            <Route path="/catedit/:id" component={CatEdit} />
            <Route component={NotFound} />
          </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
