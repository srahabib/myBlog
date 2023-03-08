import React, {useState , useEffect } from 'react'
import Link from 'next/link'
//import { getCategories } from '../services'
import { getPosts } from '../services'
import { Search } from '../components';


const Header = () => {
    

    const showNav = () => {
        const nav = document.getElementById('navbar-solid-bg')
        nav.classList.toggle('hidden')
        
    }

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




    
  return (
    <div className="container mx-auto px-10 mb-8 bg-pink-300">
        <div className='border-b w-full inline-block py-1'>
            <div className='md:float-left inline flex flex-wrap items-center justify-between '>
                <div>
                <img src="/bunny.png" className='w-20 h-20 inline' alt=""/>

                <Link href="/">
                 <span  className='cursor-pointer font-bold text-xl text-white'>
                    Blog Name
                </span> 
                </Link>
                </div>
                
                <button onClick={showNav} data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex justify-self-end  place-items-end content-end p-2 ml-3 text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2  text-white focus:ring-gray-100" aria-controls="navbar-solid-bg" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                   
            </div>

                
            <div className='hidden flex flex-col-reverse w-full md:block md:w-auto' id="navbar-solid-bg">
                
            <Link href="/Contact" >
                <span className='block py-2 pl-3 text-center pr-4 flex-center md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                Contact
                </span>
            </Link>

            <Link  href="/About">
                <span className=' block py-2 pl-3 pr-4 text-center  md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                About
                </span>
            </Link>

            <Link href="/Blog">
                <span className=' block  py-2 pl-3 pr-4 text-center  md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                Blog
                </span>
            </Link>


            <Link href="/">
                <span className=' block  py-2 pl-3 pr-4 text-center rounded md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
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