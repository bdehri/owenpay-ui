import React, { Component } from 'react';
import {
 Button, Header, Icon, Image, Menu, Segment, Sidebar, 
Dropdown, Container} from 'semantic-ui-react';

class SidebarOP extends Component {
  constructor(props){
    super(props);
    this.handleSideBar = this.handleSideBar.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.visibleSideBar !== this.state.visibleSideBar) {
      this.setState({ visibleSideBar: nextProps.visibleSideBar });
    }
  }
  state = { visibleSideBar:this.props.visibleSideBar };
  handleSideBar = () => 
  {
    this.setState({ visibleSideBar: false });
  }

  render() {
    return (
      <div>
        <Sidebar
          as={Menu}
          animation="push"
          icon="labeled"
          inverted
          onHide={this.handleSideBar}
          vertical
          visible={this.state.visibleSideBar}
          width="thin"
          style={{display: 'inline-block' }}
        >
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>
      </div>
    );
  }

};

export default SidebarOP;