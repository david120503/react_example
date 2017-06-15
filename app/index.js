import './css/header.css';
import './css/sidebar.css';
import React from 'react';
import ReactDOM from 'react-dom';
import BsNavBar from './header/bsnavbar.js';
import BsSideBar from './body/sidebar.js';

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
            <BsSideBar />
          </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
