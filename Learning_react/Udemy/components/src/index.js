import React from 'react';
import ReactDom from 'react-dom'
import CommentInfo from './CommentInfo.js'

const App  = () => {
    return (
        <div className="ui container comments">
            <CommentInfo />     
        </div>

    );
}

ReactDom.render(<App />, document.querySelector('#root'));