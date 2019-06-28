import React from 'react'
import { Link, Route } from 'react-router-dom';
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
  const title = BLOG_NAME;
  return (
    <header>
      <Link 
        to="/" 
        onClick={() => setPostFilter({type: POST_FILTER_TYPES.CATEGORY, context: CATEGORIES.ALL})} 
      >
        <h1>{title}</h1>
      </Link>
      <CategoryFilter />
    </header>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);