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
	title: {
		maxWidth: 350,
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
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
	const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";
	return (
		<Link key={card.id} to={`/video/${card.id}`}>
			<Card className={classes.card} elevation={3}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={IMAGE_PATH + card.poster_path}
						alt={card.title}
						component="img"
					/>
					<CardContent className={classes.cardContent}>
						<Typography className={classes.category} gutterBottom>
							{`Release date: ${card.release_date}`}
						</Typography>
						<Typography
							gutterBottom
							variant="h6"
							component="h3"
							color="inherit"
							className={classes.title}
						>
							{card.title}
						</Typography>
						<Typography variant="caption" gutterBottom>
							{`Release date: ${card.release_date}`}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	);
};

export default React.memo(VideoCard);
