import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const AllToysCards = ({ toy, user }) => {
    const { _id, picture, toyName,name, sellerEmail, email, seller, price, ratings, subCategory, availableQuantity } = toy;

    /* const addHandler = () => {
        if (user) {
            fetch(`http://localhost:5000/added-toys`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ picture, toyName, seller, price, ratings, subCategory, availableQuantity, email: user?.email })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Added...',
                            text: 'Toy added Successful!',
                        })

                    }
                })
        } else {
            toast('You Login First');
        }
    } */

    // view details button 
    const viewDetailsHandler = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to log in first to View Details',
            })
        }
    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{seller}</div>
                    </div>
                </div>
            </td>
            <td>
                {name} <br />
                {sellerEmail}
                {email}
            </td>
            <td>
                {subCategory}
            </td>
            <td>
                ${price}
                {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
            </td>
            <td>
                {availableQuantity}
            </td>
            <td>{ratings}</td>
            <th>
                <Link to={`/view-details/${_id}`}>
                    <button onClick={viewDetailsHandler} className="btn btn-ghost btn-xs">View Details</button>
                </Link>
                {/* <button onClick={addHandler} className="btn btn-ghost btn-xs">Add Toys</button> */}
                <Toaster />
            </th>
        </tr>
        

    );
};

export default AllToysCards;