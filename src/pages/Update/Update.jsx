import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const Update = () => {



    const { user } = useContext(AuthContext)
    const update = useLoaderData();
    const { _id, picture, toyName, seller, price, ratings, subCategory, availableQuantity, description } = update;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onUpdate = data => {

        Swal.fire({
            title: 'Do you want to Update the Toy?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Update',
            denyButtonText: `Don't Update`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://kiddie-world-server.vercel.app/update/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        console.log(data.price)
                        if (data.modifiedCount > 0) {
                            Swal.fire('Saved!', '', 'success')
                        }
                    })
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }
    console.log(watch("example"));





    return (
        <div className='bg-[#445760]'>
            <div className="container mx-auto">
                <h1 className='text-3xl text-center font-bold text-white pt-11 pb-11'>Update Toys</h1>

                <form onSubmit={handleSubmit(onUpdate)}>
                    <div className='grid lg:grid-cols-3 gap-5 mx-auto text-center'>
                        <div>
                            <p className='text-white'>Photo URL</p>
                            <input type='url' className="input input-bordered w-full max-w-xs" placeholder='Picture URL' defaultValue={picture} {...register("picture")} />
                        </div>

                        <div>
                            <p className='text-white'>Name</p>
                            <input className="input input-bordered w-full max-w-xs" placeholder='Name' defaultValue={user?.displayName} {...register("name")} />
                        </div>

                        <div>
                            <p className='text-white'>Toy Name</p>
                            <input className="input input-bordered w-full max-w-xs" placeholder='Toy Name' defaultValue={toyName} {...register("toyName")} />
                        </div>

                        <div>
                            <p className='text-white'>Seller Name</p>
                            <input className="input input-bordered w-full max-w-xs" placeholder='Seller Name' defaultValue={seller} {...register("seller")} />
                        </div>

                        <div>
                            <p className='text-white'>Seller Email</p>
                            <input className="input input-bordered w-full max-w-xs" type='email' placeholder='Seller Email' defaultValue={user?.email} {...register("sellerEmail")} />
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
                            <input className="input input-bordered w-full max-w-xs" type="number" placeholder='Price' defaultValue={parseInt(price)} {...register("price")} />
                        </div>

                        <div>
                            <p className='text-white'>Ratings</p>
                            <input className="input input-bordered w-full max-w-xs" type="" placeholder='Ratings' defaultValue={ratings} {...register("ratings")} />
                        </div>

                        <div>
                            <p className='text-white'>Quantity</p>
                            <input className="input input-bordered w-full max-w-xs" type="number" placeholder='Quantity' defaultValue={availableQuantity} {...register("availableQuantity")} />
                        </div>

                        <div>
                            <p className='text-white'>Description</p>
                            <input className="input input-bordered w-full max-w-xs" type="text" placeholder='Description' defaultValue={description} {...register("description")} />
                        </div>

                    </div>
                    <input type="submit" value='Update' className='btn mx-auto text-center mb-5 mt-5 btn-primary' />
                </form>

            </div>
        </div>
    );
};

export default Update;