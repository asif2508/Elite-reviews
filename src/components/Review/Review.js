import React from 'react';
import {Col, Image } from 'react-bootstrap';
import './Review.css';
const Review = (props) => {
    const {name, picture, desc, rating} = props.review;
    return (
        <Col xs={12} md={4} lg={4}>
            <div className='card-style mb-5'>
            <div className='d-flex'>
            <Image src={picture} roundedCircle height={50} width={50} className='mt-2 ms-2'/>
            <h5  className='mt-3 ms-2 fw-bold'>{name}</h5>
            </div>
            <div className='d-flex justify-content-center align-items-start flex-column mt-2 ms-2'>
                <p title={desc} className='review-para'><strong>review:</strong> {desc.length < 32 ? desc : desc.slice(0,32)+'...'}</p>
                <p><strong>rating:</strong> {rating} stars</p>
            </div>
            </div>
        </Col>
    );
};

export default Review;