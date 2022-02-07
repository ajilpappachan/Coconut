import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.DATABASE_URL;
const apiKey = process.env.DATABASE_API_KEY;

const request = {
	login: (username, password) => {
		const data = JSON.stringify({
			collection: "users",
			database: "database",
			dataSource: "Cluster0",
			filter: {
				username: username,
				password: password,
			},
		});

		const config = {
			method: "post",
			url: `${url}/action/findOne`,
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Request-Headers": "*",
				"api-key": apiKey,
			},
			data: data,
		};

		console.log(config.url);

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
			})
			.catch(function (error) {
				console.log(error);
			});
	},
};

export default request;
