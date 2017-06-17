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
    	
    	};
  	}
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
				    <Tab eventKey={1} title="Tab 1">
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
				    <Tab eventKey={2} title="Tab 2">
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
				    <Tab eventKey={3} title="Tab 3" disabled>
				    	Tab 3 content
				    </Tab>
				 </Tabs>

		  	</div>
	    )
  };
}

