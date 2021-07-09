import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.css';
import {
  Button,
  Container,
  Col,
  Card,
  CardText,
  CardTitle,
  CardImg,
  Row
} from 'reactstrap';

const CatIndex = (props) => {
  const { cats } = props;
  return (
    <Container className="index-container" fluid="sm">
      <h1 className="display-3">Here are your eligible kitties</h1>
      <Row className="index-row">
        {cats.map((cat) => {
          return (
            <Col md="6" key={cat.id}>
              <Card className="index-card">
                <CardImg top width="100%" src={cat.img} alt="Card image" />
                <CardTitle tag="h5">
                  {cat.name}, {cat.age}
                </CardTitle>
                <CardText>Enjoys: {cat.enjoys}</CardText>
                <div className="buttons-wrapper">
                  <div className="button-item">
                    <Button outline color="success" size="md">
                      ❤️‍🔥
                    </Button>
                  </div>
                  <div className="button-item">
                    <Button outline color="danger" size="md">
                      ❌
                    </Button>
                  </div>
                </div>
                <Link to={`/catshow/${cat.id}`}>See Profile</Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default CatIndex;
