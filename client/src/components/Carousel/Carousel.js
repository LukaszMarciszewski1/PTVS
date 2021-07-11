import React from "react";
import Carousel from "react-multi-carousel";
import { makeStyles } from "@material-ui/core";
import TitleLink from "./TitleLink";
import Video from "../VideoCard/VideoCard";
import ButtonsGroup from "./ButtonsGroup";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles(() => ({
	root: {
		marginLeft: "9%",
		marginTop: 50,
		"@media (max-width: 1500px)": {
			marginLeft: "5%",
		},
		"@media (max-width: 1100px)": {
			marginLeft: "3%",
		},
		"@media (max-width: 550px)": {
			marginTop: 30,
			marginLeft: 15,
		},
	},
	carouselContainer: {
		position: "relative",
		"@media (max-width: 550px)": {
			marginTop: 70,
		},
	},
}));

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1500 },
		items: 4,
		partialVisibilityGutter: 40,
	},
	laptop: {
		breakpoint: { max: 1500, min: 1100 },
		items: 3,
		partialVisibilityGutter: 40,
	},
	tablet: {
		breakpoint: { max: 1100, min: 550 },
		items: 2,
		partialVisibilityGutter: 40,
	},
	mobile: {
		breakpoint: { max: 550, min: 0 },
		items: 1,
		partialVisibilityGutter: 30,
	},
};

const CarouselContent = ({ goToCategory, category, data }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<TitleLink goToCategory={goToCategory} category={category} />
			<div className={classes.carouselContainer}>
				<Carousel
					arrows={false}
					responsive={responsive}
					ssr={true}
					partialVisible={true}
					renderButtonGroupOutside={true}
					customButtonGroup={<ButtonsGroup />}
				>
					{data.map((card) =>
						card.category === category ? (
							<Video key={card._id} card={card}></Video>
						) : (
							[]
						)
					)}
				</Carousel>
			</div>
		</div>
	);
};

export default CarouselContent;
