import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {

    const toy = useLoaderData()
    console.log(toy)
    const { _id
        , name, availableQuantity, description, picture,
        price, ratings, seller, sellerEmail, subCategory, toyName } = toy;

    return (
        <div className=''>
            <div className="container mx-auto">
                <div className="hero">
                    <div className="hero-content text-center">
                        <div className="text-start">
                            <img src={picture} alt="" />
                            <h1 className="text-3xl font-bold">Toy Name: {toyName}</h1>
                            <h1 className=""> Name: {name}</h1>
                            <h1 className="">Seller Name: {seller}</h1>
                            <h1 className="">Seller Email: {sellerEmail}</h1>
                            <h1 className="">Sub-category: {subCategory}</h1>
                            <h1 className="">Price: {price}</h1>
                            <h1 className="">Rating: {ratings}</h1>
                            <h1 className="">Available quantity: {availableQuantity}</h1>
                            <h1 className="">Desctiption: {description}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;