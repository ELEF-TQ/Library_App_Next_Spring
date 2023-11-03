'use client'

import React, { useEffect } from 'react';
import Card from '@/components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '@/context/features/BookSlice';
import { RootState } from '@/context/store'; 



const Main: React.FC = () => {
  const books = useSelector((state: RootState) => state.Book.books); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks() as any);
  }, [dispatch]);

console.log(books)
  return (
    <div className="flex justify-around align-middle gap-4 p-10 flex-wrap">
      {books.map((item: any) => (
        <Card key={item.id} id={item.id} title={item.title} image={item.image} genre={item.genre} price={item.price} year={item.year}/>
      ))}
    </div>
  );
};

export default Main;