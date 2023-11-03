'use client'
import React from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { removeBook } from "@/context/features/BookSlice";
import Image from "next/image";
import defaultImage from '../../../public/images/1.svg'
interface CardProps {
  id: number;
  title: string;
  image: string;
  genre: string;
  price: number;
  year: number;
}

const Card: React.FC<CardProps> = ({ id, title, image, genre, price, year }) => {
  const dispatch = useDispatch();

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="/">
        <Image width={500} height={100} src={image ?  `data:image/jpeg;base64,${image}`: defaultImage} alt={title} />
      </Link>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <div className="flex items-center gap-40 justify-between">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{genre}</h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{year}</h5>
        </div>
        <span className="text-3xl font-bold text-gray-900 dark:text-white">{price} DH</span>
        <div className="flex items-center justify-between">
          <span onClick={() => {
            dispatch(removeBook(id) as any);
          }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none ">
            Delete
          </span>
          <Link href={`blog/${id}`} passHref>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none ">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
