import React, { Component } from "react";
import { connect } from "react-redux";

import Tags from "./Tags";
import ToMainViewNav from "./ToMainViewNav";
import Article from "./Article";

import { setPostReading } from "../redux/actions";

import "../style/PostContext.css";

const mapStateToProps = state => {
  const { postReading, allPostData } = state;
  return { postReading, allPostData };
};
const mapDispatchToProps = {
  setPostReading
};

class PostContext extends Component {
  componentDidMount() {
    this.parsePathToPostReading(this.props.location.pathname);
  }
  parsePathToPostReading = path => {
    const postName = path.replace(/\/post\/(.+)/, "$1");
    const postReading = this.props.allPostData.all.find(post => {
      return post.path.replace(/(.+)\/.+/, "$1") === postName;
    });
    if (
      this.props.postReading.path === undefined ||
      this.props.postReading.path !== postReading.path
    )
      this.props.setPostReading(postReading);
  };

  render() {
    return (
      <div className="postcontext">
        <header>
          <h1>{this.props.postReading.title}</h1>
          <h3 className="date">{this.props.postReading.date}</h3>
          <Tags tags={this.props.postReading.tags} />
        </header>
        <Article
          post={this.props.location.pathname.replace(/\/post\/(.+)/, "$1")}
        />
        <ToMainViewNav category={this.props.postReading.category} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContext);
