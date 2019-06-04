import React from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { CATEGORIES, POST_FILTER_TYPES } from '../constants';
import { setPostFilter } from '../redux/actions';
import PostLink from './PostLink';

const mapStateToProps = (state, ownProps) => {
  const { postFilter, posts } = state;
  const { location } = ownProps;
  return { posts, postFilter, location };
};
const mapDispatchToProps = {
  setPostFilter
};

const filterPost = (posts, postFilter) => {
  switch(postFilter.type){
    case POST_FILTER_TYPES.CATEGORY:
      if(postFilter.context === CATEGORIES.ALL) return posts[CATEGORIES.ALL];    
      else{
        return posts.all.filter((post) => {
          return post.category === postFilter.context;    
        })
      }
    case POST_FILTER_TYPES.TAG:
      return posts.all.filter((post) => {        
        return post.tags.includes(postFilter.context);    
      })
    default:
      return null;
  }
}

const TagFilterResult = props => {
  return (
    <h2 className="tagFilterResult">{`"${props.tag}"`}</h2>
  );
}

const PostList = ({ posts, postFilter, location, setPostFilter }) => {
  const currPath = location.pathname;
  const filterType = currPath.replace(/\/(\w+)\/\w+/, '$1');
  const filterContext = currPath.replace(/\/\w+\/(\w+)/, '$1');
  if(filterType===POST_FILTER_TYPES.CATEGORY && postFilter.context!==filterContext){    
    setPostFilter({type: filterType, context: filterContext});
  }
  
  const node = filterPost(posts, postFilter).map((post, i) => {
    return <PostLink key={`post-${i}`} post={post} />;    
  });

  return (
    <div className="postlist">
      <Route path="/tag" render={props => (
        <TagFilterResult tag={postFilter.context} />
      )}/>
      {node}
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);