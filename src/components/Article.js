import React, { Component } from "react";

import { handleContext } from "../logic/handleContext";

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: null
    };
  }
  componentWillMount() {
    if (this.state.context === null) this.fetch();
  }
  fetch() {
    const fileName = this.props.post;
    const path = require(`../contents/${fileName}/${fileName}.md`);
    fetch(path)
      .then(data => {
        return data.text();
      })
      .then(text => {
        const context = handleContext(text);
        const title = RegExp(/title:\s"(.+)"/).exec(text)[1];
        const date = RegExp(/date:\s(.+)/).exec(text)[1];
        const category = RegExp(/category:\s(.+)/).exec(text)[1];
        const tags = RegExp(/tags:\s(.+)/).exec(text)
          ? RegExp(/tags:\s(.+)/)
              .exec(text)[1]
              .split(/,\s*/)
          : [];
        this.setState({ context, title, date, tags, category });
      });
  }
  render() {
    return <article dangerouslySetInnerHTML={{__html: this.state.context}} />;
  }
}
