import React from "react";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

import {
	makeStyles,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
	card: {
		color: theme.colors.white,
		margin: 10,
		backgroundColor: theme.colors.colorST,
		"@media (max-width: 550px)": {
			margin: 6,
		},
	},
	media: {
		height: 200,
		width: "100%",
		objectFit: "cover",
		"@media (max-width: 550px)": {
			height: 150,
		},
	},
	cardContent: {
		marginBottom: 30,
		position: "relative",
		"@media (max-width: 550px)": {
			marginBottom: 10,
		},
	},
	category: {
		color: grey[300],
		fontSize: 13,
		fontWeight: "lighter",
		letterSpacing: 1,
		marginBottom: theme.spacing(1),
	},
}));

const VideoCard = ({ card }) => {
	const classes = useStyles();

	return (
		<Link key={card._id} to={`/video/${card._id}`}>
			<Card className={classes.card} elevation={3}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={card.img}
						component="img"
						alt={card.title}
					/>
					<CardContent className={classes.cardContent}>
						<Typography className={classes.category} gutterBottom>
							{card.category}
						</Typography>
						<Typography
							gutterBottom
							variant="h6"
							component="h3"
							color="inherit"
						>
							{card.title}
						</Typography>
						<Typography variant="caption" gutterBottom>
							{card.time}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	);
};

export default React.memo(VideoCard);
