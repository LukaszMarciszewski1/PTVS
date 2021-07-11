import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	root: {
		padding: 20,
		width: "100%",
		height: "100vh",
	},
  container: {
    display: 'flex',
    alignItems: 'center'
  }
}));
const Loading = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<CircularProgress disableShrink color="inherit" />
				<Typography style={{ marginLeft: 10 }}>Loading...</Typography>
			</div>
		</div>
	);
};

export default Loading;
