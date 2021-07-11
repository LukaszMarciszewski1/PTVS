import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../../store/LoginContext";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import {
	makeStyles,
	Avatar,
	Grid,
	Paper,
	Typography,
	Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GoogleIcon, FacebookIcon } from "./icons";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(2),
		},
	},
	paper: {
		margin: "35% auto",
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
	const { setLogin } = useContext(LoginContext);

	const setProfile = (name, picture) => {
		setLogin(true);
		localStorage.setItem("profile", JSON.stringify({ name, picture }));
		history.push("/");
	};

	const googleSuccess = async (response) => {
		const result = response.profileObj;
		const name = result.name;
		const picture = result.imageUrl;
		try {
			setProfile(name, picture);
		} catch (err) {
			console.log(err);
		}
	};

	const googleFailure = (error) => {
		console.log(error);
	};

	const responseFacebook = async (response) => {
		const result = response;
		const name = result.name;
		const picture = result.picture.data.url;
		try {
			setProfile(name, picture);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container component="main" maxWidth="xs" className={classes.root}>
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant="h5">Sign In</Typography>
				<div className={classes.buttonsContainer}>
					<GoogleLogin
						clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
						onSuccess={googleSuccess}
						onFailure={googleFailure}
						cookiePolicy="single_host_origin"
						render={(renderProps) => (
							<button
								className={`${classes.button} ${classes.googleButton}`}
								onClick={renderProps.onClick}
								disable={renderProps.disable}
							>
								<GoogleIcon />
								&nbsp;&nbsp;GOOGLE SIGN IN
							</button>
						)}
					/>
					<FacebookLogin
						appId={process.env.REACT_APP_FACEBOOK_APP_ID}
						autoLoad={false}
						fields="name,email,picture"
						textButton="&nbsp;&nbsp;FACEBOOK SIGN IN"
						callback={responseFacebook}
						cssClass={`${classes.button} ${classes.facebookButton}`}
						icon={<FacebookIcon />}
					/>
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
