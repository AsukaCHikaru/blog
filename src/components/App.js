import React from 'react'
import { Route } from 'react-router-dom';

import Header from './Header';
import CategoryFilter from './CategoryFilter';
import PostList from './PostList';
import PostContext from './PostContext';
import Footer from './Footer';

import '../style/App.css';

export default function App() {
  
  
  return (
    <div className="app">
      <Route path="/(category|)" component={Header}/>
      <Route path="/(category|)" component={CategoryFilter}/>
      <Route path="/(category|)" component={PostList} />
      <Route strict path="/post/" component={PostContext} />
      <Footer />
    </div>
  )
  
}
