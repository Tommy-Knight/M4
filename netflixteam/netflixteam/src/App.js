import "bootstrap/dist/css/bootstrap.min.css"
import "./css/styles.css"
import "./css/App.css"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SearchResults from "./components/SearchResults"
import Carousel from "./components/Carousel"
import DetailsPage from "./components/DetailsPage.jsx"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
	return (
		<div className="App">
			<Router>
				<>
					<Navbar />
					<Switch>
						<Route path="/" exact>
							<SearchResults />
							<Carousel movie="Toy Story" />
							<Carousel movie="Shrek" />
							<Carousel movie="South Park" />
							<Footer />
						</Route>
						<Route
							exact
							render={(routerProps) => (
								<DetailsPage {...routerProps} title="Show Details" />
							)}
							path="/details/:id"
						/>
					</Switch>
				</>
			</Router>
		</div>
	)
}

export default App
