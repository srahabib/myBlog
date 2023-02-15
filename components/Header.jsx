import React, {useState , useEffect } from 'react'
import Link from 'next/link'
//import { getCategories } from '../services'
import { getPosts } from '../services'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Search } from '../components';
import { redirect } from "react-router-dom";


const Header = () => {

    const [Posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then((result) => {
            setPosts(result)
        })

    }, []);
    const [searchInput, setSearchInput] = useState("");

  


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

}


    
  return (
    <div className="container mx-auto px-10 mb-8">
        <div className='border-b w-full inline-block py-8'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span  className='cursor-pointer font-bold text-4xl text-white'>
                        Blog Name
                    </span>
                </Link>
                   
            </div>
            

            <div className='hidden md:float-left md:contents'>
                
            <Link href="/Contact/ContactMe">
                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                Contact
                </span>
            </Link>

            <Link  href="/About/AboutMe">
                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                About
                </span>
            </Link>

            <Link href="/SearchResults/res">
                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                Blog
                </span>
            </Link>


            <Link href="/">
                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                Home
                </span>
            </Link>


            </div>

        </div>



       



        
                
                 {/* <div>
                    <div style={{color:"red"}}>Post</div>
                    <div style={{color:"red"}}>Created@</div>
                </div> */}


             {/* {
                filtered.map((post, index) => (
                    <div className="box" key={index}>
                    <p style={{color :"red"}}>{post.node.title}
                    </p>
                    </div>))
            }  */}

            


        <form className=' lg:hidden md:w-full '>
               
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" style={{outline: "none"}} autoComplete="off" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 " placeholder="Search " required/>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-pink-400 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
        </form>



    </div>
  );
}

export default Header