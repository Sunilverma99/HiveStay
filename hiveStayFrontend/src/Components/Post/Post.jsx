import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import SliderPost from './InfiniteCardMoving';

export default function Post() {
    const [post,setPost]=useState([]);
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
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { timeZone: 'UTC' });
    };
   
  return (
    <div className=' bg-white -pl-20 '>
          <SliderPost/>
{/* {post.map((p,index) => (
  <div class="flex mb-6 relative items-center justify-center w-full">
  <div class="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
    <div class="text-gray-500 group-hover:scale-105 transition-all w-96"> 
    </div>
    <div class="group-hover:pb-10 transition-all duration-500 delay-200">
    
      <div className='flex'>
      <div className='-ml-20 flex justify-start '>
        <img className="h-16 " src="https://upload.wikimedia.org/wikipedia/en/8/83/Indian_Institute_of_Information_Technology%2C_Una_logo.png"></img>
      </div>
      <div className=''>
      <h1 class="font-semibold text-gray-700 mt-2 ml-10">{p.title}</h1>
      <p class="text-gray-500 text-sm ml-4">@warden </p>
      </div>
      </div>
    </div>
    <div class=" mt-3 flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full relative gap-2 justify-evenly w-full">
    {p.content}
    </div>
    <div className='flex justify-between mb-4 mt-4'>
<h1 className='-ml-40 text-xs'>{formatDate(p.date)}</h1>
<h1 className='-mr-40 text-xs'>{p.time}</h1>
      </div>
   
  </div>
</div>


))}       */}
    </div>
   
  
      
  )
}
