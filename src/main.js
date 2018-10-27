import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import SidebarOP from './Components/Sidebar';
import axios from 'axios';

const Main = (props) => {

  const clickFunction = () => {
    axios({
      method:'post',
      url:'localhost:3000/signin/login',
    })
      .then((response) => {
        
      });
  };
  return (
    <div className="app">
      <div className="app-body">
        <SidebarOP />
      </div>
      <Button active onClick={clickFunction}> Push Me</Button>
    </div>
  );
};

export default Main;
