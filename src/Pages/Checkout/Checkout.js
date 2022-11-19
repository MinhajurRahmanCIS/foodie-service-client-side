import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkout = useLoaderData();
    const {title, img, description, price } = checkout;
    return (
            <div className="card lg:card-side bg-base-300 shadow-xl mb-10">
                <figure><img className='w-96' src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h1 className="card-title">{title}</h1>
                    <h3>Price ${price}</h3>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
    );
};

export default Checkout;