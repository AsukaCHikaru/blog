import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { connect } from "react-redux";

import Header from './Header';
import PostList from './PostList';
import PostContext from './PostContext';
import Footer from './Footer';

import { importPostData, setPostFilter } from "../redux/actions";

import '../style/App.css';

const mapDispatchToProps = {
  importPostData,
  setPostFilter
};

class App extends Component {

  componentWillMount(){
    this.props.importPostData();
    // this.props.setPostFilter({type: 'category', context: 'gaming' })
  }

  render(){
    return (
      <div className="app">
        <Route path="/(category|tag|)/" component={Header}/>
        <Route path="/(category|tag|)/" component={PostList} />
        <Route strict path="/post/" component={PostContext} />
        <Footer />
      </div>
    )  
  }
}

export default connect(null, mapDispatchToProps)(App);