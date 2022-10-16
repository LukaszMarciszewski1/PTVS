import React, { createContext, useEffect, useState } from "react";
import api from "../helpers/api";
import axios from "axios";

export const ApiContext = createContext(null);

const ApiProvider = ({ children }) => {
	const [videos, setVideos] = useState([]);
	const [video, setVideo] = useState({});
	const [selectVideo, setSelectVideo] = useState({});
	const [newVideo, setNewVideo] = useState({});
	const [loading, setLoading] = useState(false);
	const [latestMove, setLatestMove] = useState({});
	const [trailer, setTrailer] = useState({})

	const findLastItem = (data) => {
		const lastItem = data.find(() => data.indexOf(data.length));
		return lastItem;
	};

	const API_URL = "https://api.themoviedb.org/3";

	const fetchMovies = async () => {
		const {
			data: { results },
		} = await axios.get(`${API_URL}/discover/movie`, {
			params: {
				api_key: process.env.REACT_APP_MOVIE_API_KEY,
			},
		});
		setVideos(results);
		const lastMove = findLastItem(results);
		setNewVideo(lastMove);
	};

	const fetchLatestMove = async () => {
		const { data } = await axios.get(`${API_URL}/movie/now_playing`, {
			params: {
				api_key: process.env.REACT_APP_MOVIE_API_KEY,
			},
		});
	};
	fetchLatestMove();

	const fetchMovie = async (id) => {
		const { data } = await axios(`${API_URL}/movie/${id}videos`, {
			params: {
				api_key: process.env.REACT_APP_MOVIE_API_KEY,
				append_to_response: "videos",
			},
		});
		if (data.videos && data.videos.results) {
			const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
			setTrailer(data.videos.results[0])
	  }
		setVideo(data)
	};

	const selectMovie = async (id) => {
		const movie = await fetchMovie(id);
		setVideo(movie)
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<ApiContext.Provider value={{ videos, video, trailer, newVideo, loading, selectMovie }}>
			{children}
		</ApiContext.Provider>
	);
};

export default ApiProvider;
