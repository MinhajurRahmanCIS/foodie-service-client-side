import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Review from './Review';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(rew => rew._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div className='mb-8'>
            {
                reviews.length === 0 ?
                    <>
                        <h1 className='text-3xl text-purple-500 my-5'>No Reviews Were Added</h1>
                    </>
                    :
                    <>
                        <h2 className="text-5xl mb-4">Total Reviews {reviews.length} </h2></>
            }
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr className='text-purple-300'>
                            <th>
                            </th>

                            <th></th>
                            <th>Item Name</th>
                            <th>Customer Name</th>
                            <th>Message</th>
                            <th>Price</th>
                            <th>Update Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <Review
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}>

                            </Review>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Reviews;