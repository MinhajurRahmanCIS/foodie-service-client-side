import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../TitleView/useTitle';

const Checkout = () => {
    useTitle("Checkout")
    const { user } = useContext(AuthContext);
    const checkout = useLoaderData();
    const { _id, title, img, description, price } = checkout;

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered';
        const msg = form.msg.value;
        const name = form.name.value;

        const review = {
            checkout: _id,
            checkoutName: title, price, img,
            customer: name, email, msg
        }

        fetch('https://foodie-service-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review placed successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));


    }




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
                            <form onSubmit={handlePlaceReview}>
                                <h2 className='text-2xl text-secondary'>Review</h2>
                                <input type="text" name="name" placeholder="Type Name" className="input input-bordered input-secondary w-full max-w-xs my-5" />
                                <textarea type="text" name="msg" className="textarea textarea-secondary w-full" placeholder={`Tell us about ${title}`} required></textarea>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-secondary mt-4" type="submit" >Submit</button>
                                </div>
                            </form>
                        </>
                        :
                        <>
                            <Link to='/login'>
                                <button className="btn btn-primary">Please Login First to review</button>
                            </Link>
                        </>

                }

            </div>

        </div>
    );
};

export default Checkout;