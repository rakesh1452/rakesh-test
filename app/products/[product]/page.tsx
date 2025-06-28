import React from 'react';
import Image from 'next/image';

export default async function Product({ params }: { params: { product: string } }) {
  const response = await fetch(`https://dummyjson.com/products/${params.product}`);
  const data = await response.json();

  return (
    <div className='container mx-auto p-6'>
      <div className='flex flex-col md:flex-row gap-10'>
        <Image src={data.thumbnail} width={500} height={500} alt='product' className='rounded' />
        <div>
          <h2 className='font-bold text-2xl mb-2'>{data.title}</h2>
          <p className='mb-2'>{data.description}</p>
          <p className='mb-1'>Brand: <strong>{data.brand}</strong></p>
          <p className='mb-1'>Category: <strong>{data.category}</strong></p>
          <p className='mb-1'>Price: <strong>${data.price}</strong></p>
          <p>
              Rating:
                <strong className='text-orange-400'>
                  {"★".repeat(Math.floor(data.rating))} {"☆".repeat(5 - Math.floor(data.rating))}
                </strong>
              <span className="ml-2 text-gray-600">({data.rating})</span>
            </p>
        </div>
      </div>
    </div>
  );
}
