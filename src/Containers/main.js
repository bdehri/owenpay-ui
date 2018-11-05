import React, { Component } from 'react';
import { Sidebar, Container } from 'semantic-ui-react';
import SidebarOP from '../Components/SidebarOP';
import MenuOP from '../Components/MenuOP';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleSideBar: true
    };
    this.toggleChildMenu = this.toggleChildMenu.bind(this);
  }

  toggleChildMenu = () => {
    this.setState({
      visibleSideBar: true
    });
  }

  render() {
    const { visibleSideBar } = this.state;
    return (
      <div>
        <Container>
          <MenuOP toggleButton={this.toggleChildMenu} />
        </Container>
        <Container>
          <div>
            <div>
              <SidebarOP visibleSideBar={visibleSideBar} />
            </div>
            <div style={{ marginTop: '5%' }}>
              <Sidebar.Pusher dimmed={visibleSideBar}>
              </Sidebar.Pusher>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default Main;
