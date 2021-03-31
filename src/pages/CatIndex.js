import React, { Component } from "react";
class CatIndex extends Component {
  render() {
    return (
      <>
        <h1>Cat Index</h1>
        <ul>
          {this.props.cats.map((cat) => {
            return (
            <li key={cat.id}>
                <a href={`/catshow/${cat.id}`}>{cat.name}</a>
            </li>
            )
          })}
        </ul>
      </>
    );
  }
}
export default CatIndex;
