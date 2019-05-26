import React from 'react'
import { Link } from 'react-router-dom';

import Tags from './Tags';

const PostLink = ({ post, setPostContext }) => {
  const path = '/post/'+post.path.replace(/(.+)\/(.+)/, '$1');
  return (
    <div className="postlink">
      <Link 
        to={path}
      ><h2>{post.title}</h2></Link>
      <div className="postmeta">
        <h4 className="date">{post.date}</h4>
        <Tags tags={post.tags}/>
      </div>
    </div>
  )
}

export default PostLink;