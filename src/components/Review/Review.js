import React from 'react';
import {Col, Image } from 'react-bootstrap';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar } from '@fortawesome/free-solid-svg-icons';
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
                
                <p className='description' title={desc}>{desc.length < 200 ? desc : desc.slice(0,200)+'...'}</p>
                {rating >= 3 && rating < 4 &&
                <p>
                    <strong>rating: </strong> 
                    <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>     
                </p>
                }
                {rating >= 4 && rating < 5 &&
                <p>
                    <strong>rating: </strong> 
                    <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>     
                </p>
                }
                {rating ===5 &&
                <p>
                    <strong>rating: </strong> 
                    <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>     
                </p>
                }
            </div>
            </div>
        </Col>
    );
};

export default Review;