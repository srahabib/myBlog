import React, {useState , useEffect } from 'react'
import Link from 'next/link'
//import { getCategories } from '../services'
import { getPosts } from '../services'


const Header = () => {

    const [Posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then((result) => {
            setPosts(result)
        })

    }, []);


    //  const [Categories , setCategories] = useState([])
    //  useEffect(() => {
    //      getCategories().then((result) => {
    //          setCategories(result)
    //      })
    //  }, []);

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        //console.log(e.target.value);
      };
      
      if (searchInput.length > 0) {
          Posts.filter((inp) => {
          console.log(inp.node.title.match(searchInput));
          return inp.node.title.match(searchInput);
          
      });
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
                
            <Link href="/">
                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                Contact
                </span>
            </Link>

            <Link  href="/About/AboutMe">
                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                About
                </span>
            </Link>

            <Link href="/">
                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                Shop
                </span>
            </Link>


            <Link href="/">
                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                Home
                </span>
            </Link>


            </div>

        </div>

        <form className=' absolute top-7 left-1/3 lg:w-1/3 hidden lg:inline md:w-1/2 sm:w-1/2'>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>

                <input  onChange={handleChange}
                        value={searchInput} 
                        type="search" 
                        style={{outline: "none"}} 
                        autoComplete="off" 
                        id="default-search" 
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500  " 
                        placeholder="Search Here..." required/>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-pink-400 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2  ">Search</button>
            </div>
        </form>

                <div>
                    <div style={{color:"red"}}>Country</div>
                    <div style={{color:"red"}}>Continent</div>
                </div>

                {/* {Posts.map((inp, index) => {
                    <div  style={{color:"red"}} >
                        hhiiiiiiii
                    </div>


                })} */}

                {Posts.map((inp, index) => (
                    
                    <div style={{color:"red"}} key={index} >{inp.node.title}</div>
                        
                ))}


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
