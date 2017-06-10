import React from 'react';

export default class UserStatus extends React.Component {
  	render() {
	    return (
	    	<div className = "pull-left">
	     		{this.props.status}
	      	</div>
	    );
  }
}

