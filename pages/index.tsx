import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import React from 'react';

export default function Home({ posts }: any) {
  const sortedPosts = [...posts].reverse().slice(0, 5); // Reverse the order and get only the first two posts

  return (
    <div>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {sortedPosts.map((post: any, index: any) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
