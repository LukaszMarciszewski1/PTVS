import React, { useState, useRef } from "react";
import {
	Accordion,
	AccordionSummary,
	makeStyles,
	Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { signInWithGoogle } from "../../firebase/firebase";

import useOnClickOutside from "../../hooks/useOnClickOutside";

const useStyles = makeStyles((theme) => ({
	accordion: {
		opacity: 1,
		width: "100%",
		color: "inherit",
		borderBottom: theme.border,
		marginBottom: 20,
		position: "absolute",
		top: 0,
		left: 0,
		background: theme.colors.background,
		zIndex: 2,
	},
	summary: {
		padding: "15px 25px",
	},
	iconSelect: {
		color: theme.colors.white,
	},
}));

const SelectList = ({ children, selectCategory }) => {
	const classes = useStyles();
	const ref = useRef(null);
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? true : false);
	};

	useOnClickOutside(ref, () => setExpanded(false));

	return (
		<Accordion
			className={classes.accordion}
			expanded={expanded}
			onChange={handleChange("panel")}
			ref={ref}
		>
			<AccordionSummary
				className={classes.summary}
				expandIcon={<ExpandMoreIcon className={classes.iconSelect} />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Typography variant="body1" component="p">
					{selectCategory}
				</Typography>
			</AccordionSummary>
			<div onClick={() => setExpanded(false)}>{children}</div>
		</Accordion>
	);
};

export default SelectList;
