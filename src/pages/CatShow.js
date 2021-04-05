import React, { Component } from 'react'
import {
  Button,
  NavLink
} from "reactstrap";

class CatShow extends Component{
  render(){
      const cat = this.props.cat
    return(
      <div>
        <h1>Cat Info</h1>

        <div>Name: { cat.name }</div>
        <div>Age: { cat.age }</div>
        <div>Enjoys: { cat.enjoys }</div>
        <NavLink
           href={`/catedit/${ this.props.cat.id }`}
        >
          <Button color="secondary">
            Edit Cat Profile
          </Button>
        </NavLink>
      </div>
      
    )
  }
}
export default CatShow