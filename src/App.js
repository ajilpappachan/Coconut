import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Gallery from "./components/Gallery";
import NotFound from "./components/NotFound";

import Requests from "./utils/Requests";

import "./App.css";

const App = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

	const login = async (user) => {
		const response = await Requests.login(user);
		setUser(response._id);
		localStorage.setItem("user", JSON.stringify(response));
		window.location = "/home";
	};

	return (
		<div className="App">
			{user && <Navbar />}
			<Routes>
				<Route path="/" element={<Home user={user} />} />
				<Route path="/home" element={<Home user={user} />} />
				<Route path="/login" element={<Login login={login} />} />
				<Route path="/chat" element={<Chat user={user} />} />
				<Route path="gallery" element={<Gallery />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
