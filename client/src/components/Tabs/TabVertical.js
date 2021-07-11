import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";

const StyledTab = withStyles((theme) => ({
	root: {
		textTransform: "none",
		color: theme.colors.white,
		letterSpacing: 1,
		fontWeight: theme.typography.fontWeightLight,
		fontSize: theme.typography.pxToRem(15),
		opacity: 0.6,
		minWidth: "auto",
		maxWidth: "100%",
		marginRight: "auto",
		transition: ".2s",
		"&:focus": {
			opacity: 1,
		},
		"&:hover": {
			opacity: 1,
			transform: "translateX(5px)",
		},
		"&:selected": {
			opacity: 1,
			background: "transparent",
		},
	},
}))((props) => <Tab disableRipple {...props} />);

export default StyledTab;
