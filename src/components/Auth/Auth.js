import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {
	makeStyles,
	Avatar,
	Grid,
	Paper,
	Typography,
	Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GoogleIcon } from "../../assets/icons";
import { auth } from "../../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(2),
		},
	},
	paper: {
		width: 400,
		position: "absolute",
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: theme.spacing(2),
	},
	avatar: {
		margin: theme.spacing(2),
		backgroundColor: theme.palette.secondary.main,
	},
	buttonsContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		margin: theme.spacing(2),
	},
	button: {
		width: "100%",
		height: 45,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		cursor: "pointer",
		borderRadius: "4px",
		color: theme.colors.white,
		border: "0px transparent; ",
		transition: ".2s",
	},
	googleButton: {
		background: theme.palette.secondary.main,
		marginBottom: theme.spacing(2),
		"&:hover": {
			background: theme.palette.secondary.dark,
		},
	},
	facebookButton: {
		background: theme.palette.primary.main,
		"&:hover": {
			background: theme.palette.primary.dark,
		},
	},
}));

const Auth = () => {
	const classes = useStyles();
	const history = useHistory();
	const { dispatch } = useContext(AuthContext);

	const provider = new GoogleAuthProvider();

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				dispatch({ type: "LOGIN", payload: user });
				history.push("/");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Container component="main" maxWidth="xs" className={classes.root}>
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant="h5">Sign In</Typography>
				<div className={classes.buttonsContainer}>
					<button
						className={`${classes.button} ${classes.googleButton}`}
						onClick={signInWithGoogle}
					>
						<GoogleIcon />
						&nbsp;&nbsp;GOOGLE SIGN IN
					</button>
				</div>
				<Grid container justify="center">
					<Grid item>
						<Typography>
							Login using a Social Media Account
						</Typography>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
};

export default Auth;
