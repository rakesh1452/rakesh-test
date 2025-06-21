"use client"
import React, { useEffect, useState } from 'react'

function contact() {

  const [images, setimages] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

 async function myGallery (){
   try {
     let response = await fetch("https://picsum.photos/v2/list");
    let data = await response.json();

    console.log(data);
    setimages(data)   
   } catch (error) {
    console.log("Not Found");
   }
    
  }

  useEffect(()=>{
    myGallery()
  },[]);

 const loadMore = () => {
  setVisibleCount(prev => prev + 8);
};

  return (
    <div>
      <h1 className='text-center text-3xl font-bold my-5'>This is my contact Page</h1>     
      <div className='flex gap-2 flex-wrap justify-center'>     
        {
          images.slice(0, visibleCount).map((image,index)=>(
            <img className='inline-block rounded-3xl p-2 shadow-md' key={index} src={image.download_url} width={400} height={400} alt={image.author}/>
          ))
        }
       </div>
        {
          visibleCount < images.length && (
               <div className='text-center my-6'>
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

export default contact