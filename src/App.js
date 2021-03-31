import { Component } from "react";
import "./App.css";
import cats from "./mockCats.js";
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
  constructor(props) {
    super(props);
    this.state = {
      cats: cats,
    };
  }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/catindex"
            render={() => <CatIndex cats={this.state.cats} />}
          />
          <Route path="/catshow/:id" render = {(props) => {
            //get the id from the URL
            // Const id to be that of the id of a cat and the plus sign changes the datatype to an integer because without it it will be passed as a string
            const id = +props.match.params.id;
            // finding the cat from mock data using the id by finding the cats data
            const foundKitty = this.state.cats.find(cat => cat.id === id);
            // pass that cat into CatShow as propData
            return <CatShow cat={foundKitty}/>}
          } />
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
