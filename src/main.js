import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Grid, Menu, Segment ,Breadcrumb} from 'semantic-ui-react';

const Main = (props) => {

  return (
    <div>
      <Breadcrumb size="huge">
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link>Store</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
      </Breadcrumb>


      <Grid>
        <Grid.Column width={2}>
          <Menu fluid vertical tabular>
            <Menu.Item name='bio' />
            <Menu.Item name='pics'  />
            <Menu.Item
              name='companies'
            />
            <Menu.Item
              name='links'
            />
          </Menu>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Main;
