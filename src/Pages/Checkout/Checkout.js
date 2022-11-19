import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const checkout = useLoaderData();
    const { title, img, description, price } = checkout;
    return (
        <div className="card lg:card-side bg-base-300 shadow-xl mb-10 mt-5">
            <figure><img className='w-96' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h1 className="card-title text-4xl">{title}</h1>
                <h3 className='text-base'>Price ${price}</h3>
                <p>{description}</p>
                <div className="card-actions justify-end">
                </div>
                {
                    user?.email ?
                        <>
                            <h2 className='text-2xl text-secondary'>Review</h2>
                            <textarea className="textarea textarea-secondary w-full" placeholder={`Tell us about ${title}`}></textarea>
                            <div className="card-actions justify-end">
                                <button className="btn btn-secondary mt-4">Submit</button>
                            </div>
                        </>
                        :
                        <>
                            <Link to='/login'> <button className="btn btn-primary">Please Login First to review</button></Link>
                        </>

                }

            </div>

        </div>
    );
};

export default Checkout;