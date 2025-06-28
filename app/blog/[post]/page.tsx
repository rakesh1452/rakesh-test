import React from 'react'

export default async function page({params}:{params:{post:string}}) {
   let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.post}`);
   let data = await res.json();
  return (
    <div className='container mx-auto my-6'>      
        <h1 className='text-2xl font-bold'>{data.title}</h1>
        <p>{data.body}</p>
    </div>
  )
}
