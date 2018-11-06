import React, { Component } from 'react';
import {
  Form, Grid, Button, Header, Message, Segment
} from 'semantic-ui-react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

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
    axios({
      method: 'post',
      url: 'backendurl',
      data: {
        // eslint-disable-next-line react/destructuring-assignment
        email: this.state.email,
        // eslint-disable-next-line react/destructuring-assignment
        password: this.state.password
      },
    })
      .then((response) => {
        this.setState({
          redirect: true
        });
      })
      .catch((error) => {

      });
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
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
