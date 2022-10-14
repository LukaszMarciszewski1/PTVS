import React from "react";
import { Link } from "react-router-dom";
import {
	makeStyles,
	ButtonBase,
	Grid,
	Paper,
	Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
	imgContainer: {
		width: 100,
		height: 60,
		padding: 0,
	},
	img: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		display: "block",
	},
	paper: {
		padding: 10,
		marginTop: 8,
		margin: "auto",
		width: 350,
		backgroundColor: "transparent",
		color: grey[400],
		transition: ".2s",
		borderRadius: 4,
		"@media (max-width: 1100px)": {
			width: "100%",
		},
		"&:hover": {
			backgroundColor: theme.colors.cardListBg,
			color: grey[200],
		},
	},
	title: {
		fontWeight: "600",
	},
	active: {
		color: grey[200],
		backgroundColor: theme.colors.cardListBg,
	},
}));

const CardList = ({ data, active, category, setCategory }) => {
	const classes = useStyles();

	return (
		<div>
			{data.map((card) =>
				card.category === category ? (
					<div
						className={
							card._id === active._id ? classes.active : null
						}
						key={card._id}
						onClick={setCategory}
					>
						<Link to={`/video/${card._id}`}>
							<Paper elevation={0} className={classes.paper}>
								<Grid container spacing={2}>
									<Grid item>
										<ButtonBase
											className={classes.imgContainer}
										>
											<img
												className={classes.img}
												alt="img"
												src={card.img}
											/>
										</ButtonBase>
									</Grid>
									<Grid item xs={8} sm container>
										<Grid
											item
											xs
											container
											direction="column"
											spacing={2}
										>
											<Grid item xs>
												<Typography
													gutterBottom
													variant="subtitle1"
													component="p"
													className={classes.title}
												>
													{card.title}
												</Typography>
												<Typography
													variant="caption"
													component="p"
													gutterBottom
												>
													{card.time}
												</Typography>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Paper>
						</Link>
					</div>
				) : (
					[]
				)
			)}
		</div>
	);
};

export default CardList;
