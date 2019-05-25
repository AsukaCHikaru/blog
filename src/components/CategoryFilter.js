import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCategory } from '../redux/actions';
import { CATEGORIES, CATEGORY_NAMES } from '../constants';

import '../style/CategoryFilter.css';

const mapStateToProps = state => {
  const { category } = state;    
  return { category };
}
const mapDispatchToProps = {
  setCategory
}

const CategoryFilter = ({ category, setCategory }) => {
  const node = Object.keys(CATEGORIES).map((ele, i) => {
    const thisCategory = CATEGORIES[ele];
    const path = (thisCategory==='all') ? '/' : `/category/${thisCategory}`
    return (
      <Link 
        to={path} 
        key={`cat-${i}`}         
      >
        <h3
          className={(thisCategory===category) ? 'current category' : 'category'}
          onClick={() => setCategory(thisCategory)}
        >
          {CATEGORY_NAMES[ele].toUpperCase()}
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
