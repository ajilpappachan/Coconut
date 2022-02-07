import React, { useEffect } from "react";
import "./Home.css";

const Home = (props) => {
	useEffect(() => {
		if (!props.user) window.location = "/login";
	});

	const changeLink = (event) => {
		console.log(event.target.name);
		window.location = `/${event.target.id}`;
	};

	return (
		<div className="Home">
			<div id="chat" onClick={changeLink} className="Home-card fullcard">
				Chat
			</div>
			<div id="gallery" onClick={changeLink} className="Home-card fullcard">
				Gallery
			</div>
			<div className="Home-card halfcard inactive">Games Coming Soon :D</div>
		</div>
	);
};

export default Home;
