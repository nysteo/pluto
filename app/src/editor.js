import React, { Component } from 'react';
import CodeMirror from '@skidding/react-codemirror';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/python/python');
require('codemirror/mode/xml/xml');
require('codemirror/mode/stex/stex');
require('codemirror/mode/markdown/markdown');
require('codemirror/theme/monokai.css');

class Editor extends Component {
    render() {
        var options = {
            mode: 'stex',
            theme: 'monokai',
        }
        return (
            <CodeMirror value = {this.props.value} options = {options} height = "100%"/>
        );
    }
    
}

export default Editor;