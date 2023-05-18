import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import image1 from '../../../assets/images/Gallery/gallery1.jpg'
import AllToysCards from '../../AllToysCards/AllToysCards';
import './AllToys.css'

const AllToys = () => {

    const [category, setCategory] = useState('all');
    const [allToys, setAllToys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/all-toys`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }, [])

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

                        <button className={`dynamicButton  ${category == 'sports' ? 'active' : ''}`} onClick={() => categoryButton('sports')}>Sports Car</button>
                        
                        <button className={`dynamicButton  ${category == 'tractor' ? 'active' : ''}`} onClick={() => categoryButton('tractor')}>Tractor</button>
                        
                        <button className={`dynamicButton  ${category == 'mini' ? 'active' : ''}`} onClick={() => categoryButton('mini')}>Mini Fire Truck</button>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        allToys.map(toy => <AllToysCards
                            key={toy._id}
                            toy={toy}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllToys;