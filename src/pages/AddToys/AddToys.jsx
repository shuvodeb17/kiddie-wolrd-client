import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import useTitle from '../../hook/useTitle';
import { AuthContext } from '../../providers/AuthProvider';


const AddToys = () => {

    const { user } = useContext(AuthContext)
    useTitle('Add A Toys')

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:5000/all-toys-insert`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Added...',
                        text: 'Toy Added Successful!',
                    })
                }
            })
    }
    console.log(watch("example"));


    const addHandler = () => {
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
    }


    return (
        <div className='bg-[#445760]'>
            <div className="container mx-auto">
                <h1 className='text-3xl text-center font-bold text-white pt-11 pb-11'>Add A toys</h1>

                <form onSubmit={handleSubmit(onSubmit)} className='mx-auto text-center'>
                    <div className='grid lg:grid-cols-3 gap-5'>
                        <div>
                            <p className='text-white'>Photo URL</p>
                            <input type='url' className="input input-bordered w-full max-w-xs" placeholder='Picture URL' defaultValue="" {...register("picture")} />
                        </div>

                        <div>
                            <p className='text-white'>Toy Name</p>
                            <input className="input input-bordered w-full max-w-xs" placeholder='Toy Name' defaultValue='' {...register("name")} />
                        </div>

                        <div>
                            <p className='text-white'>Name</p>
                            <input className="input input-bordered w-full max-w-xs" placeholder='Toy Name' value={user?.displayName} {...register("toyName")} />
                        </div>

                        <div>
                            <p className='text-white'>Seller Name</p>
                            <input className="input input-bordered w-full max-w-xs" placeholder='Seller Name' defaultValue="" {...register("seller")} />
                        </div>

                        <div>
                            <p className='text-white'>Seller Email</p>
                            <input className="input input-bordered w-full max-w-xs" type='email' placeholder='Seller Email' value={user?.email} {...register("email")} />
                        </div>

                        <div>
                            <p className='text-white'>Category</p>
                            <select className="input input-bordered w-full max-w-xs" {...register("subCategory")}>
                                <option value="Sports Car">Sports Car</option>
                                <option value="Tractor">Tractor</option>
                                <option value="Fire">Fire</option>
                            </select>
                        </div>

                        <div>
                            <p className='text-white'>Price</p>
                            <input className="input input-bordered w-full max-w-xs" type="number" placeholder='Price' defaultValue="" {...register("price")} />
                        </div>

                        <div>
                            <p className='text-white'>Ratings</p>
                            <input className="input input-bordered w-full max-w-xs" type="" placeholder='Ratings' defaultValue="" {...register("ratings")} />
                        </div>

                        <div>
                            <p className='text-white'>Quantity</p>
                            <input className="input input-bordered w-full max-w-xs" type="number" placeholder='Quantity' defaultValue="" {...register("availableQuantity")} />
                        </div>

                        <div>
                            <p className='text-white'>Description</p>
                            <input className="input input-bordered w-full max-w-xs" type="text" placeholder='Description' defaultValue="" {...register("description")} />
                        </div>

                    </div>
                    <input onClick={addHandler} type="submit" className='btn mx-auto text-center mb-5 mt-5 btn-primary' />
                </form>

            </div>
        </div>
    );
};

export default AddToys;