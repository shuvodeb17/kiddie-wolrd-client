import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useTitle from '../../hook/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysTable from '../MyToysTable/MyToys';


const MyToys = () => {

    useTitle('My Toys')
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState()
    useEffect(() => {
        fetch(`https://kiddie-world-server.vercel.app/added-toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://kiddie-world-server.vercel.app/toyRemove/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        const check = myToys.filter(toy => toy._id !== id);
                        setMyToys(check)
                    })
            }
        })
    }

    return (
        <div className='mt-5'>
            <div className="container mx-auto">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name/Price</th>
                                <th>Category Quantity</th>
                                <th>Seller And Ratings</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                myToys?.map(singleToy => <MyToysTable
                                    key={singleToy._id}
                                    singleToy={singleToy}
                                    handleDelete={handleDelete}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;