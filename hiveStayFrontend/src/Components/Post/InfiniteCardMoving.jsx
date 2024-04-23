import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Post from './Post';

function InfiniteCardMoving() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/getpost", {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const reversedData = res.data.reverse();
                setPost(reversedData);
            } catch (error) {
                console.log(error);
            }
        };
        getPosts();
    }, []);

    const duplicatedSlides = [...post, ...post];

    return (
        <div className="relative w-full overflow-hidden">
            {/* Wrapping div for seamless looping */}
            <motion.div
                className="flex"
                animate={{
                    x: ['-100%', '0%'],
                    transition: {
                        ease: 'linear',
                        duration: 20,
                        repeat: Infinity,
                    },
                    hover:{
                        scale: 1.1,
                        transition: { duration:25 }
                    
                    }
                }}
            >
                {/* Render duplicated slides */}
                {duplicatedSlides.map((post, index) => (
                    <motion.div
                        key={index}
                        className="flex-shrink-0"
                        whileHover={{ scale: 1, transition: { duration: 0 } }} // Pauses animation on hover
                    >
                        <div className="flex gap-10 mx-4">
                            <div className="flex mb-6 relative items-center justify-center w-full h-72">
                                <div className="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
                                    <div className="text-gray-500 group-hover:scale-105 transition-all w-96"></div>
                                    <div className="group-hover:pb-10 transition-all duration-500 delay-200">
                                        <div className='flex'>
                                            <div className='-ml-20 flex justify-start '>
                                                <img className="h-16 " src="https://upload.wikimedia.org/wikipedia/en/8/83/Indian_Institute_of_Information_Technology%2C_Una_logo.png" alt="logo"></img>
                                            </div>
                                            <div className=''> 
                                                <h1 className="font-semibold text-gray-700 mt-2 ml-10">{post.title}</h1>
                                                <p className="text-gray-500 text-sm ml-4">@warden </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full relative gap-2 justify-evenly w-full">
                                        {post.content}
                                    </div>
                                    <div className='flex justify-between mb-4 mt-4'>
                                    <h1 className="-ml-40 text-xs">{new Date(post.date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })}</h1>
                                        <h1 className='-mr-40 text-xs'>{post.time}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default InfiniteCardMoving;
