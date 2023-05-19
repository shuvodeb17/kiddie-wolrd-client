import React, { useState } from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import Update from '../Update/Update';


const MyToys = ({ singleToy, handleDelete }) => {

    const { _id, picture, toyName, price, ratings, subCategory, seller, availableQuantity } = singleToy;




    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Toy Name: {toyName} </div>
                        <div className="text-sm opacity-50">Price: ${price} </div>
                    </div>
                </div>
            </td>
            <td>
                Category: {subCategory}
                <br />
                <span className="badge badge-ghost badge-sm">Available Quantiry: {availableQuantity}</span>
            </td>
            <td>
                Seller: {seller}
                <br />
                Ratings: {ratings}
            </td>
            <th>
                <Link to={`/updated/${_id}`}>
                    <button className="bg-gray-200 p-2 rounded-full me-2">
                        <PencilSquareIcon className="h-6 w-6 text-blue-500" />
                    </button>
                </Link>

                <button onClick={() => handleDelete(_id)} className="bg-gray-200 p-2 rounded-full">
                    <TrashIcon className="h-6 w-6 text-red-500" />
                </button>
            </th>
        </tr>
    );
};

export default MyToys;