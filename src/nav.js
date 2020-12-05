import React from 'react';
import "./App.css";
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div className ="nav">
			<Link to="/"><h1 className = "title">Open Practice</h1></Link>
			<ul className ="nav-items">
				<Link to="/Atlas">
					<li>Atlas</li>
				</Link>
				<Link to="/Index">
					<li>Index</li>
				</Link>
				<Link to="/Manual">
					<li>Manual</li>
				</Link>
			</ul>
			</div>
			);
		}

		export default Nav;