import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setPostFilter } from '../redux/actions';
import { POST_FILTER_TYPES, CATEGORIES, CATEGORY_NAMES } from '../constants';

import '../style/CategoryFilter.css';

const mapStateToProps = state => {
  const { postFilter } = state;    
  return { postFilter };
}
const mapDispatchToProps = {
  setPostFilter
}

const CategoryFilter = ({ postFilter, setPostFilter }) => {
  const node = Object.keys(CATEGORIES).map((category, i) => {
    const thisCategory = CATEGORIES[category];
    const path = (thisCategory==='all') ? '/' : `/category/${thisCategory}`
    return (
      <Link 
        to={path} 
        key={`cat-${i}`}         
      >
        <h3
          className={(thisCategory===postFilter.context) ? 'current category' : 'category'}
          onClick={() => setPostFilter({type: POST_FILTER_TYPES.CATEGORY, context: thisCategory})}
        >
          {CATEGORY_NAMES[category].toUpperCase()}
        </h3> 
      </Link>      
    )
  })

  return (
    <div className="categoryFilter">
      {node}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
