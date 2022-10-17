import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	container: {
		marginTop: 50,
	},
}));

const FileForm = () => {
	const classes = useStyles();

	return <div className={classes.container}>FileForm</div>;
};

export default FileForm;
