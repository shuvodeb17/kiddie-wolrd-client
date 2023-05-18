import React from 'react';

const AllToysCards = ({ toy }) => {
    // console.log(toy)
    const {picture,toyName,seller,price,subCategory,availableQuantity} =toy
    return (
        <div className="card card-compact border">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-sky-600">Toy Name: {toyName}</h2>
                <p>Seller:{seller}</p>
                <p>Price:{price}</p>
                <p>Sub Category:{subCategory}</p>
                <p>Available Quantity:{availableQuantity}</p>
                <div className="card-actions justify-end">
                    <button className="btn">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AllToysCards;