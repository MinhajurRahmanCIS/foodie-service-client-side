import React, { useEffect, useState } from 'react';

import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

const Review = ({ review, handleDelete}) => {
    const { _id, checkoutName, customer, price, checkout, msg } = review;
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
                    <Link>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'><ImCross/> </button></Link>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                reviewService?.img &&
                                <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>

                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm font-semibold">{checkoutName}</span>
            </td>
            <td>
                <div>
                    <div className="font-bold">{customer}</div>
                </div>
            </td>
            <td>{msg.slice(0, 10) + "..."}</td>
            <td>${price}</td>
        </tr>
    );
};

export default Review;