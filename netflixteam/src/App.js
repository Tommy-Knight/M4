import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./css/App.css"
import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import SearchResults from "./components/SearchResults"
import DetailsPage from "./components/DetailsPage"
import Registration from "./components/Registration"
import Footer from "./components/Footer"

function App() {
	return (
		<div className="App">
			<Router>
				<>
					<Navbar />
					<Switch>
						<Route
							render={(routerProps) => (
								<SearchResults {...routerProps} title="home" />
							)}
							path="/"
							exact
						/>
						<Route
							render={(routerProps) => (
								<DetailsPage {...routerProps} title="Show Details" />
							)}
							path="/info/:id"
							exact
						/>
						<Route
							render={(routerProps) => (
								<Registration {...routerProps} title="Registration" />
							)}
							path="/registration"
							exact
						/>
						<Route path="/series">
							<h2 style={{ marginLeft: "50px" }}> Our Favourite Series</h2>
							<Carousel movie="Walking Dead" />
						</Route>
						<Route path="/film">
							<h1>FILMS PAGE TO BE ADDED</h1>
						</Route>
					</Switch>
					<Footer />
				</>
			</Router>
		</div>
	)
}

export default App
