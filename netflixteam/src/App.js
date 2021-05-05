import "bootstrap/dist/css/bootstrap.min.css"
import "./css/App.css"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SearchResults from "./components/SearchResults"
import DetailsPage from "./components/DetailsPage.jsx"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

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
							path="/details/:id"
							exact
						/>
						<Route path="/series">
							<h1>SERIES PAGE TO BE ADDED</h1>
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
