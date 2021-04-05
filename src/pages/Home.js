import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap';
import cat from '../Assets/zeke-tucker-gSSK4u8yPpM-unsplash.jpg'
import "/Users/learnacademy/Desktop/cat-tinder-frontend-nick-deven/src/App.css";

const home = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Cat Tinder</h1>
          <p className="lead">It's a PLAYdating app for cats!</p>
          <div className="main-body">
        <img src={ cat } alt="super sexy cat laying on its back" className="home-pic"/>
      </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default home