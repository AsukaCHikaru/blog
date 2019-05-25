import React, { Component } from 'react'
// import { connect } from 'react-redux';
import marked from 'marked';

import Tags from './Tags';

import handleContext from '../logic/handleContext';

import '../style/PostContext.css';

marked.setOptions({
  headerIds: false,
});

export default class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: null,
      tags: [],
      title: null,
      context: null,
    }
  }

  componentWillMount(){
    if(this.state.context===null) this.fetch();
  }
  fetch(){
    const fileName = this.props.location.pathname.replace(/\/post\/(.+)/, '$1');
    const path = require( `../contents/${fileName}.md`);
    fetch(path)
      .then(data => {
        return data.text();
      }).then(text => {
        const context = handleContext(marked(text));
        
        const title = RegExp(/title:\s"(.+)"/).exec(text)[1];
        const date = RegExp(/date:\s(.+)/).exec(text)[1];
        const tags = RegExp(/tags:\s(.+)/).exec(text)[1].split(/,\s*/);
        this.setState({context, title, date, tags });
      });
  }
  render() {
    
    return (
      <div className="postcontext">
        <header>
          <h1>{this.state.title}</h1>
          <h3 className="date">{this.state.date}</h3>
          <Tags tags={this.state.tags} />
        </header>
        <article dangerouslySetInnerHTML={{__html: this.state.context}} />
      </div>
      
    )
  }
}
