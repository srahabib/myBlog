import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import filtered from '../../components/Search'
import {useRouter} from 'next/router';
import { getPosts } from '../../services';


export default  ({posts}) => {

  const router = useRouter()
  //console.log(router.query);
  const val = router.query.slug

     const [Posts, setPosts] = useState([])
  
     useEffect(() => {
         getPosts().then((result) => {
             setPosts(result)
         })

     }, []);

  const filtered = Posts.filter(post => {
    const found = post.node.title.toLowerCase().includes(val.toLowerCase())
         if (val === "") {
         return post;
         } else if (found) {
         return found;
         }
     });

  return (
    <div className='flex flex-wrap gap-1'> 
     
      
     {filtered.map((post, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-5">
                <img className="w-full" src={post.node.featuredImage.url}alt="Sunset in the mountains"/>
                <div className="px-6 py-4">

                    <div className="font-bold text-xl mb-2">{post.node.title}</div>
                    
                    <p className="text-gray-700 text-base">
                    {post.node.excerpt}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{post.node.createdAt}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">yooooo</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
        </div>))
    }
</div>
  )
}
