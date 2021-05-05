import { Container, Col, Row, Spinner, Alert, Form } from "react-bootstrap"
import { Component } from "react"

const API = "http://www.omdbapi.com/"
const APIKEY = "c71a553d"
let searchQuery = ""

class SearchResults extends Component {
	state = {
		movies: {},
		isLoading: false,
		isError: false,
	}

	componentDidMount = async () => {
		try {
			this.setState({
				isLoading: true,
			})

			let response = await fetch(`${API}?apikey=${APIKEY}&s=${searchQuery}`)
			if (response.ok) {
				let data = await response.json()
				this.setState({ movies: data, isError: false, isLoading: false })
			} else {
				this.setState({ isError: true, isLoading: false })
			}
		} catch (error) {
			console.log(error)
			this.setState({ isError: true, isLoading: false })
		}
	}

	selectedStyle = { border: "2px solid red", color: "red" }
	notSelectedStyle = { border: "none", color: "black" }

	onChangeFunction = (e) => {
		searchQuery = e.target.value
		this.componentDidMount()
	}

	render() {
		return (
			<>
				<Container>
					<Form>
						<Form.Group controlId="formBasicEmail" className="mt-3">
							<Form.Control
								type="text"
								placeholder="Search"
								onChange={(e) => this.onChangeFunction(e)}
							/>
						</Form.Group>
					</Form>
				</Container>
				{this.state.isLoading && (
					<Spinner animation="border" variant="primary" />
				)}
				{!this.state.isLoading && this.state.isError && (
					<Alert variant="danger">Aww snap! We got an error!</Alert>
				)}
				{this.state.movies.Search && (
					<Container fluid>
						<h3 className="mt-4 text-white">Movies of "{searchQuery}"</h3>
						<Row className="no-gutters testimonial-group ">
							{console.log(
								"this.state.movies.Search:",
								this.state.movies.Search
							)}
							{this.state.movies.Search.length > 0 ? (
								this.state.movies.Search.map((movie) => (
									<Col key={movie.imdbID} className="px-1">
										<img src={movie.Poster} alt={movie.Title} />
										<div className="text-white">{movie.Title}</div>
									</Col>
								))
							) : (
								<p>We don't have Movies yet!</p>
							)}
						</Row>
					</Container>
				)}
			</>
		)
	}
}

export default SearchResults
