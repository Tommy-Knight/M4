import React from "react"

class DetailsPage extends React.Component {
	state = {
		id: this.props.match.params.id,
		movieData: null,
		comments: [],
	}

	componentDidMount() {
		this.getOmdbData()
		this.getCommentData()
	}

	componentDidUpdate = async (previousState) => {
		if (previousState.match.params.id !== this.props.match.params.id) {
			this.setState({ id: this.props.match.params.id })
			this.getOmdbData()
			this.getCommentData()
		}
	}

	getOmdbData = async () => {
		const API = "http://www.omdbapi.com/"
		const APIKEY = "c71a553d"

		try {
			this.setState({
				isLoading: true,
			})

			let response = await fetch(`${API}?apikey=${APIKEY}&i=${this.state.id}`)
			if (response.ok) {
				let data = await response.json()
				this.setState({ movieData: data, isError: false, isLoading: false })
			} else {
				this.setState({ isError: true, isLoading: false })
			}
		} catch (error) {
			console.log(error)
			this.setState({ isError: true, isLoading: false })
		}
	}

	getCommentData = async () => {
		let result = ""
		try {
			result = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/" + this.state.id,
				{
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGU5Y2IxZjBmYjAwMTVkOTE3MGMiLCJpYXQiOjE2MjAyMTgxNjEsImV4cCI6MTYyMTQyNzc2MX0.59vv9fgaepUpwEKqCRORz0g_U0u8vGS9RuheucGTlW8",
					},
				}
			).then((result) => result.json())
		} catch (error) {
			console.error(error)
			return null
		} finally {
			this.setState({ comments: result })
		}
	}

	render() {
		return (
			<>
				{this.state.movieData ? (
					<div className="d-flex flex-column align-items-center">
						<h1 className="text-white">{this.state.movieData.Title}</h1>
						<img src={this.state.movieData.Poster} alt="" />
						<p className="w-50 text-white">{this.state.movieData.Plot}</p>
						{this.state.comments.length > 0 &&
							this.state.comments.map((comment) => (
								<p className="text-muted">
									{comment.author} said {comment.comment}
								</p>
							))}
					</div>
				) : (
					<p className="text-white text-center">No data!</p>
				)}
			</>
		)
	}
}

export default DetailsPage
