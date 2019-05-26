import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPostContext } from '../redux/actions';

import handleContext from '../logic/handleContext';

import Tags from './Tags';

const mapStateToProps = (state, ownProps) => {
  const { post } = ownProps;
  return post;
};

const mapDispatchToProps = {
  setPostContext
}

const fetch = post => {
  // const fileName = this.props.location.pathname.replace(/\/post\/(.+)/, '$1');
  const path = require( `../contents/${post.path}`);
  fetch(path)
    .then(data => {
      return data.text();
    }).then(text => {
      const context = handleContext(text);        
      const title = RegExp(/title:\s"(.+)"/).exec(text)[1];
      const date = RegExp(/date:\s(.+)/).exec(text)[1];
      const tags = (RegExp(/tags:\s(.+)/).exec(text)) ? RegExp(/tags:\s(.+)/).exec(text)[1].split(/,\s*/) : [];
      // this.setState({context, title, date, tags });
    });
}

const PostLink = ({ post, setPostContext }) => {
  const path = '/post/'+post.path.replace(/(.+)\.md/, '$1');
  return (
    <div className="postlink">
      <Link 
        to={path}
      ><h2>{post.title}</h2></Link>
      <div className="postmeta">
        <h4 className="date">{post.date}</h4>
        <Tags tags={post.tags}/>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostLink);