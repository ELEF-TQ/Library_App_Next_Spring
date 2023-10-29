'use client'

import Image from "next/image";
import Link from "next/link";


const Card = ({ id, title ,imageUrl ,genre,price,year }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="/">
        <Image className="rounded-t-lg" src={imageUrl} alt={title} />
      </Link>
      <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <div className="flex items-center gap-40 justify-between">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{genre}</h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{year}</h5>

          </div>
        <span class="text-3xl font-bold text-gray-900 dark:text-white">{price} DH</span>

        <div className="flex items-center justify-between">
        <Link href={`blog/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none ">
          Delete
        </Link>
        <Link href={`blog/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none ">
          Update
        </Link>



        </div>
       
      </div>
    </div>
  );
};

export default Card;

