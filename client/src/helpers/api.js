import axios from "axios";

const url = axios.create({
	baseURL: "http://localhost:5000",
});

export default url;
