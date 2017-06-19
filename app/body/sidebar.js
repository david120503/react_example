import '../css/common.css';
import React from 'react';
import {ListGroup, ListGroupItem ,PanelGroup , Panel ,Accordion} from 'react-bootstrap';

export default class Bssidebar extends React.Component {
	render() {
		return (
			<nav className="main">
				<div>
					<header>
							<img className="thumb" src="http://i.imgur.com/IwZ6WmO.png" />
							<span>David Liu</span>
					</header>
					<a href="#"	className="list-group-item panel panel-default">
						<i className="icon-dashboard"></i> Dashboard
					</a>
				</div>
				<div className="list-group sidebar_btn">
					<Panel collapsible header="Users" className="sidebar_btn" bsStyle="info">
						<ListGroup fill>
							<ListGroupItem><a href="#">Users</a>
								<span className="badge bg_danger">0</span>
							</ListGroupItem>
							<ListGroupItem><a href="#"><i className="icon-caret-right"></i> Create User</a></ListGroupItem>
							<ListGroupItem><a href="#"><i className="icon-caret-right"></i> Create Group</a></ListGroupItem>
						</ListGroup>
					</Panel>
					 	<Panel collapsible	header="Articles" className="sidebar_btn" bsStyle="warning">
						<ListGroup fill>
							<ListGroupItem><a href="#">Articles</a>
								<span className="badge bg_danger">0</span>
							</ListGroupItem>
							<ListGroupItem><a href="#" className="icon-caret-right"><i className="icon-caret-right"></i> Create Article</a></ListGroupItem>
						</ListGroup>
					</Panel>
				</div>
			</nav>
		);
	}
}