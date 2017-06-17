import React from 'react';
import { Breadcrumb ,PageHeader} from 'react-bootstrap';

export default class Footer extends React.Component {
	constructor(props) {
	    super(props);
    	this.state = {
    	
    	};
  	}
    render() {
	    return (
	    	<div className="footer">
		    	<footer className="footer">
			      <div className="container">
			        <p className="text-muted">Copyright © 2017 by David Liu.</p>
			      </div>
			    </footer>
		  	</div>
	    )
  };
}

