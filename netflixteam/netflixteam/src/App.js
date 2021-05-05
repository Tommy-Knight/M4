import "bootstrap/dist/css/bootstrap.min.css"
import "./css/styles.css"
import "./App.css"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SearchResults from "./components/SearchResults"
import Galleries from "./components/Galleries"

function App() {
	return (
		<div className="App">
			<Navbar />
			<SearchResults />
			<Galleries movie="Toy Story" />
			<Galleries movie="Shrek" />
			<Galleries movie="South Park" />
			<Footer />
		</div>
	)
}

export default App