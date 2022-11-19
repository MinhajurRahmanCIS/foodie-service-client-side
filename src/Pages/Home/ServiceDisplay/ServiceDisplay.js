import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceDisplay = () => {

    const [services, setServices] = useState([]);
    console.log(services)
    useEffect(() => {
        fetch('http://localhost:5000/displayService')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='mb-10'>
            <div className='text-center mb-8'>
                <p className="text-4xl font-bold text-red-600">Service</p>
                <h2 className="text-5xl font-semibold">Our Foodie Service</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <div key={service._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={service.img} alt="service" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.title}</h2>
                            <p className='text-2xl text-red-600 font-semibold'>Price: ${service.price} </p>
                            <div className="card-actions justify-end">
                                <Link to={`/checkout/${service._id}`}>
                                    <button className="btn btn-primary">Review</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='text-center mt-8'>
                <Link to='/services'> <button className="btn btn-outline btn-error">See all</button></Link>
            </div>
        </div>
    );
};

export default ServiceDisplay;