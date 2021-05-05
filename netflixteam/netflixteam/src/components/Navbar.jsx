import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const NavBar = () => (
	<Navbar
		expand="lg"
		className="p-0"
		style={{ backgroundColor: "#111", color: "white" }}
	>
		<Navbar.Brand href="#home">
			<a className="navbar-brand" href="home">
				<img
					src="./netflix_logo.png"
					style={{ width: "100px" }}
					alt="logo"
					id="logo"
				/>
			</a>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav>
				<Nav.Link href="#home" className="text-white">
					Tv Shows
				</Nav.Link>
				<Nav.Link href="#link" className="text-white">
					Add New
				</Nav.Link>
			</Nav>
			<Nav className="ml-auto">
				<Nav.Link href="#home">
					<a className="nav-link text-white" href="home">
						KIDS
					</a>
				</Nav.Link>
				<Nav.Link>
					<a className="navbar-brand" href="home">
						<img
							src="./public/avatar.png"
							style={{ width: "100px" }}
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
