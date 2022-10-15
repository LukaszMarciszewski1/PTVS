import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { AuthContext } from "../../context/AuthContext";
import {
	makeStyles,
	AppBar,
	Avatar,
	Button,
	Toolbar,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: theme.colors.dark,
		flexGrow: 1,
		position: "sticky",
		top: 0,
		width: "100%",
		zIndex: 999,
		transition: ".4s",
	},
	hidden: {
		"@media (max-width: 550px)": {
			transform: `translateY(-70px)`,
		},
	},
	toolBar: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		alignItems: "center",
		minHeight: theme.navHeight,
	},
	logo: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		"@media (max-width: 550px)": {
			paddingTop: 20,
			paddingBottom: 20,
		},
	},
	logoCenter: {
		"@media (max-width: 550px)": {
			flex: 1,
			textAlign: "center",
		},
	},
	profile: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		"@media (max-width: 550px)": {
			paddingTop: 20,
			paddingBottom: 20,
			borderTop: theme.border,
			width: "100%",
		},
	},
	user: {
		display: "flex",
		alignItems: "center",
		marginRight: 40,
	},
	avatar: {
		marginRight: 15,
	},
	button: {
		minWidth: 100,
		height: 40,
	},
}));

const Navbar = (props) => {
	const classes = useStyles(props);
	const history = useHistory();
	const location = useLocation();
	const [visible, setVisible] = useState(true);
	const { user, dispatch } = useContext(AuthContext);

	const logout = async () => {
		const result = window.confirm("Do you want to log out?");
		if (!result) return;
		history.push("/");
		await signOut(auth)
			.then(() => {
				dispatch({ type: "LOGOUT", user: null });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleScroll = () => {
		if (window.pageYOffset > 100) {
			setVisible(false);
		} else {
			setVisible(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [location]);

	return (
		<AppBar
			position="static"
			className={`${classes.appBar} ${visible ? null : classes.hidden}`}
			elevation={2}
		>
			<Toolbar className={classes.toolBar}>
				<Typography
					component={Link}
					to="/"
					variant="h6"
					className={`${classes.logo} ${
						user ? classes.logoCenter : null
					}`}
				>
					PTVS Vision{" "}
				</Typography>
				{user ? (
					<div className={classes.profile}>
						<div className={classes.user}>
							<Avatar
								className={classes.avatar}
								alt={user.name}
								src={user.photoURL}
							/>
							<Typography
								className={classes.userName}
								variant="body1"
							>
								{user.displayName}
							</Typography>
						</div>
						<Button
							variant="contained"
							color="secondary"
							onClick={logout}
							className={classes.button}
						>
							Logout
						</Button>
					</div>
				) : (
					<Button
						component={Link}
						to={"/auth"}
						variant="contained"
						color="primary"
						className={classes.button}
					>
						Sign In
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
