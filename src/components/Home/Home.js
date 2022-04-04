import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import './Home.css';
import {useReview} from '../../hooks/useReview';
import Review from '../Review/Review';
import {Link, useNavigate} from 'react-router-dom';
const Home = () => {
    const [reviews, setReviews] = useReview();

    const navigate =useNavigate()
    return (
        <div className='home-container'>
          <div className="header-container">
            <Container>
            <Row>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }}>
                    <div className="main-container">
                    <h1>Choose The Right Product</h1>
                    <h1>Follow Your Dream</h1>
                    <p>Here you can see the best laptops ever.You can choose any laptop by the reviews given by the people. Best of luck. chase your dream laptop. Because we are suggesting you the world's best laptops based on the user experiances.
                    </p>
                    <a className='demo-link' href="/">Live Demo</a>
                    </div>
                </Col>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} lg={{ span: 6, order: 2 }}>
                    <Image src="https://media.istockphoto.com/photos/isolated-laptop-on-white-background-stock-photo-picture-id1294325987?b=1&k=20&m=1294325987&s=170667a&w=0&h=MUqxtcCsnCB5SGc9YxSyRkkvZ7vKR0RJEULeEpYgv1M=" fluid={true} />
                </Col>
                </Row>
                </Container>
          </div>
        <div className="review-container">
            <Container>
            <h1 className='mb-5'>Customer Reviews</h1>
               <div className="card-alignment">
               <Row className='d-flex align-items-center justify-content-center'>
                    
                    {
                        reviews.slice(0,3).map(review => <Review 
                        key={review.id}
                        review ={review}
                        ></Review>)
                    }
                </Row>
               </div>
            </Container>
            <button className='navigate-btn' onClick={()=> navigate('/reviews')}>See more</button>
        </div>

        </div>
    );
};

export default Home;