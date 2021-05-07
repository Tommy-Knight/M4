import { Container, Col, Row, Spinner, Alert, Form } from "react-bootstrap"
import { Component } from "react"
import { Link } from "react-router-dom"


let searchQuery = ""

class Search extends Component {
	state = {
		songs: {},
		isLoading: false,
		isError: false,
	}

	componentDidMount = async () => {
		try {
			this.setState({
				isLoading: true,
			})

			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/deezer/search?q=" + {searchQuery}
			)
			if (response.ok) {
				let data = await response.json()
				console.log(data)
				this.setState({ songs: data, isError: false, isLoading: false })
			} else {
				this.setState({ isError: true, isLoading: false })
			}
		} catch (error) {
			console.log(error)
			this.setState({ isError: true, isLoading: false })
		}
	}

	onChangeFunction = (e) => {
		searchQuery = e.target.value
		this.componentDidMount()
	}

	render() {
		return (
			<>
				<Container>
					<Form>
						<Form.Group className="mt-3">
							<Form.Control
								style={{ display: "inline-block" }}
								type="text"
								placeholder="Search for Song Titles, Artists..."
								onChange={(e) => {this.onChangeFunction(e) 
									console.log(this.state.data)}}
							/>
						</Form.Group>
					</Form>
					{this.state.isLoading && (
						<Spinner
							style={{ marginLeft: "20%" }}
							animation="grow"
							variant="success"
						/>
					)}
				</Container>


				{!this.state.isLoading && this.state.isError && (
					<Alert variant="success">Uh Oh!</Alert>
				)}

				{this.state.songs.Search && (
					<Container className="m-15 p-5" fluid>
						<h3 className="mt-4 text-white">
							Searching for "{searchQuery}" songs
						</h3>
						<Row>
							{this.state.songs.length > 0 ? (
								this.state.songs.map((song) => (
									<Col key={song.id} className="p-2">
										<Link to={`/info/${song.id}`}>
											<img
												className="iconHover"
												src={song.picture_medium}
												alt={song.title}
											/>
											<div className="text-white">{song.title}</div>
										</Link>
									</Col>
								))
							) : (
								<p>We don't have songs yet!</p>
							)}
						</Row>
					</Container>
				)}
			</>
		)
	}
}

export default Search
