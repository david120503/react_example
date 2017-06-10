import './css/header.css';
import React from 'react';
import ReactDOM from 'react-dom';
import BsButton from './button.js';
import UserStatus from './header/userStatus.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleButtonClick = () => {
    alert('Clicked!');
  }

  render() {
      return (
          <div>
        {/* */ }
              <UserStatus status = "Hello , XXX" className = "space"/>
              <BsButton bsStyle = "danger" bsText = "Login" className = "space pull-right"></BsButton>
              <BsButton bsStyle = "info" bsText = "Logout" className = "space pull-right"></BsButton>
          </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));