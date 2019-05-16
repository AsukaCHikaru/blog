import React from 'react'
import { Link } from 'react-router-dom';

import '../style/PostLink.css';

const PostLink = props => {
  const path = '/post/'+props.post.path.replace(/(.+)\.md/, '$1');
  return (
    <div className="postlink">
      <Link to={path}><h2>{props.post.title}</h2></Link>
      <h4>{props.post.date}</h4>
    </div>
  )
}

export default PostLink;