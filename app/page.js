"use client"; // ✅ Mark as client component
import React, { useContext } from 'react';
import Gallery from './gallery/page';
import { MyContext } from '@/Helper/Context';

function Page() {
  const user = useContext(MyContext);
  console.log(user);

  return (
    <div className='mx-auto container'>
      <h1>{user}</h1>
      <Gallery />

      
    </div>
  );
}

export default Page;
