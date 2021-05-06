import { Container, Col, Row, Spinner, Alert } from "react-bootstrap"
import { Component } from "react"
import Link from "react-router-dom/Link"

const API = "http://www.omdbapi.com/"
const APIKEY = "c71a553d"

class Carousel extends Component {
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

			let response = await fetch(
				`${API}?apikey=${APIKEY}&s=${this.props.movie}`
			)
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

	render() {
		return (
			<>

				{!this.state.isLoading && this.state.isError && (
					<Alert variant="danger">Uh Oh!</Alert>
				)}
				{this.state.movies.Search && (
					<Container className="mx-15 p-5" fluid>
						<h3 className="font-weight-bold text-white text-left m-2 p-2">
							{this.props.movie}
						</h3>
						<Row className=" p-1 m-1">
							{this.state.movies.Search.length > 0 ? (
								this.state.movies.Search.map((movie) => (
									<Col key={movie.imdbID} className="px-2">
										<Link to={`/info/${movie.imdbID}`}>
											<img className="movieHover" src={movie.Poster} alt={movie.Title} />
											<div className="text-white">{movie.Title}</div>
										</Link>
									</Col>
								))
							) : (
								<p>Nothing here!</p>
							)}
						</Row>
					</Container>
				)}
			</>
		)
	}
}

export default Carousel
