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
                
            <Link href="/Contact/ContactMe" >
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

        <Search />


    </div>
  );
}

export default Header