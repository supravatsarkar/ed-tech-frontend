import React from 'react';
import bannerImage from '../Banner/banner-left.png';

const Banner = () => {
    return (
        <div className='d-flex align-items-center row bg-light my-2' style={{ padding: '50px 0' }}>
            <div className='col-12 col-lg-7 text-center'>
                <h1 style={{ fontSize: '100px' }}>Learn Without Limits</h1>
                <button type="button" className='btn btn-danger btn-lg'>Free Trial</button>
            </div>
            <div className='d-none d-lg-block col-lg-5'>
                <img className='w-75 rounded-circle shadow-lg' src={bannerImage} alt="banner"></img>
            </div>

        </div>
    );
};

export default Banner;