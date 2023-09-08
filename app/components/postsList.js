'use client'
import Link from 'next/link'
import LazyImage from './lazyImage'
import { useState } from 'react';

function postsList({allPosts}) {
    const [postNum, setPostNum] = useState(3)

function handleClick(){
  setPostNum(prevPostNum => prevPostNum + 3)
}
  return (
    <div>
            <div className='mx-auto max-w-2xl px-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-2 mt-10'>

        {allPosts?.slice(0, postNum).map((post, index)=>(
        
        <div className='rounded-lg bg-gray-200'>
          <Link  
        key={index}
        href={`${post.url}`}
        >
          <LazyImage img={post.image}/>
         <div className='px-3'> 
        <h1 className="text-[#2F1C6A] mt-5 text-3xl leading-[120%] font-bold">{post.title}</h1>
        <h3 className="">{post.subtitle}</h3>
        <p className='text-sm pb-3 font-extrabold text-[#2F1C6A]'>{post.date}</p>
        </div>
        </Link>
        </div>
        
      ))}
    </div>
    <div className='flex justify-center mt-10 text-slate-400'>
    <button className=' w-[100px] border-2 rounded-full ' onClick={handleClick}>Load More</button>
    </div>
    </div>
  )
}

export default postsList