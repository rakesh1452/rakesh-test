import Link from 'next/link'
import React from 'react'

export const Header = (props) => {
  return (
    <div className='h-14 bg-green-300 flex justify-between px-3 items-center'>
       <Link href="/"><h2 className='text-2xl'>{props.logo}</h2></Link>  
        <nav>           
          <ul className='flex flex-wrap gap-5'>           
            <li><Link href="/about">About</Link> </li>
            <li><Link href="/services">Services</Link></li>
             <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            
          </ul>
        </nav>
    </div>
  )
}

