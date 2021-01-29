import React from 'react';
import ReactDom from 'react-dom';
import CommentInfo from './CommentInfo.js';
import faker from 'faker';
import AprovalCard from './AprovalCard';

const App = () => {
	return (

		<div className="ui container comments">
            <AprovalCard>
                <div><h4>Warning!</h4>This is passed as the child</div>
            </AprovalCard>
			<AprovalCard>
				<CommentInfo
					author="alejandro"
					timeAgo="Today at 4pm"
					image={faker.image.image()}
					text={faker.lorem.sentence()}
				/>
			</AprovalCard>
            <AprovalCard>
			<CommentInfo
				author="lopez"
				timeAgo="Tommorow at 10am"
				image={faker.image.image()}
				text={faker.lorem.sentence()}
			/>
            </AprovalCard>
            <AprovalCard>
			<CommentInfo
				author="Jane"
				timeAgo="Yesterday at 5:00pm"
				image={faker.image.image()}
				text={faker.lorem.sentence()}
			/>
            </AprovalCard>
		</div>
	);
};

ReactDom.render(<App />, document.querySelector('#root'));
