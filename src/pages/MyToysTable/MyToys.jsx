import React from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'


const MyToys = ({ singleToy }) => {

    const { picture, toyName, price, ratings, subCategory, seller, availableQuantity } = singleToy;

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
                <button className="btn btn-ghost btn-xs">
                    <PencilSquareIcon className="h-6 w-6 text-blue-500" />
                </button>
                <button className="btn btn-ghost btn-xs">
                    <TrashIcon className="h-6 w-6 text-blue-500" />
                </button>
            </th>
        </tr>
    );
};

export default MyToys;