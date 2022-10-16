import React, { useContext, useState } from "react";

import { ApiContext } from "../context/ApiContext";
import categoryData from "../data/localData";

import { makeStyles, AppBar } from "@material-ui/core";

import a11yProps from "../components/Tabs/a11yProps";
import TabPanel from "../components/Tabs/TabPanel";
import NewVideo from "../components/NewVideoBanner/NewVideoBanner";
import Carousel from "../components/Carousel/Carousel";
import Info from "../components/Info/Info";
import NavTabs from "../components/Tabs/NavTabs";
import StyledTab from "../components/Tabs/TabHorizontal";
import Loading from "../components/Loading/Loading";

const useStyles = makeStyles((theme) => ({
	container: {
		flex: 1,
		width: "100%",
	},
	tabPanelContent: {
		marginLeft: "9%",
		marginTop: "4%",
		"@media (max-width: 1100px)": {
			marginLeft: "5%",
		},
		"@media (max-width: 550px)": {
			marginTop: "10%",
			marginLeft: "3%",
		},
	},
	carouselContent: {
		position: "relative",
		"@media (max-width: 550px)": {
			marginTop: theme.spacing(3),
		},
	},
	appBar: {
		backgroundColor: theme.colors.colorST,
	},
}));

const HomePage = () => {
	const classes = useStyles();
	const { videos, newVideo, loading } = useContext(ApiContext);

	const [categoryIndex, setCategoryIndex] = useState(0);

	const handleChangeCategory = (event, newCategoryIndex) => {
		setCategoryIndex(newCategoryIndex);
	};

	if (loading) {
		return <Loading />;
	}

	console.log(videos);

	return (
		<div className={classes.container}>
			<NewVideo
				img={newVideo.poster_path}
				newVideo={newVideo._id}
				title={newVideo.title}
				description={newVideo.description}
			/>
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
						/>
					))}
				</NavTabs>
			</AppBar>
			{categoryData.map((item) => (
				<TabPanel
					index={item.index}
					value={categoryIndex}
					key={item.index}
				>
					<Carousel
						data={videos}
						categoryName={item.category}
						path={item.path}
						genreId={item.genre_ids}
					/>
				</TabPanel>
			))}
			<Info />
		</div>
	);
};

export default HomePage;
