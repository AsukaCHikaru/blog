import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Tags from "./Tags";

import { setPostReading } from "../redux/actions";

const mapDispatchToProps = {
  setPostReading
};

class PostLink extends Component {
  render() {
    const post = this.props.post;
    const path = "/post/" + post.path.replace(/(.+)\/(.+)/, "$1");
    return (
      <div className="postlink">
        <Link to={path}>
          <h2>{post.title}</h2>
        </Link>
        <div className="postmeta">
          <h4 className="date">{post.date}</h4>
          <Tags tags={post.tags} />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(PostLink);
