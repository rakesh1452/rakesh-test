"use client"
import React, { useEffect, useState } from 'react'

function DynamicRouting({params}) {
  const {id} = params;
    const [users, setUsers] = useState([])
  
    async function getData (){
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      console.log(data)
  
      setUsers(data)
  
    }
  
    useEffect(()=>{
      getData()
    },[])
  return (
    <div>
        
    </div>
  )
}

export default DynamicRouting