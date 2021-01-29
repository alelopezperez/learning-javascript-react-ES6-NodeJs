import React from 'react';
import ReactDom from 'react-dom';
import CommentInfo from './CommentInfo.js';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentInfo
                author="alejandro"
                timeAgo="Today at 4pm"
                image={faker.image.image()}
                text={faker.lorem.sentence()}
            />
            <CommentInfo
                author="lopez"
                timeAgo="Tommorow at 10am"
                image={faker.image.image()}
                text={faker.lorem.sentence()}
            />
            <CommentInfo
                author="Jane"
                timeAgo="Yesterday at 5:00pm"
                image={faker.image.image()}
                text={faker.lorem.sentence()}
            />
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));
