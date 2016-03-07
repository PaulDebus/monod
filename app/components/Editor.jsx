import React, { Component } from 'react';
import Markdown from './Markdown';
import Preview from './Preview';


export default class Editor extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { raw: '' };
  }

  onChange(e) {
    this.setState({ 'raw': e.target.value });
  }

  render() {
    return (
      <div className="editor">
        <Markdown raw={this.state.raw} onChange={this.onChange.bind(this)} />
        <Preview raw={this.state.raw} />
      </div>
    );
  }
}