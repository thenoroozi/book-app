import React, { useState } from 'react';
import { books } from '../constants/mockData'
import BookCard from './BookCard';


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
      <div>
         <div>
            {books.map(book => (
               <BookCard key={book.id} data={book} handleLileList={handleLileList} />
            ))}
         </div>
         <div>
            {!!liked.length &&
               liked.map(book => (
                  <div>{book.title}</div>
               ))
            }
         </div>
      </div>
   );
}

export default Books;