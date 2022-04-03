import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import './Home.css';
const Home = () => {
    return (
        <div className='home-container'>
          <div className="header-container">
            <Container>
            <Row>
                <Col xs={12} md={6} lg={6}>
                    <div className="main-container">
                    <h1>Choose The Right Product</h1>
                    <h1>Follow Your Dream</h1>
                    <p>Here you can see the best laptops ever.You can choose any laptop by the reviews given by the people. Best of luck. chase your dream laptop. Because we are suggesting you the world's best laptops based on the user experiances.
                    </p>
                    <a className='demo-link' href="/">Live Demo</a>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <Image src="https://media.istockphoto.com/photos/isolated-laptop-on-white-background-stock-photo-picture-id1294325987?b=1&k=20&m=1294325987&s=170667a&w=0&h=MUqxtcCsnCB5SGc9YxSyRkkvZ7vKR0RJEULeEpYgv1M=" fluid={true} />
                </Col>
                </Row>
                </Container>
          </div>
        <div className="review-container">
            <h1>Customer Reviews</h1>
        </div>

        </div>
    );
};

export default Home;