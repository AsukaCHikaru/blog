import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCategory } from '../redux/actions';

import { BLOG_NAME, CATEGORIES } from '../constants';

import '../style/Header.css';

const mapDispatchToProps = {
  setCategory
}

const Header = ({ setCategory }) => {
  return (
    <header>
      <Link to="/" onClick={() => setCategory(CATEGORIES.ALL)}>
        <h1>{BLOG_NAME}</h1>
      </Link>
    </header>
  )
};

export default connect(null, mapDispatchToProps)(Header);