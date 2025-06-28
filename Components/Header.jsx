'use client'; // ✅ Required if using interactivity like hover menu

import Link from 'next/link';
import React from 'react';

export const Header = (props) => {
  return (
    <div className="h-14 bg-green-300 flex justify-between px-3 items-center relative z-50">
      <Link href="/">
        <h2 className="text-2xl">{props.logo}</h2>
      </Link>

      <nav>
        <ul className="flex flex-wrap gap-5 items-center relative">
          <li><Link href="/about" className='cursor-pointer hover:text-blue-700'>About</Link></li>
         
          <li className="relative group">
            <Link href="/blog" className="cursor-pointer hover:text-blue-700">
              Blog
            </Link>
            <ul className="absolute hidden group-hover:block bg-white rounded-md shadow-md p-1 min-w-36 text-black">
              <li className="hover:bg-gray-100 px-3 py-1">
                <Link href="/blog/blog1">blog 1</Link>
              </li>
              <li className="hover:bg-gray-100 px-3 py-1">
                <Link href="/blog/blog2">blog 2</Link>
              </li>
            </ul>
          </li>

          <li><Link href="/courses">Courses</Link></li>
          <li>
              <Link href="/products" className="cursor-pointer hover:text-blue-700">Products</Link>             
            </li>
          <li><Link href="/contact" className='cursor-pointer hover:text-blue-700'>Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
};
