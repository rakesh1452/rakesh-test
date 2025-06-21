"use client";
import React, { useState, useEffect } from 'react';

function Page() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

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


  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Gallery</h1>

      <div className='text-center my-4'>
        <button
          onClick={getImages}
          className='bg-orange-400 text-white font-medium p-2 px-3 rounded-2xl hover:bg-orange-500 transition'
        >
          See Gallery
        </button>
      </div>

      {/* ✅ Loader */}
      {loading && (
        <div className="text-center my-4">
          <div className="loader inline-block w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
          <p>Loading...</p>
        </div>
      )}

      {/* ✅ Images */}
      <div className='text-center'>
        {images.map((image, index) => (
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
    </div>
  );
}

export default Page;
