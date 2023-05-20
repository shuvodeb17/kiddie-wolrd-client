import React, { useContext } from 'react';
import contactImage from '../../../assets/images/Contact/contact.png'
import { AuthContext } from '../../../providers/AuthProvider';

const ContactUs = () => {
    const { user } = useContext(AuthContext);
    console.log(`contact ${user?.email}`);

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div>
            <h2 className="text-4xl font-bold mt-14 text-center">Contact Us</h2>
            <div className='grid lg:grid-cols-2 gap-5'>
                <div className='flex justify-center'>
                    <img src={contactImage} alt="" />
                </div>
                <div>
                    <div className="flex flex-col items-center justify-center min-h-screen">
                        <div className="max-w-lg w-full px-6 py-8 bg-white shadow-md rounded-lg">
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        defaultValue={user?.displayName}
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        defaultValue={user?.email}
                                        id="email"
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        rows="5"
                                        placeholder="Enter your message"
                                    ></textarea>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        onClick={handleSubmit}
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;