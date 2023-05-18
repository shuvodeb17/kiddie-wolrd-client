import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import image1 from '../../assets/images/Gallery/gallery1.jpg'
import './AllToys.css'

const AllToys = () => {
    const [isActive, setIsActive] = useState(false);
    console.log(isActive);
    return (
        <div className='mt-20'>
            <div className="container mx-auto">
                <h1 className='text-3xl font-bold mt-5 mb-7 text-center'>All Toys</h1>
                <div className='all-category'>
                    <Tabs>
                        <TabList>
                            <Tab>All</Tab>
                            <Tab>Sports Car</Tab>
                            <Tab>Tractor</Tab>
                            <Tab>Mini fire truck</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>All</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Sports Car</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Tractor</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Mini Fire Truck</h2>
                        </TabPanel>
                    </Tabs>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    <div className="card card-compact">
                        <figure><img src={image1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-sky-600">Toy Name:</h2>
                            <p>Seller:</p>
                            <p>Price:</p>
                            <p>Sub Category:</p>
                            <p>Price Available Quantity:</p>
                            <div className="card-actions justify-end">
                                <button className="btn">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToys;