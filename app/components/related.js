import Link from 'next/link'
import LazyImage from './lazyImage'
function related({allPosts}) {
  return (
    <div className='bg-[#FAFBFF] mt-[100px]'>
        <h1 className="text-[#2F1C6A] pt-20 text-2xl text-center leading-[120%] font-bold">Related Topics</h1>
        <div className='px-6 py-10 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 md:grid-cols-3 my-10'>
      {allPosts?.map((post, index)=>(
        
        <div className='rounded-lg bg-gray-200'>
          <Link  
        key={index}
        href={`${post?.url}`}
        >
          <LazyImage img={post?.image}/>
         <div className='px-3'> 
        <h1 className="text-[#2F1C6A] mt-5 text-l leading-[120%] font-bold">{post?.title}</h1>
        <h3 className="hidden sm:block">{post?.subtitle}</h3>
        <p className='text-sm pb-3 font-extrabold text-[#2F1C6A]'>{post?.date}</p>
        </div>
        </Link>
        </div>
        
      ))}
     
    </div>
    </div>
  )
}

export default related