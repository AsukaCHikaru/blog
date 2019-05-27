import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPostFilter } from '../redux/actions';
import { BLOG_NAME, CATEGORIES, POST_FILTER_TYPES } from '../constants';

import CategoryFilter from './CategoryFilter';

const mapDispatchToProps = {
  setPostFilter
}

const Header = ({ setPostFilter }) => {
  return (
    <header>
      <Link 
        to="/" 
        onClick={() => setPostFilter({type: POST_FILTER_TYPES.CATEGORY, context: CATEGORIES.ALL})} 
      >
        <h1 >{BLOG_NAME}</h1>
      </Link>
      <CategoryFilter />
    </header>
  )
};

export default connect(null, mapDispatchToProps)(Header);