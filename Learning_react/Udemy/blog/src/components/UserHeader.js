import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
	
	render() {
		const {user} = this.props;
		if(!user)
			return null;
		return <div className="header"> {user.name}</div>;
	}
}
const mapStateToProps = (state, ownProps) => {
	return { user: state.users.find(usx => usx.id === ownProps.userId), p:state.users};
};
export default connect(mapStateToProps)(UserHeader);
