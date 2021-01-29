import React from 'react';

const AprovalCard = props => {
	console.log(props);
	return (
		<div className="ui card">
			<div className="content">{props.children}</div>
			<div className="extra content">
				<div className="ui two buttons">
					<div className="ui bassic green button">Aprove</div>
					<div className="ui bassic red button">Reject</div>
				</div>
			</div>
		</div>
	);
};

export default AprovalCard;
