import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
	titleContent: {
		display: "flex",
		alignItems: "flex-end",
		margin: theme.spacing(1),
		"@media (max-width: 1100px)": {
			flexDirection: "column",
			alignItems: "flex-start",
			justyContent: "flex-end",
		},
	},
	goToButton: {
		fontSize: "1.3rem",
		display: "flex",
		alignItems: "center",
		transition: ".2s",
		opacity: 0.8,
		"&:hover": {
			opacity: 1,
		},
		"&:hover > *": {
			transform: "translateX(10px)",
		},
	},
	icon: {
		fontSize: 40,
		transition: ".2s",
	},
}));

const Title = ({ goToCategory, category }) => {
	const classes = useStyles();
	return (
		<div className={classes.titleContent}>
			<Link to={goToCategory} className={classes.goToButton}>
				{category}
				<KeyboardArrowRightIcon className={classes.icon} />
			</Link>
		</div>
	);
};

export default Title;
