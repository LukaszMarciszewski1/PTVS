import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	headingContainer: {
		minWidth: "100%",
		backgroundColor: "#0f151b",
		marginTop: 90,
		textTransform: "uppercase",
		"@media (max-width: 1100px)": {
			marginTop: 60,
		},
		"@media (max-width: 550px)": {
			marginTop: 40,
		},
	},
	heading: {
		marginLeft: "9%",
		maxWidth: 1400,
		padding: "30px 10px",
		"@media (max-width: 1500px)": {
			marginLeft: "5%",
		},
		"@media (max-width: 1100px)": {
			marginLeft: "3%",
		},
		"@media (max-width: 550px)": {
			marginLeft: 15,
		},
	},
	span: {
		fontWeight: "700",
		fontSize: "1.8rem",
		"@media (max-width: 550px)": {
			fontSize: "1.4rem",
		},
	},
}));

const Info = () => {
	const classes = useStyles();
	return (
		<div className={classes.headingContainer}>
			<div className={classes.heading}>
				<Typography variant="subtitle1" component="p" gutterBottom>
					Vestibulum sagittis dolor
				</Typography>
				<Typography variant="h5" component="h2">
					<span className={classes.span}>
						Curabitur nulla ante, scelerisque non
					</span>
				</Typography>
			</div>
		</div>
	);
};

export default Info;
