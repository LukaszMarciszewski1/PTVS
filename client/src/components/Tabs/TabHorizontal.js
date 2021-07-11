import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";

const StyledTab = withStyles((theme) => ({
	root: {
		textTransform: "none",
		letterSpacing: 1,
		fontWeight: theme.typography.fontWeightLight,
		fontSize: theme.typography.pxToRem(16),
		marginRight: theme.spacing(1),
		opacity: 0.6,
		transition: ".2s",
		"@media (max-width: 550px)": {
			marginRight: theme.spacing(0),
			padding: "6px 10px",
		},
		"&:hover": {
			opacity: 1,
		},
	},
}))((props) => <Tab disableRipple {...props} />);

export default StyledTab;
