import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../../hook/useTitle';
// import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../../providers/AuthProvider';
import AllToysCards from '../../AllToysCards/AllToysCards';
import './AllToys.css';

const AllToys = () => {
    const { user } = useContext(AuthContext)
    // console.log(user.email);

    const [category, setCategory] = useState('all');
    const [allToys, setAllToys] = useState([])
    const [searchText, setSearchText] = useState('');
    useTitle('All Toys')
    console.log(searchText)


    useEffect(() => {
        fetch(`http://localhost:5000/all-toys/${category}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data.slice(0, 20))
            })
    }, [category])

    const searchButtonHandler = () => {
        fetch(`http://localhost:5000/search-toys/${searchText}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setAllToys(data)
                }
            })
    }

    // seeMoreButtonHandler
    const seeMoreButtonHandler = () => {
        fetch(`http://localhost:5000/all-toys/${category}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }

    // category button
    const categoryButton = (buttonName) => {
        setCategory(buttonName)
    }


    return (
        <div className='mt-20'>
            <div className="container mx-auto">
                <h1 className='text-3xl font-bold mt-5 mb-7 text-center'>Shop By Category: {allToys.length}</h1>
                <div className='all-category'>
                    <div className='mt-5 mb-5 mx-auto text-center'>
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" required name='name' placeholder="Search your toys" className="input input-bordered w-full max-w-xs" />
                        <button onClick={searchButtonHandler} className="btn btn-primary ms-5">Search</button>
                    </div>
                    <div className='all-button mb-5'>
                        <button className={`dynamicButton  ${category == 'all' ? 'active' : ''}`} onClick={() => categoryButton('all')}>All</button>

                        <button className={`dynamicButton  ${category == 'Sports Car' ? 'active' : ''}`} onClick={() => categoryButton('Sports Car')}>Sports Car</button>

                        <button className={`dynamicButton  ${category == 'Tractor' ? 'active' : ''}`} onClick={() => categoryButton('Tractor')}>Tractor</button>

                        <button className={`dynamicButton  ${category == 'Fire' ? 'active' : ''}`} onClick={() => categoryButton('Fire')}>Fire Truck</button>
                    </div>
                </div>

                <div className="overflow-x-auto w-full text-center">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Seller</th>
                                <th>Name / Email</th>
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
                    <button className="btn btn-primary mx-auto text-center" onClick={seeMoreButtonHandler}>See More</button>
                </div>
            </div>
        </div>
    );
};

export default AllToys;