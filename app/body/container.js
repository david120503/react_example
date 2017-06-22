import React from 'react';
import {
			Breadcrumb ,
			PageHeader ,
			Tab ,
			Tabs ,
			Form ,
			FormGroup ,
			Col ,
			FormControl ,
			ControlLabel , 
			Checkbox ,
			Button ,
			Carousel
		}
		from 'react-bootstrap';

export default class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text:"Hello World!",
			text_class:"",
			btn_primary:"primary",
			btn_success:"success",
			btn_info:"info",
			btn_warning:"warning",
			btn_danger:"danger"
		};
	}

	click_text = () => {
		this.setState({text:"you click primary btn!"});
	};

	click_add_class = () => {
		this.setState({text_class:"changeTextColor"});
	};

	render() {
		return (
			<div className="container">
				<Breadcrumb >
					<Breadcrumb.Item href="#">
						{this.props.Menu}
					</Breadcrumb.Item>
					<Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
						{this.props.subMenu}
					</Breadcrumb.Item>
					<Breadcrumb.Item active>
						{this.props.sub2Menu}
					</Breadcrumb.Item>
				</Breadcrumb>
					<PageHeader>{this.props.HeaderTitle} <small>{this.props.SubTitle}</small></PageHeader>
					<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
					<Tab eventKey={1} title="Form">
						<div className = "text" >
							<Form horizontal>
								<FormGroup controlId="formHorizontalEmail">
									<Col componentClass={ControlLabel} sm={2}>
									Email
									</Col>
									<Col sm={10}>
									<FormControl type="email" placeholder="Email" />
									</Col>
								</FormGroup>
								<FormGroup controlId="formHorizontalPassword">
									<Col componentClass={ControlLabel} sm={2}>
										Password
									</Col>
									<Col sm={10}>
										<FormControl type="password" placeholder="Password" />
									</Col>
								</FormGroup>
								<FormGroup>
									<Col smOffset={2} sm={10}>
									<Checkbox>Remember me</Checkbox>
									</Col>
								</FormGroup>

								<FormGroup>
									<Col smOffset={2} sm={10}>
									<Button type="submit">
										Register
									</Button>
									</Col>
								</FormGroup>
							</Form>
						</div>
					</Tab>
					<Tab eventKey={2} title="Image Carousel">
						<div className = "text" >
							<Carousel>
								<Carousel.Item>
									<img width={900} height={500} alt="900x500" src="../app/image1.jpeg" className="image"/>
									<Carousel.Caption>
									<h3>First slide label</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img width={900} height={500} alt="900x500" src="../app/images2.jpeg" className="image"/>
									<Carousel.Caption>
									<h3>Second slide label</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img width={900} height={300} alt="900x500" src="../app/images3.jpeg" className="image"/>
									<Carousel.Caption>
									<h3>Third slide label</h3>
									<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</div>
					</Tab>
					<Tab eventKey={3} title="Button">
						<h3> This is Button onClick Practice</h3>
					    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
					    <Button bsStyle={this.state.btn_primary} onClick={this.click_text}>change Text</Button>

					    {/* Indicates a successful or positive action */}
					    <Button bsStyle={this.state.btn_success} onClick={this.click_add_class}>change Color</Button>

					    {/* Contextual button for informational alert messages */}
					    <Button bsStyle={this.state.btn_info}>Info</Button>

					    {/* Indicates caution should be taken with this action */}
					    <Button bsStyle={this.state.btn_warning}>Warning</Button>

					    {/* Indicates a dangerous or potentially negative action */}
					    <Button bsStyle={this.state.btn_danger}>Danger</Button>

					    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
					    <Button bsStyle="link">Link</Button>

					    <div className={this.state.text_class}>{this.state.text}</div>
					</Tab>
				 </Tabs>

				</div>
		)
	};
}

