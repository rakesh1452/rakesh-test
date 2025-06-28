"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

function Contact() {
  const  [posts, setPosts] = useState([]);
  const [allPost, setAllPost] = useState(8);
  const [loading, setLoading] = useState(false);

 async function getPosts(){
  setLoading(true)
   try {
     let response = await fetch("https://www.course-api.com/react-tours-project");
    let deta = await response.json();
    setPosts(deta);
    console.log(deta)
   } catch (error) {
     console.log("Not found")
   }   
   finally{
    setLoading(false)
   }
  }



  const loadMore =()=>{
    setAllPost(prev => prev + 8)
  }

  useEffect(()=>{
     getPosts()
  },[])
  return (
    <div className='container mx-auto'>
        <h1 className='text-5xl text-center m-4'>Getting Post</h1>
         {
            loading && (
              <div className="text-center my-4">
                <div className="loader inline-block w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
                <p>Loading...</p>
            </div>
            )
          }

          <div className='grid grid-cols-1 md:grid-cols-4 gap-2 mt-6'>         
              {
                  posts.slice(0, allPost) .map((post, index)=>(
                    <div key={post.id} className='bg-pink-200 p-4 shadow rounded-3xl'>
                        <h1 className='text-2xl font-bold mb-2'>{post.name}</h1>
                        <Image src={post.image} width={400} height={400} alt='{post.name}' loading='lazy' />
                        <p> <strong>views:</strong> {post.info}</p>
                    </div>
                  ))
                } 
          </div>

        {
          allPost < posts.length && (
             <div className='text-center m-4'>
           <button 
              className='bg-blue-600 hover:bg-blue-800 text-white rounded-full px-6 py-2 text-lg'
              onClick={loadMore}
            >
              Load More
           </button>
        </div>
          )
        }
       
    </div>
  )
}

export default Contact