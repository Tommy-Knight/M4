import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import Link from "react-router-dom/Link"

const NavBar = () => (
	<Navbar
		expand="sm"
		className="p-0"
		style={{ backgroundColor: "#111", color: "white" }}
	>
		<Navbar.Brand href="/">
			<Link className="navbar-brand" to="/">
				<img
					src="./netflix_logo.png"
					style={{ width: "100px" }}
					alt="logo"
					id="logo"
				/>
			</Link>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="responsive-navbar-nav" className="text-left ">
			<Nav>
				<Link className="text-white mx-1" to="/">
					Home
				</Link>
				<Link className="text-white mx-1" to="/series">
					Series
				</Link>
				<Link className="text-white mx-1" to="/film">
					Film
				</Link>
			</Nav>
			<Nav className="ml-auto">
				<Nav.Link href="/">
					<a className="nav-link text-white" href="/">
						CHILDREN
					</a>
				</Nav.Link>
				<Link className="text-white mt-3 mx-1" to="/registration">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
					</svg>
				</Link>
				<Nav.Link>
					<a className="navbar-brand" href="/">
						<img
							src="./avatar.png"
							style={{ width: "30px" }}
							id="avatar"
							alt="avatar"
						/>
					</a>
				</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>

	//
)

export default NavBar
