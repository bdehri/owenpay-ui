import React, { Component } from 'react';
import {
  Form, Grid, Button, Header, Message, Segment
} from 'semantic-ui-react';
import axios from 'axios';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleLoginButton = this.handleLoginButton.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleLoginButton = () => {
    console.log('fired');
    /*axios({
      method:'post',
      url:'localhost:3000/signin/login',
      data: {},
      headers: {}
    })
      .then((response) => {
      });*/
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div style={{ float: 'center', display: 'block' }}>
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Log-in to your account
            </Header>
            <Form size="large" onSubmit={this.handleLoginButton}>
              <Segment stacked>
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
                <Button color="teal" fluid size="large">
                  Login
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


export default LoginPage;
