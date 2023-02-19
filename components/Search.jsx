import React from 'react'
import { useState , useEffect } from 'react';

import Router from 'next/router'

export const Search = () => {

const [searchInput, setSearchInput] = useState("");

    function handleSearch(e) {
        // here you can get the inputValue
         e.preventDefault();
         //window.history.pushState({}, "", href)
         //console.log(filtered);
         
         //const loc = "/SearchResults/" + searchInput;
         //window.history.replaceState("", "", loc);
         //window.location.href = loc;

         //return filtered;
         if (searchInput === "") {
            return;
          }
         Router.push({
          pathname: '/SearchResults/[keyword]',
          query: { "keyword": searchInput },
      })
}



  return (
    
    <div> 

<form  className=' absolute top-7 left-1/3 lg:w-1/3 hidden lg:inline md:w-1/2 sm:w-1/2'>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        
        <input  
                onChange={(e) => { setSearchInput(e.target.value);}}
                type="search" 
                style={{outline: "none"}} 
                autoComplete="off" 
                id="default-search" 
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500  " 
                placeholder="Search Here..." required/>
        <button type="submit"  onClick={handleSearch} className="text-white absolute right-2.5 bottom-2.5 bg-pink-400 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2  ">Search here</button>
        
    </div>
    
</form>


<form className=' lg:hidden md:w-full '>
               
               <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
               <div className="relative">
                   <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                       <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                   </div>
                   <input
                    onChange={(e) => { setSearchInput(e.target.value);}}
                    type="search" 
                    style={{outline: "none"}} 
                    autoComplete="off" 
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 " placeholder="Search " required/>
                   <button type="submit" onClick={handleSearch} className="text-white absolute right-2.5 bottom-2.5 bg-pink-400 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
               </div>
</form>
</div>

  )
}

export default Search
