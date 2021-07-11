import axios from "axios";

const url = axios.create({
	baseURL: process.env.REACT_APP_API_URL_TEST || "http://localhost:5000",
});

export default url;
