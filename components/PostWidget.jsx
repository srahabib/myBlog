import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories = [], slug = null }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  const reversedPosts = [...relatedPosts].reverse(); // Reverse the order of relatedPosts

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {reversedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              loader={grpahCMSImageLoader}
              unoptimized
              priority={true}
              alt={post.title}
              height="60"
              width="60"
              className="align-middle rounded"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4 mb-4">
          <Link href={`/post/${post.slug}`} className="text-md" key={index}>
              {post.title}
            </Link>
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>

          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;

