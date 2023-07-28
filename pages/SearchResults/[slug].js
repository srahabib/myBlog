import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getPosts } from '../../services';
import Link from 'next/link';
import moment from 'moment';

export default ({ posts }) => {
  const router = useRouter();
  const val = router.query.slug;

  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((result) => {
      setPosts(result);
    });
  }, []);

  const filtered = Posts.filter((post) => {
    const found = post.node.title.toLowerCase().includes(val.toLowerCase());
    if (val === '') {
      return post;
    } else if (found) {
      return found;
    }
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10">
      {filtered.map((post, index) => (
        <div key={index} className="flex flex-col rounded overflow-hidden shadow-lg bg-white">
          <Link href={`/post/${post.node.slug}`}>
            <a>
              <img className="w-full h-56 object-cover" src={post.node.featuredImage.url} alt="Sunset in the mountains" />
            </a>
          </Link>
          <div className="px-6 py-4 flex-grow">
            <h1 className="transition duration-700 text-center mb-3 cursor-pointer hover:text-pink-400 text-xl font-semibold">
              <Link href={`/post/${post.node.slug}`}>{post.node.title}</Link>
            </h1>
            <div className="font-medium text-gray-700 text-center mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle">{moment(post.node.createdAt).format('MMM DD, YYYY')}</span>
          </div>
            
            <p className="text-gray-700 text-base flex-grow pb-10">{post.node.excerpt}</p>
          </div>
          {/* <div className="px-6 pt-2 pb-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">yooooo</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">winter</span>
          </div> */}
        </div>
      ))}
    </div>
  );
};

