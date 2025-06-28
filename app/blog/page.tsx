"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Blog() {
    const [posts, setProducts] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState(12);

  useEffect(()=>{
     async function fetchData (){
       let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await res.json();
        setProducts(data)
        console.log(data)    
    }   
    fetchData()
    
  },[]);

  return (
    <div className='container mx-auto'>
        <h1 className='text-center font-bold text-2xl my-5'>Our Blog</h1>
      
        <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-6'>       
            {
                posts.map((item,id)=>(
                    <li key={item.id} className='border rounded p-3 shadow hover:shadow-lg'>
                        <Link href={`/blog/${item.id}`} className='text-blue-600 font-black pb-3 block'>{item.title}</Link>
                        <p>{item.body}</p>
                    </li>
                ))
            }
         </ul>         
        
    </div>
  )
}

