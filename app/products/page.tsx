"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type ProductType = {
  id: number;
  title: string;
  thumbnail: string;
};

function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [viewproduct, setviewProduct] = useState(8)
  const  [loading, setLoading] = useState(false)

  useEffect( ()=>{
      async function fethData() {
         try {
           setLoading(true)
          const response = await fetch("https://dummyjson.com/products");
          const data = await response.json();
          setProducts(data.products);
          console.log(data.products);
         } catch (error) {
          console.log("Not found")
         } finally{
          setLoading(false)
         }
      }

        fethData();
  },[])

  const loadMore = ()=> {
    setviewProduct(prev => prev + 8)
  }

   return (
    <div className="p-6 container mx-auto">
      <h1 className="text-4xl font-bold mb-9 text-center">Products</h1>
      {
        loading && (
          <div className="text-center my-4">
              <div className="loader inline-block w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
              <p>Loading....</p>
          </div>
        )
      }
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, viewproduct).map((product) => (
          <li  key={product.id} className="border rounded p-3 shadow hover:shadow-lg">
            <Link href={`/products/${product.id}`}>
              <div className="text-center">
               <Image
                src={product.thumbnail}
                alt={product.title}
                width={300}
                height={300}
                className="mx-auto"
              />
                <p className="mt-2 text-center"><span className="font-bold">{product.title}</span> ({product.brand})</p>
                <p>Price: <strong>{product.price}</strong> <del> {product.discountPercentage}</del></p>
                <button className="bg-blue-300 rounded-2xl p-2 px-4 hover:bg-black hover:text-white mt-3">
                  <Link href={`/product/${product.id}`}>View Detail</Link>
                </button>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      
       {
       viewproduct < products.length && (
            <div className="text-center mt-5">
              <button className='bg-blue-600 hover:bg-blue-800 text-white rounded-full px-6 py-2 text-lg' onClick={loadMore}>
                Load More
              </button>
            </div>
       )
       }
     
    </div>
  );
}

export default Products;
