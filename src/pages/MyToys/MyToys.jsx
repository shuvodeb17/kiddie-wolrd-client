import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysTable from '../MyToysTable/MyToys';


const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/added-toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user])

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
                                <th>Ratings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                myToys?.map(singleToy => <MyToysTable
                                    key={singleToy._id}
                                    singleToy={singleToy}
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