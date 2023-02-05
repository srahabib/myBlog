import React, {useState , useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'




const Header = () => {
    const [Categories , setCategories] = useState([])
    useEffect(() => {
        getCategories().then((result) => {
            setCategories(result)
        })
    }, []);
    
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
                

                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                Contact
                </span>

            </div>

        </div>

        <form class='lg:w-1/3 md:w-1/2 sm:w-full'>   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500" placeholder="Search Here..." required/>
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Search</button>
            </div>
        </form>



    </div>
  );
}

export default Header
