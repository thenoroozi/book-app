import React, { useState } from 'react';
import { books } from '../constants/mockData'
import BookCard from './BookCard';
import SideCard from './SideCard';


function Books() {
   const [liked, setLiked] = useState([])

   const handleLileList = (book, status) => {
      if (status) {
         const newLikedList = liked.filter(i => i.id !== book.id)
         setLiked(newLikedList)
      } else {
         setLiked(liked => [...liked, book])
      }
   }
   return (
      <div className={`${liked.length ? 'flex' : 'flex-col'} items-start justify-between gap-4`}>
         <div className={`${liked.length ? "w-2/3" : "w-full"}`}>
            {books.map(book => (
               <BookCard key={book.id} data={book} handleLileList={handleLileList} />
            ))}
         </div>
         <div className='w-1/3 p-2 bg-blue-400 rounded-lg shadow'>
            <h1 className='my-1 text-lg text-center font-bold'>Favorites</h1>
            {!!liked.length &&
               <div className='space-y-1'>
                  {liked.map(book => (
                     <SideCard key={book.id} data={book} />
                  ))}
               </div>
            }
         </div>
      </div>
   );
}

export default Books;