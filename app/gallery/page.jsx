"use client";
import React, { useState, useEffect } from 'react';

function Page() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleImage, setVisibleImage] = useState(6)

  async function getImages() {
    try {
      setLoading(true); // ✅ Show loader
      const response = await fetch("https://picsum.photos/v2/list");
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.log("Image not found");
    } finally {
      setLoading(false); // ✅ Hide loader
    }
  }

  useEffect(()=>{
      getImages();
  },[])

  const loadMore = ()=> {
   setVisibleImage(prev => prev + 6);
  }


  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Gallery</h1>     

      {/* ✅ Loader */}
      {loading && (
        <div className="text-center my-4">
          <div className="loader inline-block w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
          <p>Loading...</p>
        </div>
      )}

      {/* ✅ Images */}
      <div className='text-center'>
        {images.slice(0, visibleImage).map((image, index) => (
          <img
            className='inline-block p-2'
            key={image.id || index}
            src={image.download_url}
            alt={image.author}
            width={400}
            height={400}
          />
        ))}
      </div>

     {
      visibleImage < images.length && (
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

export default Page;
