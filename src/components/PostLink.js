import React from 'react'
import { Link } from 'react-router-dom';
// import { setPostContext } from '../redux/actions';

import Tags from './Tags';

const PostLink = props => {
  const path = '/post/'+props.post.path.replace(/(.+)\.md/, '$1');
  return (
    <div className="postlink">
      <Link to={path}><h2>{props.post.title}</h2></Link>
      <div className="postmeta">
        <h4 className="date">{props.post.date}</h4>
        <Tags tags={props.post.tags}/>
      </div>
    </div>
  )
}

export default PostLink;