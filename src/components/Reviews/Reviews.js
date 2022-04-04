import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useReview } from '../../hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <div className="mt-5">
            <Container>
            <h1 className='mb-5'>What Our Customers Say!</h1>
               <div className="card-alignment">
               <Row className='d-flex align-items-center justify-content-center'>
                    
                    {
                        reviews.map(review => <Review 
                        key={review.id}
                        review ={review}
                        ></Review>)
                    }
                </Row>
               </div>
            </Container>
        </div>
        </div>
    );
};

export default Reviews;