import React, { createContext, useEffect, useState } from "react";
import api from "../helpers/api";

export const ApiContext = createContext(null);

const ApiProvider = ({ children }) => {
	const [videos, setVideos] = useState([]);
	const [newVideo, setNewVideo] = useState({});
	const [loading, setLoading] = useState(false);

	const findLastItem = (data) => {
		const lastItem = data.find(() => data.indexOf(data.length));
		return lastItem;
	};

	const fetchData = async () => {
		setLoading(true);
		await api
			.get("/api/videos")
			.then((res) => {
				const videos = res.data;
				const lastItem = findLastItem(videos);
				setVideos(videos);
				setNewVideo(lastItem);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<ApiContext.Provider value={{ videos, newVideo, loading }}>
			{children}
		</ApiContext.Provider>
	);
};

export default ApiProvider;
