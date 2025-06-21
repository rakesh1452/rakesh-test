"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Sevices() {

  const [users, setUsers] = useState([])

  async function getData (){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response.data)
    let data = await response.json();
    console.log(data)

    setUsers(data)

  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className='text-center'>
      <button className='font-bold mx-auto m-5 text-2xl text-red-400 bg-yellow-300 rounded-3xl p-4 ' onClick={getData}>Get Data</button>

      <ul>
         {
        users.map((user,index)=>(
          <li key={index}>
             <Link href={`/${user.id}`}>{user.name}</Link>
          </li>
        ))
      }
      </ul>

     
    </div>
  )
}

export default Sevices