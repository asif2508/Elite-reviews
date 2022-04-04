import React from 'react';
import {Image} from 'react-bootstrap';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className='error-page'>
            <Image src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?size=626&ext=jpg" fluid/>
        </div>
    );
};

export default NotFound;