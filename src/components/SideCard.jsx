import React from 'react';

function SideCard({ data: { title, image } }) {
   return (
      <div className='p-1 flex items-center justify-start bg-blue-300 rounded-md'>
         <img src={image} alt={title} className='mr-2 w-10 rounded ' />
         <h1 className='font-semibold'>{title}</h1>
      </div>
   );
}

export default SideCard;