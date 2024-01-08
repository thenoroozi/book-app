
function Layout({children}) {
   return (
      <>
        <header className="py-4 px-5 mb-20 rounded-lg flex items-center justify-between bg-white shadow-md">
         <h1 className="text-2xl text-blue-600 font-bold">Book Shop</h1>
         <p className="flex items-center"><a href="https://github.com/thenoroozi"
         className="mr-1 bg-blue-200 hover:bg-blue-600 text-blue-800 hover:text-blue-200 px-2 rounded">Thenoroozi</a> | React and Tailwind Practice</p>
         </header> 
        {children}
        <footer className="text-center text-gray-400 bg-gray-800 rounded-md p-3 mt-20  bottom-0" >
         <p>Developed by 
            <a href="https://github.com/thenoroozi"
            className="ml-1 px-1 rounded bg-gray-200 hover:bg-gray-600 text-black hover:text-white">Hamed Noroozi</a></p>
        </footer>
      </>
   );
}

export default Layout;