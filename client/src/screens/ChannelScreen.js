import React, { useContext, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory, useLocation } from "react-router";

import { ApiContext } from "../context/ApiContext";
import categoryData from "../data/localData";

import { makeStyles, AppBar } from "@material-ui/core";

import a11yProps from "../components/Tabs/a11yProps";
import NavTabs from "../components/Tabs/NavTabs";
import StyledTab from "../components/Tabs/TabHorizontal";
import Channel from "../components/Channels/Channels";
import Loading from "../components/Loading/Loading";

const useStyles = makeStyles((theme) => ({
	container: {
		flex: 1,
		width: "100%",
	},
	appBar: {
		marginBottom: theme.spacing(2),
		width: "100%",
		zIndex: 0,
		backgroundColor: theme.colors.colorST,
		"@media (max-width: 550px)": {
			marginBottom: theme.spacing(1),
		},
	},
}));

const ChanelScreen = () => {
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();
	const { videos, loading } = useContext(ApiContext);

	const currentTab = categoryData.findIndex(
		(tab) => tab.path === location.pathname
	);

	const [categoryIndex, setCategoryIndex] = useState(currentTab);

	const handleChangeCategory = (event, newCategoryIndex) => {
		setCategoryIndex(newCategoryIndex);
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<div className={classes.container}>
			<AppBar
				position="static"
				color="transparent"
				elevation={3}
				className={classes.appBar}
			>
				<NavTabs onChange={handleChangeCategory} value={categoryIndex}>
					{categoryData.map((item) => (
						<StyledTab
							key={item.index}
							label={item.category}
							{...a11yProps(item.index)}
							onClick={() => history.push(item.path)}
						/>
					))}
				</NavTabs>
			</AppBar>
			<Switch>
				{categoryData.map((item) => (
					<Route path={item.path} key={item.index}>
						<Channel data={videos} category={item.category} />
					</Route>
				))}
			</Switch>
		</div>
	);
};

export default ChanelScreen;
