import React from 'react';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';

export default class Bssidebar extends React.Component {

	render() {
		return (
			<nav className="main">
					<div>
						<header>
								<img className="thumb" src="http://i.imgur.com/IwZ6WmO.png" />
								<span>David Liu</span>
						</header>
					</div>
	
					<div id="sidebar" className="list-group"> 
						<a href="#" className="list-group-item active">
							<i className="icon-dashboard"></i> Dashboard
						</a>

						<a href="#users" className="list-group-item"  data-parent="#sidebar">
							<i className="icon-group"></i> Users
								<span className="badge bg_danger">0</span>
						</a>

						<div id="users" className="list-group subitem collapse">	
							<a href="#" className="list-group-item">
								<i className="icon-caret-right"></i> Users
									<span className="badge bg_danger">0</span>
							</a>
							<a href="#" className="list-group-item">
								<i className="icon-caret-right"></i> Create User
							</a>
							<a href="#" className="list-group-item">
								<i className="icon-caret-right"></i> Create Group
							</a>
						</div>  

						<a href="#articles" className="list-group-item"  data-parent="#sidebar">
							<i className="icon-file-text"></i> Articles
							<span className="badge bg_danger">0</span>
						</a>

						<div id="articles" className="list-group subitem collapse"> 
							<a href="#" className="list-group-item bg_warning">
								<i className="icon-caret-right"></i> Articles
								<span className="badge bg_danger">0</span>
							</a>
							<a href="#" className="list-group-item">
								<i className="icon-caret-right"></i> Create Article
							</a>
						</div>
					</div>
			</nav>
		);
	}
}