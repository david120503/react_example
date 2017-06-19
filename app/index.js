import './css/common.css';
import './css/sidebar.css';
import React from 'react';
import ReactDOM from 'react-dom';
import BsNavBar from './header/bsnavbar.js';
import SideBar from './body/sidebar.js';
import Container from './body/container.js';
import Footer from './footer/footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
      return (
          <div>
            <BsNavBar />
            <SideBar />
            <Container 
              Menu = "Dashboard"
              subMenu = "Users"
              sub2Menu = "create user"
              HeaderTitle = "Example Title Header" 
              SubTitle = "Subtext for header"
            />
            <Footer />
          </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
