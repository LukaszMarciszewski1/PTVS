import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import ReactPlayer from "react-player";
import { makeStyles, Tabs } from "@material-ui/core";

import { ApiContext } from "../context/ApiContext";
import categoryData from "../data/localData";

import a11yProps from "../components/Tabs/a11yProps";
import ActiveVideo from "../components/ActiveVideo/ActiveVideo";
import CardsList from "../components/CardsList/CardsList";
import TabPanel from "../components/Tabs/TabPanel";
import StyledTab from "../components/Tabs/TabVertical";
import DropDownMenu from "../components/DropDownMenu/DropDownMenu";
import FileForm from "../components/FileForm/FileForm";
import Loading from "../components/Loading/Loading";

const useStyles = makeStyles((theme) => ({
	container: {
		maxWidth: 1650,
		height: "calc(100vh - 100px)",
		display: "flex",
		margin: "15px auto 40px",
		padding: 20,
		"@media (max-width: 1100px)": {
			height: "auto",
			padding: 15,
			flexDirection: "column",
		},
	},
	videoContainer: {
		flex: 1,
		"@media (max-width: 1100px)": {
			width: "100%",
		},
	},
	listContainer: {
		position: "relative",
		maxWidth: "100%",
		height: 700,
		display: "flex",
		flexDirection: "column",
		borderRadius: 20,
		marginLeft: 40,
		padding: "0 20px 30px",
		overflow: "hidden",
		boxShadow: "0px 0px 6px 2px rgba(0,0,0,0.45)",
		"@media (max-width: 1100px)": {
			overflow: "auto",
			width: "100%",
			height: "auto",
			borderRadius: 0,
			margin: 0,
			padding: 0,
			boxShadow: "none",
		},
	},
	list: {
		marginTop: 100,
		maxHeight: 500,
		height: 500,
		overflowY: "scroll",
		paddingRight: 10,
		"@media (max-width: 1100px)": {
			overflowY: "auto",
			height: "auto",
			paddingRight: 0,
		},
		"&::-webkit-scrollbar": {
			width: 8,
			backgroundColor: "rgb(61, 71, 76)",
			borderRadius: 10,
			cursor: "pointer",
			"@media (max-width: 1100px)": {
				display: "none",
			},
		},
		"&::-webkit-scrollbar-thumb": {
			backgroundColor: theme.colors.colorST,
			borderRadius: 10,
			"@media (max-width: 1100px)": {
				display: "none",
			},
		},
	},
	tabs: {
		borderTop: theme.border,
		fontSize: theme.typography.pxToRem(16),
		alignItems: "flex-start",
		minWidth: "100%",
		padding: 10,
		background: theme.colors.background,
	},
}));

const VideoScreen = (props) => {
	const classes = useStyles();
	const history = useHistory();

	const { videos, loading } = useContext(ApiContext);
	const video = videos.find((x) => x._id === props.match.params._id);

	const findIndexTab = () => {
		let findCurrentTab;
		if (video) {
			findCurrentTab = categoryData.find(
				(tab) => tab.category === video.category
			);
		}
		const index = categoryData.indexOf(findCurrentTab);
		const findCurrentIndex = index >= 0 ? index : 0;
		return findCurrentIndex;
	};

	const currentTab = findIndexTab();
	const [categoryTabIndex, setCategoryTabIndex] = useState(currentTab);
	const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

	const selectedCategory = categoryData.find(
		(item) => item.index === currentTab
	);

	const currentCategory = [...videos].filter(
		(video) => video.category === selectedCategory.category
	);

	const nextVideo =
		currentVideoIndex < currentCategory.length - 1
			? currentVideoIndex + 1
			: 0;

	const videoIndex = currentCategory.indexOf(video);

	const handleChangeTab = (event, newValue) => {
		setCategoryTabIndex(newValue);
	};

	useEffect(() => {
		const active = videoIndex > 0 ? videoIndex : 0;
		setCurrentVideoIndex(active);
	}, [videoIndex]);

	if (loading) {
		return <Loading />;
	}

	return (
		<div className={classes.container}>
			<div className={classes.videoContainer}>
				<ActiveVideo video={currentCategory[currentVideoIndex]}>
					<ReactPlayer
						className="react-player"
						url={currentCategory[currentVideoIndex].move}
						width="100%"
						height="100%"
						controls={true}
						playing={true}
						onEnded={() => {
							setCurrentVideoIndex(nextVideo);
							history.push(currentCategory[nextVideo]._id);
						}}
					/>
				</ActiveVideo>
			</div>
			<div className={classes.listContainer}>
				<DropDownMenu
					selectCategory={currentCategory[currentVideoIndex].category}
				>
					<Tabs
						orientation="vertical"
						variant="scrollable"
						value={categoryTabIndex}
						onChange={handleChangeTab}
						aria-label="Vertical tabs"
						className={classes.tabs}
						TabIndicatorProps={{
							style: {
								display: "none",
							},
						}}
					>
						{categoryData.map((item) => (
							<StyledTab
								key={item.index}
								{...a11yProps(item.index)}
								label={item.category}
							/>
						))}
					</Tabs>
				</DropDownMenu>
				<div className={classes.list}>
					{categoryData.map((item) => (
						<TabPanel
							key={item.index}
							index={item.index}
							value={categoryTabIndex}
						>
							<CardsList
								data={videos}
								active={currentCategory[currentVideoIndex]}
								category={item.category}
								setCategory={findIndexTab}
							/>
						</TabPanel>
					))}
				</div>
				<FileForm />
			</div>
		</div>
	);
};

export default VideoScreen;
