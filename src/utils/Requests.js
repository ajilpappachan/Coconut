import axios from "axios";

import config from "../private/config";

const serverURL = config.SERVER_URL;

const Requests = {
	login: async (user) => {
		const response = await axios.post(`${serverURL}/login`, user);
		return response.data;
	},
	getmedia: async () => {
		const response = await axios.get(`${serverURL}/media`);
		return response.data;
	},
};

export default Requests;
