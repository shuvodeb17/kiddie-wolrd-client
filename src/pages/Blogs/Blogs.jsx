import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className='lg:px-0 px-5'>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mx-auto mb-5 lg:lg:w-2/4  ">
                        <div className="collapse-title text-xl font-medium">
                            What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </div>
                        <div className="collapse-content">
                            <p><span className='font-bold'>Access Token:</span> Access token and refresh token shouldn't be stored in the local/session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie (even though there is CSRF) and I need it for most of my requests to the Resource Server anyway.</p>

                            <p><span className='font-bold'>Refresh Token:</span> My Resource Server as well which makes it vulnerable to CSRF too and (2) it would send expose both access/refresh token with an identical attack vector.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mx-auto mb-5 lg:w-2/4">
                        <div className="collapse-title text-xl font-medium">
                            Compare SQL and NoSQL databases?
                        </div>
                        <div className="collapse-content">
                            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mx-auto mb-5 lg:w-2/4">
                        <div className="collapse-title text-xl font-medium">
                            What is express js? What is Nest JS ?
                        </div>
                        <div className="collapse-content">
                            <p>Express is a minimalist and flexible framework that is easy to use and has a large community of developers.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mx-auto mb-5 lg:w-2/4">
                        <div className="collapse-title text-xl font-medium">
                            What is MongoDB aggregate and how does it work (google it)?
                        </div>
                        <div className="collapse-content">
                            <p>A way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;