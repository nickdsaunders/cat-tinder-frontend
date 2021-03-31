import React, { Component } from "react";
class CatIndex extends Component {
  render() {
    return (
      <>
        <h1>Cat Index</h1>
        <ul>
          {this.props.cats.map((cat) => {
            return <li>{cat.name}</li>;
          })}
        </ul>
      </>
    );
  }
}
export default CatIndex;
