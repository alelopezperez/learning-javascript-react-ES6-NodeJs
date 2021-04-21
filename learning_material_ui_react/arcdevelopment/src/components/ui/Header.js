import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
		height: '8em',
	},
	logoContainer: {
		padding: 0,
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	tabContainer: {
		marginLeft: 'auto',
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: '25px',
	},
	button: {
		...theme.typography.estimate,
		borderRadius: '50px', // this makes the button rounded
		marginLeft: '50px',
		marginRight: '25px',
		height: '45px',
	},
	menu: {
		backgroundColor: theme.palette.common.blue,
		color: 'white',
		borderRadius: 0,
	},
	menuItem: {
		...theme.typography.tab,
		opacity: 0.7,
		'&:hover': {
			opacity: 1,
		},
	},
}));
const Header = () => {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleChange = (e, value) => {
		setValue(value);
	};

	const handleClick = e => {
		setAnchorEl(e.currentTarget);
		setOpen(true);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setOpen(false);
	};

	const handleMenuItemClick = (e, i) => {
		setAnchorEl(null);
		setOpen(false);
		setSelectedIndex(i);
	};
	const menuOptions = [
		{ name: 'Services', link: '/services' },
		{ name: 'Custom Software Development', link: '/customsoftware' },
		{ name: 'Mobile App Development', link: '/mobileapps' },
		{ name: 'Website Development', link: '/websites' },
	];

	useEffect(() => {
		switch (window.location.pathname) {
			case '/':
				if (value !== 0) setValue(0);
				break;
			case '/services':
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(0);
				}
				break;
			case '/customsoftware':
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(1);
				}
				break;
			case '/mobileapps':
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(2);
				}
				break;
			case '/websites':
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(3);
				}
				break;
			case '/revolution':
				if (value !== 2) setValue(2);
				break;
			case '/about':
				if (value !== 3) setValue(3);
				break;
			case '/contact':
				if (value !== 4) setValue(4);
				break;
			case '/estimate':
				if (value !== 4) setValue(5);
				break;
			default:
				break;
		}
	}, [value]);
	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position="fixed" color="primary">
					<ToolBar disableGutters>
						<Button
							component={Link}
							to="/"
							disableRipple
							onClick={() => setValue(0)}
							className={classes.logoContainer}
						>
							<img
								alt="company logo"
								className={classes.logo}
								src={logo}
							/>
						</Button>
						<Tabs
							value={value}
							onChange={handleChange}
							className={classes.tabContainer}
							indicatorColor="primary"
						>
							<Tab
								className={classes.tab}
								component={Link}
								to="/"
								label="Home"
							/>
							<Tab
								aria-owns={anchorEl ? 'simple-menu' : undefined}
								aria-haspopup={anchorEl ? true : undefined}
								className={classes.tab}
								component={Link}
								onMouseOver={e => handleClick(e)}
								label="Services"
								to="/services"
							/>
							<Tab
								className={classes.tab}
								label="The Revolution"
								to="/revolution"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								label="About Us"
								to="/about"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								label="Contact Us"
								to="/contact"
							/>
						</Tabs>
						<Button
							variant="contained"
							color="secondary"
							className={classes.button}
						>
							Free Estimate
						</Button>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{ onMouseLeave: handleClose }}
							classes={{ paper: classes.menu }}
							elevation={0}
						>
							{menuOptions.map((option, i) => (
								<MenuItem
									key={option.name}
									component={Link}
									to={option.link}
									classes={{ root: classes.menuItem }}
									onClick={e => {
										handleMenuItemClick(e, i);
										setValue(1);
										handleClose();
									}}
									selected={
										i === selectedIndex && value === 1
									}
								>
									{option.name}
								</MenuItem>
							))}
						</Menu>
					</ToolBar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
};

//the div is a little cushion
export default Header;
