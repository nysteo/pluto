import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SplitPane from 'react-split-pane';
import Editor from './editor.js';
import ReactMarkdown from 'react-markdown';
import MarkdownRender from './markdownrender.js'

class App extends Component {
  constructor(props) {
    super();
    this.state = { markdownSrc: "# Hello World" , }
    this.onMarkdownChange = this.onMarkdownChange.bind(this);

  }
  onMarkdownChange(md) { this.setState({markdownSrc: md});}
  render() {
    return (
      <div className = "App">
        <SplitPane split = "vertical" defaultSize = "50%">
          <div className = "editor-panel">
            <Editor className = "editor" value = {this.state.markdownSrc} onChange = {this.onMarkdownChange}/>
          </div>
          <div className = "view-pane">
            <MarkdownRender source = {this.state.markdownSrc} />
          </div>
        </SplitPane>
      </div>
    );

  }

}

export default App;
