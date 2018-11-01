import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Menu, Container, Image, Dropdown, Icon, Button
} from 'semantic-ui-react';


const MenuOP = (props) => {
  return (
    <Menu fixed="top" inverted style={{ display: 'inline-block' }}>
      <Container style={{ width: '80%' }}>
        <Menu.Item>
          <Icon name="angle right" as={Button} onClick={props.toggleButton} />
        </Menu.Item>
        <Menu.Item as="a" header>
          OweNPay
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>

        <Dropdown item simple text="Dropdown">
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  );
};

MenuOP.propTypes = {
  toggleButton: PropTypes.func.isRequired
};

export default MenuOP;