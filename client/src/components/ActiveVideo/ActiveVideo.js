import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	title: {
		fontWeight: 500,
	},
	description: {
		padding: "15px 0",
		borderBottom: theme.border,
	},
}));

const ActiveVideo = ({ video, children }) => {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.video}>{children}</div>
			<div className={classes.description}>
				<Typography
					gutterBottom
					variant="h5"
					component="h3"
					className={classes.title}
				>
					{video.title}
				</Typography>
				<Typography variant="subtitle1" gutterBottom>
					{video.description}
				</Typography>
				<Typography
					variant="body2"
					gutterBottom
					style={{ opacity: 0.8 }}
				>
					{video.time}
				</Typography>
			</div>
		</div>
	);
};

export default ActiveVideo;
