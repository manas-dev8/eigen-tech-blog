import React from 'react';
import { useParams } from 'react-router-dom';
import { FaClock, FaUser } from 'react-icons/fa6';
import SideBar from '../components/SideBar';
import blogsdata from "../data/blogsdata.json";

const SingleBlog = () => {
    const { id } = useParams();
    const data = blogsdata.blogs.find((blog) => blog.id === parseInt(id));

    if (!data) {
        return (
            <div className="text-center py-16">
                <h1 className="text-2xl font-bold text-red-600">Blog Not Found</h1>
                <p className="text-gray-500 mt-4">The blog you are looking for does not exist.</p>
            </div>
        );
    }

    const { image, title, author, published_date, reading_time, contentBlocks } = data;

    return (
        <div>
            <div className="py-8 bg-gray-500 text-center text-white">
                {/* You can add some title or description here */}
            </div>
            <div className="max-w-7xl mx-auto my-12 flex flex-col lg:flex-row gap-12 px-4">
                <div className="lg:w-3/4">
                    <img src={image} alt="Blog Image" className="w-full rounded mb-6 mt-16" />
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-800 cursor-pointer">{title}</h2>
                    <p className="mb-3 text-gray-600">
                        <FaUser className="inline-flex items-center mr-2" /> {author} | {published_date}
                    </p>
                    <p className="mb-3 text-gray-600">
                        <FaClock className="inline-flex items-center mr-2" /> {reading_time}
                    </p>
                    <div className="blog-content">
                        {Array.isArray(contentBlocks) && contentBlocks.length > 0 ? (
                            contentBlocks.map((block, index) => {
                                if (block.type === 'paragraph') {
                                    return (
                                        <p key={index} className="text-base lg:text-lg text-gray-500 mb-6">
                                            {block.text}
                                        </p>
                                    );
                                } else if (block.type === 'subheading') {
                                    return (
                                        <h3 key={index} className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                                            {block.text}
                                        </h3>
                                    );
                                }
                                return null;
                            })
                        ) : (
                            <p className="text-gray-500">No content available for this blog.</p>
                        )}
                    </div>
                </div>
                <div className="lg:w-1/4">
                    <SideBar />
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
