
function SearchBox({search,setSearch,searchHandler}) {
  
   return (
      <div className="ml-1 mb-8 w-80 flex items-start justify-between">
         <input type="text" 
         placeholder="Search Title"
         value={search} 
         onChange={e => setSearch(e.target.value.toLowerCase())}
         className="w-72 px-2 py-1 rounded-md shadow-sm outline-none" />

         <button onClick={searchHandler}
            className="p-1 ml-2 bg-blue-600 rounded shadow hover:bg-blue-700 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
         </button>
      </div>
   );
}

export default SearchBox;