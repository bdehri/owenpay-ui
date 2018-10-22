import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Breadcrumb} from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <Breadcrumb>
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link>Store</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
        </Breadcrumb>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code> src/App.js </code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
export default App;
