import React from 'react'
import { connect } from 'react-redux';

import { CATEGORIES } from '../constants';
import PostLink from './PostLink';

const mapStateToProps = state => {
  const { category, posts } = state;
  return { posts, category };
}

const filterPost = (posts, category) => {
  if(category === CATEGORIES.ALL) return posts[category];
  return posts.all.filter((post) => {
    return post.category === category    
  })
}

const PostList = ({ posts, category }) => {    
  const node = filterPost(posts, category).map((post, i) => {
    return <PostLink key={`post-${i}`} post={post} />;    
  });

  return (
    <div className="postlist">
      {node}
    </div>
  )
};

export default connect(mapStateToProps)(PostList);