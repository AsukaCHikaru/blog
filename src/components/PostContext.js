import React, { Component } from 'react'
import marked from 'marked';

import '../style/PostContext.css';

marked.setOptions({
  headerIds: false,
});

export default class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: null,
    }
  }
  fetch(){
    const fileName = this.props.location.pathname.replace(/\/post\/(.+)/, '$1');
    const path = require( `../contents/${fileName}.md`);
    fetch(path)
      .then(data => {
        return data.text();
      }).then(text => {
        this.setState({content: marked(text)})
      });
  }
  render() {
    if(this.state.content===null) this.fetch();
    return (
      <div>
        <h2></h2>

        <article dangerouslySetInnerHTML={{__html: this.state.content}}></article>
      </div>
      
    )
  }
}
