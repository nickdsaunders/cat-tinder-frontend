import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Container } from 'reactstrap';

class CatNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        age: '',
        enjoys: '',
        img: ''
      },
      submitted: false
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.createNewCat(this.state.form);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <Container fluid className="cat-form-container">
          <h2>New Frisky Feline's Profile</h2>
          <Form>
            <FormGroup>
              <Label for="name">Cat's Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.form.name}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">Cat's Age</Label>
              <Input
                type="number"
                name="age"
                value={this.state.form.age}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="enjoys">What does your cat enjoy?</Label>
              <Input
                type="text"
                name="enjoys"
                value={this.state.form.enjoys}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="img">Image link for you fine feline</Label>
              <Input
                type="text"
                name="img"
                value={this.state.form.img}
                onChange={this.handleChange}
              />
            </FormGroup>
            <br />
            <Button onClick={this.handleSubmit}>Submit Cat</Button>
          </Form>
        </Container>
        {this.state.submitted && <Redirect to="/catindex" />}
      </>
    );
  }
}
export default CatNew;
