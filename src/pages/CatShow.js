import React, { Component } from 'react'
class CatShow extends Component{
  render(){
      const cat = this.props.cat
    return(
      <div>
        <h1>Welcome to the CatShow</h1>

        <div>Name: {cat.name}</div>
        <div>Age: {cat.age}</div>
        <div>Enjoys: {cat.enjoys}</div>
      </div>
    )
  }
}
export default CatShow