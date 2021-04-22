import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

import footerAdornment from '../../assets/Footer Adornment.svg';

const useStyles = makeStyles(theme => ({
	footer: {
		backgroundColor: theme.palette.common.blue,
		width: '100%',
		zIndex: 1302,
		position: 'relative',
	},
	adornment: {
		width: '25em',
		verticalAlign: 'bottom',
		[theme.breakpoints.down('md')]: {
			width: '21em',
		},
		[theme.breakpoints.down('xs')]: {
			width: '15em',
		},
	},
	mainContainer: {
		position: 'absolute',
	},
	link: {
		color: 'white',
		fontFamily: 'Arial',
		fontSize: '0.75rem',
		fontWeight: 'bold',
		textDecoration: 'none',
	},
	gridItem: {
		margin: '3em',
	},
	icon: {
		height: '4em',
		width: '4em',
		[theme.breakpoints.down('xs')]: {
			height: '2.5em',
			width: '2.5em',
		},
	},
	socialContainer: {
		position: 'absolute',
		marginTop: '-6em',
		right: '1.5em',
		[theme.breakpoints.down('xs')]: {
			right:'0.6em'
		}
	},
}));

const Footer = props => {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Hidden mdDown>
				<Grid
					justify="center"
					container
					className={classes.mainContainer}
				>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid
								item
								component={Link}
								to="/"
								className={classes.link}
								onClick={() => props.setValue(0)}
							>
								Home
							</Grid>
						</Grid>
					</Grid>

					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid
								item
								component={Link}
								to="/services"
								className={classes.link}
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(0);
								}}
							>
								Services
							</Grid>
							<Grid
								item
								component={Link}
								to="/customsoftware"
								className={classes.link}
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(1);
								}}
							>
								Custome Software Development
							</Grid>
							<Grid
								item
								component={Link}
								to="/mobileapps"
								className={classes.link}
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(2);
								}}
							>
								Mobile App Development
							</Grid>
							<Grid
								item
								component={Link}
								to="/websites"
								className={classes.link}
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(3);
								}}
							>
								Website Development
							</Grid>
						</Grid>
					</Grid>

					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid
								item
								component={Link}
								to="/revolution"
								className={classes.link}
								onClick={() => props.setValue(2)}
							>
								The Revolution
							</Grid>
							<Grid
								item
								component={Link}
								to="/revolution"
								className={classes.link}
								onClick={() => props.setValue(2)}
							>
								Vision
							</Grid>
							<Grid
								item
								component={Link}
								to="/revolution"
								className={classes.link}
								onClick={() => props.setValue(2)}
							>
								Technology
							</Grid>
							<Grid
								item
								component={Link}
								to="/revolution"
								className={classes.link}
								onClick={() => props.setValue(2)}
							>
								Process
							</Grid>
						</Grid>
					</Grid>

					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid
								item
								component={Link}
								to="/about"
								className={classes.link}
								onClick={() => props.setValue(3)}
							>
								About Us
							</Grid>
							<Grid
								item
								component={Link}
								to="/about"
								className={classes.link}
								onClick={() => props.setValue(3)}
							>
								History
							</Grid>
							<Grid
								item
								component={Link}
								to="/about"
								className={classes.link}
								onClick={() => props.setValue(3)}
							>
								Team
							</Grid>
						</Grid>
					</Grid>

					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid
								item
								component={Link}
								to="/contact"
								className={classes.link}
								onClick={() => props.setValue(4)}
							>
								Contact Us
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Hidden>
			<img
				alt="black decorative slash"
				src={footerAdornment}
				className={classes.adornment}
			/>
			<Grid
				container
				justify="flex-end"
				spacing={2}
				className={classes.socialContainer}
			>
				<Grid
					item
					component={'a'}
					href="https://www.facebook.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img
						alt="fb-logo"
						src={facebook}
						className={classes.icon}
					/>
				</Grid>
				<Grid
					item
					component={'a'}
					href="http://www.twitter.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img alt="tw-logo" src={twitter} className={classes.icon} />
				</Grid>
				<Grid
					item
					component={'a'}
					href="https://www.instagram.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img
						alt="insta-logo"
						src={instagram}
						className={classes.icon}
					/>
				</Grid>
			</Grid>
		</footer>
	);
};

export default Footer;
