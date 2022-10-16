import { createMuiTheme } from "@material-ui/core/styles";
import { indigo, red } from "@material-ui/core/colors";

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: indigo[500],
			dark: indigo[800],
		},
		secondary: {
			main: red[600],
			dark: red[900],
		},
	},
	colors: {
		white: "#fff",
		lightGrey: '#e0e0e0',
		grey: '#bdbdbd',
		cardListBg: "rgba(31, 41, 56, .35)",
		cardListBgActive: "rgb(40, 50, 60)",
		dark: "#0f151b",
		colorST: "rgb(31, 41, 56)",
		overlay: "#121a21ec",
		background: "#121a21",
	},
	border: "1px solid rgba(150, 150, 150, 0.4)",
	navHeight: 70,
	navHeightMobile: 150,
});
