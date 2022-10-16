import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import VideoCard from "../VideoCard/VideoCard";

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
		padding: 30,
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "column",
		marginBottom: 50,
		"@media (max-width: 550px)": {
			padding: 20,
		},
	},
	container: {
		maxWidth: 1600,
	},
	cards: {
		minWidth: 320,
	},
}));

const Channel = ({ category, data }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid
				className={classes.container}
				justify="center"
				alignItems="center"
				container
				spacing={1}
			>
				{data.map((card) =>
					card.category === category ? (
						<Grid item xs={12} sm={5} md={4} lg={3} key={card._id}>
							<VideoCard
								card={card}
								className={classes.cards}
							/>
						</Grid>
					) : (
						[]
					)
				)}
			</Grid>
		</div>
	);
};

export default Channel;
