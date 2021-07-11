import React from "react";
import { SocialIcon } from "react-social-icons";
import {
	Typography,
	Grid,
	Link,
	List,
	makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.colors.dark,
	},
	container: {
		padding: 20,
		paddingTop: 70,
		paddingBottom: 70,
		"@media (max-width: 550px)": {
			paddingTop: 30,
			paddingBottom: 30,
		},
	},
	socialIcon: {
		marginRight: 20,
		marginTop: 10,
	},
	copyright: {
		display: "flex",
		justifyContent: "center",
		borderTop: theme.border,
		padding: 20,
	},
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<footer className={classes.root}>
			<Grid className={classes.container} container justify="center">
				<Grid
					container
					item
					lg={10}
					md={12}
					justify="space-between"
					spacing={2}
				>
					<Grid item lg={2} sm={6} xs={12}>
						<Typography variant="h6" component="h4">
							Head Office
						</Typography>
						<div className={classes.demo}>
							<List>
								<Typography variant="body1" gutterBottom>
									100 Example Street St.,
								</Typography>
								<Typography variant="body1">
									00-001 Warsaw{" "}
								</Typography>
							</List>
						</div>
					</Grid>
					<Grid item lg={2} sm={6} xs={12}>
						<Typography variant="h6" component="h4">
							Contact Us
						</Typography>
						<List>
							<Typography gutterBottom>
								<Link
									key="Email"
									component="a"
									href="mailto:info@example.com"
									color="inherit"
								>
									info@example.com
								</Link>
							</Typography>
							<Typography variant="body2">
								+48 450 175 235
							</Typography>
						</List>
					</Grid>
					<Grid item lg={2} sm={6} xs={12}>
						<Typography variant="h6" component="h4" gutterBottom>
							Information
						</Typography>
						<Typography gutterBottom>
							<Link
								key="Email"
								component="a"
								href="#"
								color="inherit"
							>
								About Us
							</Link>
						</Typography>
						<Typography gutterBottom>
							<Link
								key="Email"
								component="a"
								href="#"
								color="inherit"
							>
								Privacy Policy
							</Link>
						</Typography>
					</Grid>
					<Grid item lg={2} sm={6} xs={12}>
						<Typography
							variant="h6"
							component="h4"
							justify="center"
							gutterBottom
						>
							Follow Us
						</Typography>
						<SocialIcon
							network="twitter"
							url="https://twitter.com/"
							className={classes.socialIcon}
							target="_blank"
							rel="noopener noreferrer"
						/>
						<SocialIcon
							network="facebook"
							url="https://pl-pl.facebook.com/"
							className={classes.socialIcon}
							target="_blank"
							rel="noopener noreferrer"
						/>
					</Grid>
				</Grid>
			</Grid>
			<div className={classes.copyright}>
				<Typography variant="caption">
					©2021 VideoPlatform.pl
				</Typography>
			</div>
		</footer>
	);
};

export default Footer;
