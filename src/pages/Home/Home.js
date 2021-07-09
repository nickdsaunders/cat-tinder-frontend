import React from 'react';
import { Container } from 'reactstrap';
import cat from '../../assets/zeke-tucker-gSSK4u8yPpM-unsplash.jpg';
import '../../App.css';
import './style.css';

const Home = () => {
  return (
    <div>
      <Container fluid className="home-container">
        <h1 className="display-3">Frisky Felines</h1>
        <p className="lead">It's a PLAYdating app for cats!</p>
        <div className="main-body">
          <img
            src={cat}
            alt="super sexy cat laying on its back"
            className="home-pic"
          />
        </div>
      </Container>
    </div>
  );
};

export default Home;
