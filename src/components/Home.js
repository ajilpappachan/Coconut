import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
	useEffect(() => {
		if (!props.user) window.location = "/login";
	});

	const changeLink = (event) => {
		window.location = `/${event.target.name}`;
	};

	return (
		<div className="Home">
			<div name="chat" className="Home-card fullcard">
				Chat
			</div>
			<div name="gallery" className="Home-card fullcard">
				Gallery
			</div>
			<div className="Home-card halfcard inactive">Games Coming Soon :D</div>
		</div>
	);
};

export default Home;
