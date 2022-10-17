import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.colors.dark,
	},
	copyright: {
		display: "flex",
		justifyContent: "center",
		padding: 20,
	},
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<footer className={classes.root}>
			<div className={classes.copyright}>
				<Typography variant="caption">© 2022 PTVS.pl</Typography>
			</div>
		</footer>
	);
};

export default Footer;
