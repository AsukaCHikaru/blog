import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setPostFilter } from '../redux/actions';
import { POST_FILTER_TYPES } from '../constants';

const mapStateToProps = (state, ownProps) => {
  const { postFilter } = state;    
  const { tags } = ownProps;
  return { tags, postFilter };
}

const mapDispatchToProps = {
  setPostFilter
}

const Tags = ({ tags, setPostFilter}) => {
  const node = tags.map((tag, i) => {
    const path = `/tag/${tag.toLowerCase()}`
    return (
      <Link 
        to={path} 
        key={`tag-${i}`}
        onClick={() => setPostFilter({type: POST_FILTER_TYPES.TAG, context: tag})}
        >
        <span 
        >#{tag}</span>
      </Link>
    )
  });
  return (
    <div className="tags">
      {node}
    </div>
  );
}

Tags.defaultProps = {
  tags: [],
}


export default connect(mapStateToProps, mapDispatchToProps)(Tags);