import React from "react";

import {
	makeStyles,
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		margin: "0 auto",
		display: "flex",
		backgroundColor: theme.colors.colorST,
	},
	card: {
		backgroundColor: "transparent",
		padding: "20px 0",
		display: "flex",
		justifyContent: "space-between",
		zIndex: 3,
		maxWidth: 1300,
		marginLeft: "9%",
		"@media (max-width: 1500px)": {
			marginLeft: "5%",
		},
		"@media (max-width: 1100px)": {
			marginLeft: "3%",
			flexDirection: "column",
		},
		"@media (max-width: 550px)": {
			marginLeft: 15,
		},
	},
	cardContent: {
		padding: 10,
		display: "flex",
		alignItems: "center",
	},
	innerText: {
		fontWeight: "lighter",
		lineHeight: "1.8rem",
		color: theme.colors.white,
		letterSpacing: 1,
		display: "inline",
		padding: 0,
		"@media (max-width: 500px)": {
			fontSize: 14,
		},
	},
	cardAction: {
		display: "flex",
		padding: "0 20px 0 40px",
		borderLeft: theme.border,
		"@media (max-width: 1500px)": {
			paddingLeft: 20,
		},
		"@media (max-width: 1100px)": {
			borderLeft: "none",
			paddingLeft: 0,
		},
	},
	button: {
		padding: "15px 40px",
		minWidth: 150,
		backgroundColor: theme.palette.primary.main,
		"@media (max-width: 500px)": {
			margin: "10px 0",
		},
	},
}));

const InfoContent = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Card className={classes.card} elevation={0}>
				<CardContent className={classes.cardContent}>
					<Typography
						className={classes.innerText}
						variant="subtitle1"
						component="p"
						gutterBottom
					>
						Phasellus euismod egestas arcu varius gravida. Proin
						imperdiet in erat a imperdiet. Donec nec varius lorem.
						Sed consectetur cursus eros in varius. Vivamus et
						finibus lectus, eu pretium metus. Sed eget.
					</Typography>
				</CardContent>
				<CardActions className={classes.cardAction}>
					<Button
						className={classes.button}
						variant="contained"
						color="primary"
						disableElevation
					>
						LOREM
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default InfoContent;
