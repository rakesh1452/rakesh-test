"use client"
import React from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';

function Toastify() {
    const myFunction = ()=> {
          toast.success('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
    }
  return (
    <div className='flex justify-center gap-2 m-4'>
        <h1 className='font-bold text-3xl m-4 text-center'> React Toastify ek Notification Jaisa Messaage Box hota hai</h1>
        <button className='bg-green-700 texxt-white font-bold rounded-3xl  px-5 items-center text-white' onClick={myFunction}>Message</button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
        />
    </div>
  )
}

export default Toastify