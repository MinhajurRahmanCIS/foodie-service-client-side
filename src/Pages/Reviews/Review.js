import React, { useEffect, useState } from 'react';

const Review = ({ review, handleDelete, handleStatusUpdate }) => {
    const { _id, checkoutName, customer, price, checkout, img} = review;
    const [reviewService, setReviewService] = useState({})
    console.log(reviewService)
    useEffect(() => {
        fetch(`http://localhost:5000/services/${checkout}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [checkout])
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                reviewService?.img &&
                                <img src={reviewService.img} alt="Avatar Tailwind CSS Component"  />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                    </div>
                </div>
            </td>
            <td>
                
                <span className="badge badge-ghost badge-sm">{checkoutName}</span>
            </td>
            <td>${price}</td>
        </tr>
    );
};

export default Review;