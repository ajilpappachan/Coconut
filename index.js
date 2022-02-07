import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import database from "./database/database.js";
import media from "./media/media.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", express.urlencoded({ extended: true }), async (req, res) => {
	const { username, password } = req.body;
	return res.send(await database.getUser(username, password));
});

app.get("/media", async (req, res) => {
	return res.send(await media.getAllMedia());
});

app.listen(port, () => {
	console.log("listening on port " + port);
});
