"use client";
import {useState } from 'react';
import Gallery from './gallery/page';

function Page() {

  const [show, setShow] = useState(false)

  return (
    <div className='mx-auto container'>   
      <h1 className='text-green-500 text-3xl text-center'>Shree Ganesha Namah:</h1>
    {
      show ? <h2>Dikh raha hai</h2> : <h2>Nahi Dikh raha</h2>
    }

        <button className='bg-blue-500 px-4 p-2' onClick={()=>setShow(!show)}>Check</button>

      <Gallery />
  
      

    </div>
  );
}

export default Page;
