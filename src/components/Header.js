import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPostFilter } from '../redux/actions';
import { BLOG_NAME, CATEGORIES, POST_FILTER_TYPES, CATEGORY_NAMES } from '../constants';

import CategoryFilter from './CategoryFilter';

const mapStateToProps = state => {
  const { postFilter } = state;
  return { postFilter };
}

const mapDispatchToProps = {
  setPostFilter
}

const Header = ({ postFilter, setPostFilter }) => {
  const title = (
    postFilter.type === POST_FILTER_TYPES.TAG ||
    postFilter.type===POST_FILTER_TYPES.CATEGORY && postFilter.context===CATEGORIES.ALL) ?
    BLOG_NAME :
    CATEGORY_NAMES[postFilter.context.toUpperCase()]+'.'
  ;
  return (
    <header>
      <Link 
        to="/" 
        onClick={() => setPostFilter({type: POST_FILTER_TYPES.CATEGORY, context: CATEGORIES.ALL})} 
      >
        <h1 >{title}</h1>
      </Link>
      <CategoryFilter />
    </header>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);