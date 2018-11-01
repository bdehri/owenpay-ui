import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Grid, Menu, Segment ,Breadcrumb, Sidebar, Image, Header,
Dropdown, Container} from 'semantic-ui-react';
import SidebarOP from './Components/SidebarOP';
import MenuOP from './Components/MenuOP';
import LoginPage from './Pages/LoginPage';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleSideBar: true
    };
    this.toggleChildMenu = this.toggleChildMenu.bind(this);
  };

  toggleChildMenu = () => {
    this.setState({
      visibleSideBar: true
    });
 }

  render() {
    return (
      <div>
        <Container>
          <MenuOP toggleButton={this.toggleChildMenu}/>
        </Container>  
        <Container>
          <div>
            <section>
              <SidebarOP visibleSideBar={this.state.visibleSideBar}/>
            </section>
              
              <Sidebar.Pusher dimmed={true}>
                <LoginPage />
              </Sidebar.Pusher>
          </div>
        </Container>
      </div>
    );
  }
}
export default Main;