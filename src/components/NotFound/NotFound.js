
import React from 'react';
import notFound from '../../images/404.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="custom-min-height my-2">
            <img className="w-50 d-block mx-auto" src={notFound} alt="" />
            <Link to="/home">
                <Button variant="success">Go to Home</Button>
            </Link>
        </div>

    );
};

export default NotFound;