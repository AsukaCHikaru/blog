import React from 'react'
import { Link } from 'react-router-dom';

const Tags = props => {
  const node = props.tags.map((tag, i) => {
    const path = `/tag/${tag.toLowerCase()}`
    return (
      <Link to={path} key={`tag-${i}`}>
        <span >#{tag}</span>
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


export default Tags