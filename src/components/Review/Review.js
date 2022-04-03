import React from 'react';
import {Col, Image } from 'react-bootstrap';
import './Review.css';
const Review = (props) => {
    const {name, picture, desc, rating} = props.review;
    return (
        <Col xs={12} md={4} lg={4}>
            <div className='card-style'>
            <div className='d-flex'>
            <Image src={picture} roundedCircle height={50} width={50} className='mt-2 ms-2'/>
            <h5  className='mt-3 ms-2 fw-bold'>{name}</h5>
            </div>
            <div>
                <p>review: {desc}</p>
                <p>rating: {rating}</p>
            </div>
            </div>
        </Col>
    );
};

export default Review;