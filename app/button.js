import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
export default class BsButton extends React.Component {
  render() {
    return (
      <Button 	
      	bsStyle   = {this.props.bsStyle} 
      	className = {this.props.className}
      >

      	{this.props.bsText}

      </Button>
    );
  }
}

