import React from 'react'
import Na

export default function Navbar() {
    return (
			<div>
				<nav
					id="navBar"
					className="navbar navbar-expand-lg navbar-dark sticky-top"
				>
					<div className="container-fluid">
						<a
							className="navbar-brand d-inline-block"
							href="index.html"
							alt="img"
						>
							<img src="assets\netflix_logo.png" id="netflixLogo" alt="" />
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav me-auto mb-2 mb-xlg-0">
								<li className="nav-item">
									<a
										className="nav-link active"
										aria-current="page"
										href="index.html"
									>
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="index.html">
										TV Shows
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="index.html">
										Movies
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="index.html">
										My List
									</a>
								</li>
							</ul>
							<form className="d-flex">
								<input
									className="form-control me-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<button className="btn btn-outline-success" type="submit">
									Search
								</button>
								<img id="kidsLogo" src="assets\kids_icon.png" alt="" />
								<img id="avatar" src="assets\avatar.png" alt="" />
								<div className="dropstart">
									<button
										className="btn btn-secondary dropdown-toggle"
										type="button"
										id="dropdownMenuButton1"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									></button>
									<ul
										className="dropdown-menu dropdown-menu-dark"
										aria-labelledby="dropdownMenuButton1"
									>
										<li>
											<a className="dropdown-item" href="profile.html">
												Profile 1
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="backoffice.html">
												Backoffice
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="settings.html">
												Settings
											</a>
										</li>
									</ul>
								</div>
							</form>
						</div>
					</div>
				</nav>
			</div>
		)
}
