import './SeasonDisplay.css'
import React from 'react';
const seasonConfig = {
	summer: {
		text: "Let's Hit The Beach",
		iconName: 'Sun',
	},
	winter: {
		text: "Burr, It's Chilly",
		iconName: 'snowflake',
	},
};
const getSeason = (lat, month) => {
	if (lat > 0) {
		if (month >= 3 && month <= 8) return 'summer';
		else return 'winter';
	} else {
		if (month >= 3 && month <= 8) return 'winter';
		else return 'summer';
	}
};
const SeasonDisplay = props => {
	const season = getSeason(props.lat, new Date().getMonth().month);
	const {text, iconName} = seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
