import React from 'react';
import './style.css';
import {
  Button,
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom';

const CatShow = (props) => {
  const { name, age, enjoys, img, id } = props.cat;

  return (
    <Container className="show-container" fluid="sm">
      <CardImg top width="100%" src={img} alt={id} />
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            {name}, {age}
          </CardTitle>
          <CardText>Enjoys: {enjoys}</CardText>
          <div className="buttons-wrapper">
            <div className="button-item">
              <Link to={`/catedit/${id}`}>
                <Button size="md" color="primary">
                  Edit Profile
                </Button>
              </Link>
              {'  '}
              <Link to={`/catedit/${id}`}>
                <Button size="md" color="primary">
                  Delete Profile
                </Button>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};
export default CatShow;
