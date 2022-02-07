import dotenv from "dotenv";
import mongoose from "mongoose";

import User from "./User-Schema.js";

dotenv.config();

mongoose.connect(process.env.DATABASE_URL);

const database = {
	getUsers: async () => {
		const users = await User.find();
		return users;
	},
	getUser: async (username, password) => {
		const user = await User.findOne({ username, password });
		return user;
	},
};

export default database;
