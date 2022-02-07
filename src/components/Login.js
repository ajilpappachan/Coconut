import React, { useState } from "react";
import logo from "../res/logo.png";
import "./Login.css";

const Login = (props) => {
	const [user, setUser] = useState({ username: "", password: "" });

	const handleChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		event.target.disabled = true;
		props.login(user);
	};

	return (
		<div className="Login-container">
			<div className="Login">
				<div className="Login-title">
					<img src={logo} alt="Logo" />
					<h1 className="Login-brand">Coconut</h1>
				</div>
				<form>
					<div className="Login-input">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							name="username"
							value={user.username}
							onChange={handleChange}
						/>
					</div>
					<div className="Login-input">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							value={user.password}
							onChange={handleChange}
						/>
					</div>
					<button type="submit" onClick={handleSubmit}>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
