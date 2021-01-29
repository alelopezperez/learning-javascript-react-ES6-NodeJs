import React from 'react';
import faker from 'faker'

const CommentInfo = () => {
    return (
        <div className = "comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.image()}/>
                </a>

                <div className="content">
                    <a href="/" className="author">
                        Ale
                    </a>

                    <div className="metadata">
                        <span className="date">
                            Today at 8:48 pm
                        </span>
                    </div>

                    <div classNme="text">
                        Learning react
                    </div>
                </div>
        </div>
    );

};

export default CommentInfo;