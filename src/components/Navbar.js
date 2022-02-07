import React from "react";
import { Link } from "react-router-dom";
import logo from "../res/logo.png";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="Navbar">
			<div className="Navbar-brand">
				<img src={logo} height="50" width="50" alt="Logo" />
				<Link to="/home" className="Navbar-title">
					<span>Coconut</span>
				</Link>
			</div>
			<div className="Navbar-navitems">
				<Link to="/home">Home</Link>
				<Link to="/chat">Chat</Link>
				<Link to="/gallery">Gallery</Link>
			</div>
		</nav>
	);
};

export default Navbar;
