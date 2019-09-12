import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

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
    console.log(`https://blog.asukachikaru.com${this.props.location.pathname}`);
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
    const keywords =
      this.props.postReading.tags === undefined
        ? []
        : [...this.props.postReading.tags, this.props.postReading.category];    
    return (
      <div className="postcontext">
        <Helmet>
          <title>{`${this.props.postReading.title} | The work is undone.`}</title>
          <meta name="title" content={this.props.postReading.title} />
          <meta name="keywords" content={keywords.join(", ")} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://blog.asukachikaru.com${this.props.location.pathname}`} />
          <meta property="og:title" content={this.props.postReading.title} />

          <meta property="twitter:url" content={`https://blog.asukachikaru.com${this.props.location.pathname}`} />
          <meta property="twitter:title" content={this.props.postReading.title} />          
        </Helmet>
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
