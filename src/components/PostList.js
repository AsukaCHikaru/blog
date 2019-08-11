import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { CATEGORIES, POST_FILTER_TYPES } from "../constants";
import { setPostFilter } from "../redux/actions";
import PostLink from "./PostLink";

const mapStateToProps = (state, ownProps) => {
  const { postFilter, allPostData } = state;
  const { location } = ownProps;
  return { allPostData, postFilter, location };
};
const mapDispatchToProps = {
  setPostFilter
};


const TagFilterResult = props => {
  return <h2 className="tagFilterResult">{`"${props.tag}"`}</h2>;
};

class PostList extends Component {
  componentDidMount(){
    this.parsePathToPostFilter(this.props.location.pathname);
  }

  parsePathToPostFilter = (path) => {
    const filterType = path.replace(/\/(\w+)\/\w+/, "$1") === 'tag' ? 'tag' : 'category';
    const filterContext = path.replace(/\/\w+\/(\w+)/, "$1") === '/' ? 'all' : path.replace(/\/\w+\/(\w+)/, "$1");
    const filterNotSame = this.props.postFilter.type!==filterType || this.props.postFilter.context!==filterContext;
    if(filterNotSame) this.props.setPostFilter({type: filterType, context: filterContext});
  }

  filterPost = (allPostData, postFilter) => {
    switch (postFilter.type) {
      case POST_FILTER_TYPES.CATEGORY:
        if (postFilter.context === CATEGORIES.ALL)
          return allPostData[CATEGORIES.ALL];
        else {
          return allPostData.all.filter(post => {
            return post.category === postFilter.context;
          });
        }
      case POST_FILTER_TYPES.TAG:
        return allPostData.all.filter(post => {
          return post.tags.includes(postFilter.context);
        });
      default:
        return allPostData.all;
    }
  };
  

  renderPostList = () => {
    const postListNode = this.filterPost(
      this.props.allPostData,
      this.props.postFilter
    ).map((post, i) => {
      return <PostLink key={`post-${i}`} post={post} />;
    });
    return postListNode;
  };

  render() {
    return (
      <div className="postlist">
        <Route
          path="/tag"
          render={() => <TagFilterResult tag={this.props.postFilter.context} />}
        />
        {this.renderPostList()}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
