import React from "react";
import { Link } from "react-router-dom";

import { makeStyles, IconButton, Typography } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FiberNewIcon from "@material-ui/icons/FiberNew";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		flexGrow: 1,
		width: "100%",
		height: 350,
		display: "flex",
		overflow: "hidden",
		"@media (max-width: 550px)": {
			height: "auto",
			flexDirection: "column-reverse",
		},
	},
	textContainer: {
		position: "relative",
		width: "60%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		"@media (max-width: 550px)": {
			width: "100%",
			alignItems: "flex-start",
		},
		"&::before": {
			content: '""',
			position: "absolute",
			left: 0,
			top: 0,
			width: "100%",
			height: "100%",
			backgroundColor: theme.colors.overlay,
		},
	},
	text: {
		zIndex: 1,
		padding: theme.spacing(3),
		"@media (max-width: 550px)": {
			padding: theme.spacing(2),
		},
	},
	h1: {
		maxWidth: 800,
		marginBottom: theme.spacing(2),
		fontWeight: 700,
		letterSpacing: 2,
		"@media (max-width: 1100px)": {
			fontSize: "2rem",
		},
		"@media (max-width: 550px)": {
			letterSpacing: 1,
			fontSize: "1.6rem",
			marginBottom: theme.spacing(1),
		},
	},
	p: {
		opacity: 0.9,
		fontSize: "1.1rem",
		letterSpacing: 2,
		"@media (max-width: 550px)": {
			letterSpacing: 1,
			fontSize: 14,
		},
	},
	img: {
		position: "absolute",
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)",
		minWidth: "100%",
		minHeight: "100%",
		zIndex: -1,
	},
	playContainer: {
		position: "relative",
		height: "100%",
		minHeight: 200,
		padding: theme.spacing(2),
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexGrow: 1,
		overflow: "hidden",
		zIndex: 2,
	},
	playIcon: {
		fontSize: 150,
		color: theme.colors.white,
		transition: ".2s",
		"&:hover": {
			transform: "scale(1.1)",
		},
		"@media (max-width: 550px)": {
			fontSize: 120,
		},
	},
	iconNew: {
		position: "absolute",
		right: 0,
		bottom: 0,
		fontSize: 70,
		marginRight: theme.spacing(1),
		opacity: 0.7,
		"@media (max-width: 1100px)": {
			fontSize: 55,
			margin: theme.spacing(1),
		},
	},
}));

const NewVideoBaner = ({ img, newVideo, title, description }) => {
	const classes = useStyles();
	const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
	return (
		<div className={classes.root}>
			<div className={classes.textContainer}>
				<img className={classes.img} src={IMAGE_PATH + img} alt="new video" />
				<div className={classes.text}>
					<Typography
						variant="h3"
						component="h1"
						className={classes.h1}
					>
						{title}
					</Typography>
					<Typography
						variant="subtitle1"
						component="p"
						className={classes.p}
					>
						{description}
					</Typography>
				</div>
			</div>
			<div className={classes.playContainer}>
				<img className={classes.img} src={IMAGE_PATH + img} alt="new video" />
				<FiberNewIcon className={classes.iconNew} />
				<Link to={`/video/${newVideo}`}>
					<IconButton aria-label="play arrow icon" color="primary">
						<PlayArrowIcon className={classes.playIcon} />
					</IconButton>
				</Link>
			</div>
		</div>
	);
};

export default NewVideoBaner;
