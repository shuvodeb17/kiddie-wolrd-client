import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import image1 from '../../../assets/images/Gallery/gallery1.jpg'
import { AuthContext } from '../../../providers/AuthProvider';
import AllToysCards from '../../AllToysCards/AllToysCards';
import './AllToys.css'

const AllToys = () => {
    const {user} = useContext(AuthContext)
    // console.log(user.email);

    const [category, setCategory] = useState('all');
    const [allToys, setAllToys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/all-toys/${category}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
                console.log(data)
            })
    }, [category])


    // category button
    const categoryButton = (buttonName) => {
        setCategory(buttonName)
    }
    console.log(category);


    return (
        <div className='mt-20'>
            <div className="container mx-auto">
                <h1 className='text-3xl font-bold mt-5 mb-7 text-center'>All Toys</h1>
                <div className='all-category'>
                    <div className='mt-5 mb-5 mx-auto text-center'>
                        <input type="text" required name='email' placeholder="Search your toys" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='all-button mb-5'>
                        <button className={`dynamicButton  ${category == 'all' ? 'active' : ''}`} onClick={() => categoryButton('all')}>All</button>

                        <button className={`dynamicButton  ${category == 'Sports Car' ? 'active' : ''}`} onClick={() => categoryButton('Sports Car')}>Sports Car</button>

                        <button className={`dynamicButton  ${category == 'Tractor' ? 'active' : ''}`} onClick={() => categoryButton('Tractor')}>Tractor</button>

                        <button className={`dynamicButton  ${category == 'Fire' ? 'active' : ''}`} onClick={() => categoryButton('Fire')}>Mini Fire Truck</button>
                    </div>
                </div>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Seller</th>
                                <th>Name</th>
                                <th>Sub Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Ratings</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allToys.map(toy => <AllToysCards
                                    key={toy._id}
                                    toy={toy}
                                    user={user}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;