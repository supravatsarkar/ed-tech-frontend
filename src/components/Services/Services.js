import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    // const { duration, id, img, name, price, rating } = services;
    useEffect(() => {
        fetch('./fakeDataCourse.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
    }, [])
    return (
        <div className="bg-light my-4 container shadow rounded p-3">
            <h1 className="text-center fw-bolder">Our Latest <span className="text-danger">Courses</span></h1>
            <div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        services.map((service, index) => <div key={index} className="col">
                            <div className="card h-100 border border-2 border-dark">
                                <img src={service?.img} className="card-img-top" alt="..." />
                                <div className="card-body mb-0">
                                    <h5 className="card-title">{service?.name}</h5>
                                    <p className="card-text mb-0">Rating: {service?.rating}</p>
                                </div>
                                <div className="card-footer bg-white border-0 d-flex justify-content-between ">
                                    <span className="badge bg-dark d-flex align-items-center">{service?.duration} H</span>
                                    <button type="button" class="btn btn-danger btn-sm">Details</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;