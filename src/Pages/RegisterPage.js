import React, { Component } from 'react';
import {
  Grid, Header, Segment, Form, Message, Button
} from 'semantic-ui-react';
import axios from 'axios';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
      surname: ' ',
      userName: ' ',
      password: ' ',
      passwordAgain: ' ',
      email: ' '
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRegisterButton = this.handleRegisterButton.bind(this);
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  handleRegisterButton = () => {
    axios({
      method: 'post',
      data: {
        // eslint-disable-next-line react/destructuring-assignment
        name: this.state.name,
        // eslint-disable-next-line react/destructuring-assignment
        surname: this.state.surname,
        // eslint-disable-next-line react/destructuring-assignment
        userName: this.state.userName,
        // eslint-disable-next-line react/destructuring-assignment
        password: this.state.password,
        // eslint-disable-next-line react/destructuring-assignment
        passwordAgain: this.state.passwordAgain,
        // eslint-disable-next-line react/destructuring-assignment
        email: this.state.email
      },
      url: 'http://localhost:3000/signup',
    })
      .then((response) => {

      })
      .catch((error) => {

      });
  }

  render() {
    return (
      <div style={{ float: 'center', display: 'block' }}>
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Register OweNPay
            </Header>
            <Form size="large" onSubmit={this.handleLoginButton}>
              <Segment stacked>
                <Form.Input fluid icon="user" onChange={this.handleChange} name="name" iconPosition="left" placeholder="Name" />
                <Form.Input fluid icon="user" onChange={this.handleChange} name="surname" iconPosition="left" placeholder="Surname" />
                <Form.Input fluid icon="user" onChange={this.handleChange} name="userName" iconPosition="left" placeholder="Username" />
                <Form.Input fluid icon="user" onChange={this.handleChange} name="email" iconPosition="left" placeholder="E-mail address" />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  name="passwordAgain"
                  placeholder="Password Again"
                  type="password"
                  onChange={this.handleChange}
                />
                <Button icon="add user" color="teal" fluid size="large">
                  Register
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us?
              <a href="/signup">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default RegisterPage;
