import React from 'react'
import { useState , useEffect } from 'react';
import { getPosts } from '../services';

import Searched from './Searched';

import { useHistory } from 'react-router';


export const Search = () => {

  const arr = ['A', 'B', 'C', 'D'];

  const [Posts, setPosts] = useState([])
  
    useEffect(() => {
        getPosts().then((result) => {
            setPosts(result)
        })

    }, []);

  const [searchInput, setSearchInput] = useState("");
  //const [searchResults, setSearchResults] = useState([]);

  

  const filtered = Posts.filter(post => {
    if (searchInput === "") {
    //if query is empty
    return post;
    } else if (post.node.title.toLowerCase().includes(searchInput.toLowerCase())) {
    //console.log(searchInput);
    //returns filtered array
    // console.log(post.node.title);
    // console.log(post);
    return post.node.title.toLowerCase().includes(searchInput.toLowerCase())
    }
});



    function handleSearch(e) {
        // here you can get the inputValue
         e.preventDefault();
         //window.history.pushState({}, "", href)
         console.log(filtered);
         const loc = "/SearchResults/" + searchInput;
         //window.history.replaceState("", "", loc);
         window.location.href = loc;

}

//searchResults = filtered;

  return (
    
    <div> 
      
      <div>
      <Searched filtered={filtered} />
      </div>

<form className=' absolute top-7 left-1/3 lg:w-1/3 hidden lg:inline md:w-1/2 sm:w-1/2'>   
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
      
            {/* {
                filtered.map((post, index) => (
                    <div className="box" key={index}>
                    <p style={{color :"red"}}>{post.node.title}
                    </p>
                    </div>))
            } */}

            


</div>

  )
}

export default Search
