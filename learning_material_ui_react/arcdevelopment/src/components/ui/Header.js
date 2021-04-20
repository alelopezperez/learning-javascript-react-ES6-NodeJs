import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function ElevationScroll(props) {
	const { children } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

const useStyles = makeStyles(theme => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '3em',
	},
	logo: {
		height: '7em',
	},
	tabContainer: {
		marginLeft: 'auto',
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: '25px',
	},
}));
const Header = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position="fixed" color="primary">
					<ToolBar disableGutters>
						<img
							alt="company logo"
							className={classes.logo}
							src={logo}
						/>
						<Tabs className={classes.tabContainer}>
							<Tab className={classes.tab} label="Home" />
							<Tab className={classes.tab} label="Services" />
							<Tab
								className={classes.tab}
								label="The Revolution"
							/>
							<Tab className={classes.tab} label="About Us" />
							<Tab className={classes.tab} label="Contact Us" />
						</Tabs>
					</ToolBar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
};

//the div is a little cushion
export default Header;
